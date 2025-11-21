export function verifyDevice(currentDeviceId) {
  const MASTER_DEVICE = process.env.DEVICE_ID;

  if (currentDeviceId === MASTER_DEVICE) {
    return true;
  }

  return false;
}
