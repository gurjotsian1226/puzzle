// Get the game pieces
const gamePieces = document.querySelectorAll('.game-piece');

// Add event listeners for touch events
gamePieces.forEach((piece) => {
  piece.addEventListener('touchstart', (e) => {
    // Get the touch coordinates
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    // Simulate a mouse down event
    piece.dispatchEvent(new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window,
      detail: 0,
      screenX: touchX,
      screenY: touchY,
      clientX: touchX,
      clientY: touchY,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      buttons: 0
    }));
  });

  piece.addEventListener('touchmove', (e) => {
    // Get the touch coordinates
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    // Simulate a mouse move event
    piece.dispatchEvent(new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      view: window,
      detail: 0,
      screenX: touchX,
      screenY: touchY,
      clientX: touchX,
      clientY: touchY,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      buttons: 0
    }));
  });

  piece.addEventListener('touchend', (e) => {
    // Simulate a mouse up event
    piece.dispatchEvent(new MouseEvent('mouseup', {
      bubbles: true,
      cancelable: true,
      view: window,
      detail: 0,
      screenX: e.changedTouches[0].clientX,
      screenY: e.changedTouches[0].clientY,
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      buttons: 0
    }));
  });
});