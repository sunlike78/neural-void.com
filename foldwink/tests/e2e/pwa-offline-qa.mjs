import { BASE_URL, runCases, seedDismissedOnboarding, waitForMenu } from "./lib/harness.mjs";

await runCases("pwa-offline-qa", [
  {
    name: "standalone top-level app registers a service worker and reopens offline after warm cache",
    viewport: { width: 390, height: 844 },
    fn: async ({ page, context }) => {
      await seedDismissedOnboarding(page);
      await page.goto(BASE_URL);
      await waitForMenu(page);

      await page.evaluate(async () => {
        await navigator.serviceWorker.ready;
      });
      await page.reload();
      await waitForMenu(page);

      const controlled = await page.evaluate(() => !!navigator.serviceWorker.controller);
      if (!controlled) throw new Error("service worker did not control the reloaded app");

      await context.setOffline(true);
      try {
        await page.reload({ waitUntil: "domcontentloaded" });
        await waitForMenu(page);
      } finally {
        await context.setOffline(false);
      }
    },
  },
  {
    name: "eligible browsers expose a player-initiated PWA install action and record only its coarse outcome",
    viewport: { width: 390, height: 844 },
    fn: async ({ page }) => {
      await seedDismissedOnboarding(page);
      await page.goto(BASE_URL);
      await waitForMenu(page);

      await page.evaluate(() => {
        const event = new window.Event("beforeinstallprompt", { cancelable: true });
        Object.assign(event, {
          prompt: async () => undefined,
          userChoice: Promise.resolve({ outcome: "dismissed", platform: "web" }),
        });
        window.dispatchEvent(event);
      });

      const install = page.getByRole("button", { name: "Install Foldwink" });
      await install.waitFor();
      await install.click();
      await install.waitFor({ state: "detached" });

      const count = await page.evaluate(() => {
        const raw = localStorage.getItem("foldwink:analytics:events:v2");
        return raw ? JSON.parse(raw).pwa_install_choice : 0;
      });
      if (count !== 1) throw new Error(`expected one install choice event, got ${count}`);
    },
  },]);
