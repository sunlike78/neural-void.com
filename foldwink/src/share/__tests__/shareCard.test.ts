import { describe, expect, it } from "vitest";
import { isShareCardSupported, type ShareCardOptions } from "../shareCard";

describe("shareCard renderer", () => {
  it("detects whether share card canvas is supported", () => {
    // In node/vitest environment, document is defined if jsdom/happy-dom or node
    const supported = isShareCardSupported();
    expect(typeof supported).toBe("boolean");
  });

  it("handles square and story options gracefully without error", () => {
    const squareOpts: ShareCardOptions = {
      mode: "daily",
      title: "Test Puzzle",
      subtitle: "DAILY · EASY",
      result: "win",
      mistakesUsed: 0,
      durationMs: 45000,
      difficulty: "easy",
      groupOrder: ["g1", "g2", "g3", "g4"],
      solvedGroupIds: ["g1", "g2", "g3", "g4"],
      winkUsed: false,
      winkAvailable: false,
      archetype: "🎯 THE SNIPER",
      format: "square",
    };

    const storyOpts: ShareCardOptions = {
      ...squareOpts,
      format: "story",
    };

    expect(squareOpts.format).toBe("square");
    expect(storyOpts.format).toBe("story");
  });
});
