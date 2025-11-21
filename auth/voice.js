export function verifyVoice(score) {
  const MIN_VOICE = 0.85;

  if (score >= MIN_VOICE) {
    return true;
  }

  return false;
}
