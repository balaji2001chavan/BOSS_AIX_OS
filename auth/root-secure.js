import crypto from "crypto";

export function verifyOwner({
  phraseInput,
  voiceMatchScore,
  palmHash,
  deviceId
}) {
  const MASTER_HASH = process.env.ROOT_HASH;
  const MIN_VOICE = 0.85;

  // Step 1: Hash तयार करतो
  const phraseHash = crypto
    .createHash("sha256")
    .update(phraseInput)
    .digest("hex");

  // Step 2: Validate
  const phraseOk = phraseHash === MASTER_HASH;
  const voiceOk = voiceMatchScore >= MIN_VOICE;
  const palmOk = palmHash === process.env.PALM_HASH;
  const deviceOk = deviceId === process.env.DEVICE_ID;

  if (phraseOk && voiceOk && palmOk && deviceOk) {
    return {
      access: true,
      mode: "ROOT",
      message: "FULL ACCESS GRANTED"
    };
  }

  // Fail = Lock
  return {
    access: false,
    mode: "DENIED",
    action: "LOCKDOWN",
    alert: "Unauthorized attempt detected"
  };
}
