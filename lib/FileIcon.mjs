/******/ "use strict";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/FileIcon.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileIcon": () => (/* binding */ FileIcon)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
class FileIcon {
  constructor(
    options = {
      colors: null,
      theme: null,
    }
  ) {
    this.initThemes();
    this.currentTheme = null;
    this.colors = options.colors || this.themes.greyscale;
    if (options.theme) this.setColorTheme(options.theme);
  }

  initThemes() {
    this.themes = {
      greyscale: {
        bg: 'transparent',
        iconBg: '#92a5ab',
        textBg: '#6e7d82',
        text: '#FFFFFF',
      },
      black: {
        bg: 'transparent',
        iconBg: '#000000',
        textBg: '#000000',
        text: '#FFFFFF',
      },
      white: {
        bg: 'transparent',
        iconBg: '#ffffff',
        textBg: '#ffffff',
        text: '#000000',
      },
      red: {
        bg: 'transparent',
        iconBg: '#be4646',
        textBg: '#901d1d',
        text: '#FFFFFF',
      },
      purple: {
        bg: 'transparent',
        iconBg: '#a040b8',
        textBg: '#73178a',
        text: '#FFFFFF',
      },
      blue: {
        bg: 'transparent',
        iconBg: '#2B73BA',
        textBg: '#00458F',
        text: '#FFFFFF',
      },
      lightBlue: {
        bg: 'transparent',
        iconBg: '#54cbed',
        textBg: '#4198b3',
        text: '#FFFFFF',
      },
      green: {
        bg: 'transparent',
        iconBg: '#00b36f',
        textBg: '#03763b',
        text: '#FFFFFF',
      },
      yellow: {
        bg: 'transparent',
        iconBg: '#fed12e',
        textBg: '#bf9f30',
        text: '#FFFFFF',
      },
      orange: {
        bg: 'transparent',
        iconBg: 'coral',
        textBg: 'rgba(0,0,0,0.1)',
        text: '#FFFFFF',
      },
      'greyscale-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#6e7d82',
        outline: '#92a5ab',
      },
      'black-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#000000',
        outline: '#000000',
      },
      'white-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#FFFFFF',
        outline: '#FFFFFF',
      },
      'red-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#be4646',
        outline: '#be4646',
      },
      'purple-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#a040b8',
        outline: '#a040b8',
      },
      'blue-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#2B73BA',
        outline: '#2B73BA',
      },
      'lightBlue-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#54cbed',
        outline: '#54cbed',
      },
      'green-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#00b36f',
        outline: '#00b36f',
      },
      'yellow-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: '#fed12e',
        outline: '#fed12e',
      },
      'orange-outline': {
        bg: 'transparent',
        iconBg: 'transparent',
        textBg: 'transparent',
        text: 'coral',
        outline: 'coral',
      },
    };
  }

  setColorTheme(theme) {
    if (this.themes[theme]) {
      this.colors = this.themes[theme];
      this.currentTheme = theme;
      return this.colors;
    }
    return null;
  }

  setColors(colors) {
    if (typeof colors !== 'object') {
      throw new TypeError('Expected setColors argument to be an object');
    }
    this.colors = colors;
  }

  create(ext, colors) {
    return new Promise((resolve) => {
      if (colors) this.colors = colors;
      if (!this.colors) this.colors = this.themes.greyscale;
      const canvas = this.createCanvas(ext);
      canvas.toBlob((blob) => {
        const img = this.blobToImg(blob);
        resolve(img);
      });
    });
  }

  blobToImg(blob) {
    if (!(blob instanceof Blob)) {
      throw new Error('Invalid Argument Exception. blobToImg expected blob');
    }
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    if (this.currentTheme) {
      img.dataset.theme = this.currentTheme;
    }
    img.src = url;
    img.onload = () => {
      URL.revokeObjectURL(blob);
    };
    return img;
  }

  createCanvas(ext) {
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    FileIcon.drawBg(canvas, ctx, this.colors.bg);
    FileIcon.drawIcon(canvas, ctx, this.colors.iconBg, this.colors.outline);
    FileIcon.drawTextBg(canvas, ctx, this.colors.textBg);
    FileIcon.drawText(canvas, ctx, ext, this.colors.text);
    return canvas;
  }

  static drawBg(canvas, ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  static drawTextBg(canvas, ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(72, canvas.height - 190, 268, 120);
  }

  static drawText(canvas, ctx, ext, color) {
    ctx.fillStyle = color;
    ctx.font = '70px Arial';
    ctx.font =
      "normal normal normal normal 15px/28px 'Helvetica Neue', Helvetica, Arial, sans-serif";
    ctx.font =
      "small-caps bold 80px 'HelveticaNeue',Helvetica,Arial,sans-serif";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'end';
    ctx.fillText(ext, 320, canvas.height - 190 + 60, 240);
  }

  static drawIcon(canvas, ctx, hexcolor, outline) {
    ctx.save();
    ctx.strokeStyle = hexcolor;
    if (outline) {
      ctx.strokeStyle = outline;
      ctx.lineWidth = 20;
    } else {
      ctx.lineWidth = 1;
    }

    ctx.miterLimit = 4;
    ctx.scale(0.75, 0.75);
    const x = (canvas.width - canvas.width * 0.75) * 0.75;
    const y = (canvas.height - canvas.height * 0.75) * 0.75;
    ctx.translate(x, y);
    ctx.scale(1, 1);
    ctx.save();
    ctx.fillStyle = hexcolor || '#000000';
    ctx.beginPath();
    ctx.moveTo(224, 136);
    ctx.lineTo(224, 0);
    ctx.lineTo(24, 0);
    ctx.bezierCurveTo(10.7, 0, 0, 10.7, 0, 24);
    ctx.lineTo(0, 488);
    ctx.bezierCurveTo(0, 501.3, 10.7, 512, 24, 512);
    ctx.lineTo(360, 512);
    ctx.bezierCurveTo(373.3, 512, 384, 501.3, 384, 488);
    ctx.lineTo(384, 160);
    ctx.lineTo(248, 160);
    ctx.bezierCurveTo(234.8, 160, 224, 149.2, 224, 136);
    ctx.closePath();
    ctx.moveTo(384, 121.9);
    ctx.lineTo(384, 128);
    ctx.lineTo(256, 128);
    ctx.lineTo(256, 0);
    ctx.lineTo(262.1, 0);
    ctx.bezierCurveTo(268.5, 0, 274.6, 2.5, 279.1, 7);
    ctx.lineTo(377, 105);
    ctx.bezierCurveTo(381.5, 109.5, 384, 115.6, 384, 121.9);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }

  static draw1(ctx, hexcolor) {
    ctx.save();
    ctx.strokeStyle = 'rgba(50,50,50,1)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 2;
    ctx.save();
    ctx.fillStyle = hexcolor || '#000000';
    ctx.beginPath();
    ctx.moveTo(369.9, 97.9);
    ctx.lineTo(286, 14);
    ctx.bezierCurveTo(277, 5, 264.8, -0.1, 252.1, -0.1);
    ctx.lineTo(48, -0.1);
    ctx.bezierCurveTo(21.5, 0, 0, 21.5, 0, 48);
    ctx.lineTo(0, 464);
    ctx.bezierCurveTo(0, 490.5, 21.5, 512, 48, 512);
    ctx.lineTo(336, 512);
    ctx.bezierCurveTo(362.5, 512, 384, 490.5, 384, 464);
    ctx.lineTo(384, 131.9);
    ctx.bezierCurveTo(384, 119.2, 378.9, 106.9, 369.9, 97.9);
    ctx.closePath();
    ctx.moveTo(332.1, 128);
    ctx.lineTo(256, 128);
    ctx.lineTo(256, 51.9);
    ctx.lineTo(332.1, 128);
    ctx.closePath();
    ctx.moveTo(48, 464);
    ctx.lineTo(48, 48);
    ctx.lineTo(208, 48);
    ctx.lineTo(208, 152);
    ctx.bezierCurveTo(208, 165.3, 218.7, 176, 232, 176);
    ctx.lineTo(336, 176);
    ctx.lineTo(336, 464);
    ctx.lineTo(48, 464);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }
}

var __webpack_exports__FileIcon = __webpack_exports__.FileIcon;
export { __webpack_exports__FileIcon as FileIcon };

//# sourceMappingURL=FileIcon.mjs.map