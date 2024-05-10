  function handleDeviceMotion(event) {
    const { alpha, beta } = event.rotationRate;
    const scaleFactor = 5;

    document.querySelector('.logo').style.transform = `skewX(${alpha * scaleFactor}deg) skewY(${beta * scaleFactor}deg)`;
  }

  if ('DeviceMotionEvent' in window) {
    window.addEventListener('devicemotion', handleDeviceMotion);
  } else {
    console.error('DeviceMotionEvent is not supported in this browser.');
  }
