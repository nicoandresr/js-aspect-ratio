const PHONE_SCREEN_BREAKPOINT = 576;

class aspectRatio {
  constructor(ratioWidth, ratioHeight) {
    if (!ratioWidth || !ratioHeight) {
      throw new Error("Missing ratio with or ratio height");
    } else if (typeof ratioWidth !== 'number' || typeof ratioHeight !== 'number') {
      throw new Error('ratio with and ratio height must be a numbers');
    }
    this._ratioWidth = ratioWidth;
    this._ratioHeight = ratioHeight;
    this._relation = this._ratioWidth / this._ratioHeight;
  }

  getFullWidth() {
    if (!window) {
      throw new Error('get full width only works in browser environment');
    }
    return window.innerWidth > PHONE_SCREEN_BREAKPOINT
      ? Math.round(window.innerHeight * this._relation)
      : Math.round(window.innerHeight / this._relation);
  }

  getFullHeight() {
    if (!window) {
      throw new Error('get full height only works in browser environment');
    }
    return Math.round(window.innerHeight);
  }

  getWidth(pixelsHeight) {
    if (!pixelsHeight) {
      throw new Error("Missing pixels height");
    } else if (typeof pixelsHeight !== 'number') {
      throw new Error('pixels height must be a number');
    }
    return Math.round(pixelsHeight * this._relation);
  }

  getHeight(pixelsWidth) {
    if (!pixelsWidth) {
      throw new Error("Missing pixels height");
    } else if (typeof pixelsWidth !== 'number') {
      throw new Error('pixels height must be a number');
    }
    return Math.round(pixelsWidth / this._relation);
  }
}

export default aspectRatio;

