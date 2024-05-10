function handleDeviceMotion(event) {
  console.log('handleDeviceMotion event:', event);

  if (event.rotationRate) {
    const { alpha, beta, gamma } = event.rotationRate;
    const scaleFactor = 10;

    document.querySelector('.logo').style.transform = `rotateX(${alpha * scaleFactor}deg) rotateY(${beta * scaleFactor}deg) rotateZ(${gamma * scaleFactor}deg)`;
  } else {
    console.error('No rotationRate data in event.');
  }
}

if ('DeviceMotionEvent' in window) {
  window.addEventListener('devicemotion', handleDeviceMotion);
  console.log('DeviceMotionEvent is supported, listening for events...');
} else {
  console.error('DeviceMotionEvent is not supported in this browser.');
}