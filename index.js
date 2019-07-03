window.addEventListener('load', async () => {
  navigator.usb.addEventListener('connect', console.log);
  navigator.usb.addEventListener('disconnect', console.log);

  const devices = await navigator.usb.getDevices();
  console.log(devices);
});
