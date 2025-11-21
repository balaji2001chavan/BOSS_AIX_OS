import crypto from "crypto";

export function verifyPalm(scanData) {
  const expectedHash = process.env.PALM_HASH;

  const scanHash = crypto
    .createHash("sha256")
    .update(scanData)
    .digest("hex");

  return scanHash === expectedHash;
}
