import { describe, expect, it } from "vitest";
import { generateQrMatrix } from "../qr";
import {
  encodePassportToSeal,
  decodePassportFromSeal,
} from "../waxSealTransfer";
import type { ArchivistProfile } from "../types";

describe("QR Code Generator", () => {
  it("generates a square matrix of modules for short and long text", () => {
    const m1 = generateQrMatrix("TEST");
    expect(m1.length).toBeGreaterThan(20);
    expect(m1[0].length).toBe(m1.length);

    const m2 = generateQrMatrix("FWSEAL1:12345678-abcdefghijklmnop");
    expect(m2.length).toBeGreaterThan(20);
    expect(m2[0].length).toBe(m2.length);
  });

  it("places finder patterns correctly at the three corners", () => {
    const matrix = generateQrMatrix("HELLO");
    const n = matrix.length;
    // Top-left finder center (3,3) must be true
    expect(matrix[3][3]).toBe(true);
    // Top-left border (0,0) must be true
    expect(matrix[0][0]).toBe(true);
    // Top-right finder center (3, n-4) must be true
    expect(matrix[3][n - 4]).toBe(true);
    // Bottom-left finder center (n-4, 3) must be true
    expect(matrix[n - 4][3]).toBe(true);
  });
});

describe("Wax Seal Passport Transfer", () => {
  const sampleProfile: ArchivistProfile = {
    version: 1,
    level: 5,
    xp: 1850,
    ink: 42,
    wax: 7,
    prestige: 2,
    discipline: "archivist",
    sealId: "seal_compass",
    nibId: "nib_obsidian",
    titleId: "title_connections",
    collectedStampIds: ["stamp_morning_brew", "stamp_midori_compass"],
    contractsAttempted: 3,
    contractsWon: 2,
    activeContract: null,
    playerSeed: "user_seed_test_123",
  };

  it("encodes profile into a portable FWSEAL1 string", () => {
    const sealStr = encodePassportToSeal(sampleProfile, "user_seed_test_123");
    expect(sealStr.startsWith("FWSEAL1:")).toBe(true);
    expect(sealStr.includes("-")).toBe(true);
  });

  it("decodes portable seal string back into identical profile and playerSeed", () => {
    const sealStr = encodePassportToSeal(sampleProfile, "user_seed_test_123");
    const res = decodePassportFromSeal(sealStr);
    expect(res.ok).toBe(true);
    if (!res.ok) return;

    expect(res.profile?.level).toBe(5);
    expect(res.profile?.xp).toBe(1850);
    expect(res.profile?.ink).toBe(42);
    expect(res.profile?.wax).toBe(7);
    expect(res.profile?.prestige).toBe(2);
    expect(res.profile?.discipline).toBe("archivist");
    expect(res.profile?.sealId).toBe("seal_compass");
    expect(res.profile?.nibId).toBe("nib_obsidian");
    expect(res.profile?.titleId).toBe("title_connections");
    expect(res.profile?.collectedStampIds).toEqual(["stamp_morning_brew", "stamp_midori_compass"]);
    expect(res.profile?.contractsWon).toBe(2);
    expect(res.playerSeed).toBe("user_seed_test_123");
  });

  it("rejects tampered or corrupted seal strings gracefully", () => {
    const sealStr = encodePassportToSeal(sampleProfile);
    const corrupted = sealStr.slice(0, -3) + "xyz";
    const res = decodePassportFromSeal(corrupted);
    expect(res.ok).toBe(false);
    expect(res.error).toBeDefined();

    const invalidHeader = decodePassportFromSeal("INVALID:xyz");
    expect(invalidHeader.ok).toBe(false);
  });
});
