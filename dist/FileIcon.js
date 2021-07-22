"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FileIcon = /*#__PURE__*/function () {
  function FileIcon() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      colors: null,
      theme: null
    };

    _classCallCheck(this, FileIcon);

    this.initThemes();
    this.colors = options.colors || this.themes.greyscale;
    if (this.themes[options.theme]) this.colors = this.themes[options.theme];
  }

  _createClass(FileIcon, [{
    key: "initThemes",
    value: function initThemes() {
      this.themes = {
        greyscale: {
          bg: 'transparent',
          iconBg: '#92a5ab',
          textBg: '#6e7d82',
          text: '#FFFFFF'
        },
        black: {
          bg: 'transparent',
          iconBg: '#000000',
          textBg: '#000000',
          text: '#FFFFFF'
        },
        white: {
          bg: 'transparent',
          iconBg: '#ffffff',
          textBg: '#ffffff',
          text: '#000000'
        },
        red: {
          bg: 'transparent',
          iconBg: '#be4646',
          textBg: '#901d1d',
          text: '#FFFFFF'
        },
        purple: {
          bg: 'transparent',
          iconBg: '#a040b8',
          textBg: '#73178a',
          text: '#FFFFFF'
        },
        blue: {
          bg: 'transparent',
          iconBg: '#2B73BA',
          textBg: '#00458F',
          text: '#FFFFFF'
        },
        lightBlue: {
          bg: 'transparent',
          iconBg: '#54cbed',
          textBg: '#4198b3',
          text: '#FFFFFF'
        },
        green: {
          bg: 'transparent',
          iconBg: '#00b36f',
          textBg: '#03763b',
          text: '#FFFFFF'
        },
        yellow: {
          bg: 'transparent',
          iconBg: '#fed12e',
          textBg: '#bf9f30',
          text: '#FFFFFF'
        },
        orange: {
          bg: 'transparent',
          iconBg: 'coral',
          textBg: 'rgba(0,0,0,0.1)',
          text: '#FFFFFF'
        },
        'greyscale-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#6e7d82',
          outline: '#92a5ab'
        },
        'black-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#000000',
          outline: '#000000'
        },
        'white-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#FFFFFF',
          outline: '#FFFFFF'
        },
        'red-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#be4646',
          outline: '#be4646'
        },
        'purple-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#a040b8',
          outline: '#a040b8'
        },
        'blue-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#2B73BA',
          outline: '#2B73BA'
        },
        'lightBlue-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#54cbed',
          outline: '#54cbed'
        },
        'green-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#00b36f',
          outline: '#00b36f'
        },
        'yellow-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: '#fed12e',
          outline: '#fed12e'
        },
        'orange-outline': {
          bg: 'transparent',
          iconBg: 'transparent',
          textBg: 'transparent',
          text: 'coral',
          outline: 'coral'
        }
      };
    }
  }, {
    key: "setColorTheme",
    value: function setColorTheme(theme) {
      if (this.themes[theme]) {
        this.colors = this.themes[theme];
        return this.colors;
      }

      return null;
    }
  }, {
    key: "setColors",
    value: function setColors(colors) {
      if (_typeof(colors) !== 'object') {
        throw new TypeError('Expected setColors argument to be an object');
      }

      this.colors = colors;
    }
  }, {
    key: "create",
    value: function create(ext, colors) {
      var _this = this;

      return new Promise(function (resolve) {
        if (colors) _this.colors = colors;
        if (!_this.colors) _this.colors = _this.themes.greyscale;

        var canvas = _this.createCanvas(ext);

        canvas.toBlob(function (blob) {
          var img = FileIcon.blobToImg(blob);
          resolve(img);
        });
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(ext) {
      var canvas = document.createElement('canvas');
      canvas.width = 384;
      canvas.height = 512;
      var ctx = canvas.getContext('2d');
      FileIcon.drawBg(canvas, ctx, this.colors.bg);
      FileIcon.drawIcon(canvas, ctx, this.colors.iconBg, this.colors.outline);
      FileIcon.drawTextBg(canvas, ctx, this.colors.textBg);
      FileIcon.drawText(canvas, ctx, ext, this.colors.text);
      return canvas;
    }
  }], [{
    key: "blobToImg",
    value: function blobToImg(blob) {
      if (!(blob instanceof Blob)) {
        throw new Error('Invalid Argument Exception. blobToImg expected blob');
      }

      var url = URL.createObjectURL(blob);
      var img = document.createElement('img');
      img.src = url;

      img.onload = function () {
        URL.revokeObjectURL(blob);
      };

      return img;
    }
  }, {
    key: "drawBg",
    value: function drawBg(canvas, ctx, color) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "drawTextBg",
    value: function drawTextBg(canvas, ctx, color) {
      ctx.fillStyle = color;
      ctx.fillRect(72, canvas.height - 190, 268, 120);
    }
  }, {
    key: "drawText",
    value: function drawText(canvas, ctx, ext, color) {
      ctx.fillStyle = color;
      ctx.font = '70px Arial';
      ctx.font = "normal normal normal normal 15px/28px 'Helvetica Neue', Helvetica, Arial, sans-serif";
      ctx.font = "small-caps bold 80px 'HelveticaNeue',Helvetica,Arial,sans-serif";
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'end';
      ctx.fillText(ext, 320, canvas.height - 190 + 60, 240);
    }
  }, {
    key: "drawIcon",
    value: function drawIcon(canvas, ctx, hexcolor, outline) {
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
      var x = (canvas.width - canvas.width * 0.75) * 0.75;
      var y = (canvas.height - canvas.height * 0.75) * 0.75;
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
  }, {
    key: "draw1",
    value: function draw1(ctx, hexcolor) {
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
  }]);

  return FileIcon;
}();

var _default = FileIcon;
exports["default"] = _default;
