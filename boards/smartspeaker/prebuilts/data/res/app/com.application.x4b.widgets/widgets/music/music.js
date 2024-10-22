export default function(global, globalThis, window, $app_exports$, $app_evaluate$){ 
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$){
            var setTimeout = global.setTimeout;
            var setInterval = global.setInterval;
            var clearTimeout = global.clearTimeout;
            var clearInterval = global.clearInterval;
            var $app_require$ = global.$app_require$ || org_app_require
            
            var createPageHandler = function() {
              return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/music/music.ux?uxType=card":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/music/music.ux?uxType=card ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: {
    isPlaying: false,
    currIndex: 0,
    playingIndex: null,
    audios: [{
      title: 'Smooth Sailing',
      artist: 'AUDIONAUTIX.COM',
      cover: '/common/images/smooth_sailing.png',
      duration: 168.258,
      src: '/common/medias/SmoothSailing.mp3'
    }, {
      id: 2,
      title: 'Code Blue',
      artist: 'AUDIONAUTIX.COM',
      cover: '/common/images/code_blue.png',
      duration: 142.741,
      src: '/common/medias/CodeBlue.mp3'
    }, {
      id: 3,
      title: 'Down The Way',
      artist: 'AUDIONAUTIX.COM',
      cover: '/common/images/down_the_way.png',
      duration: 86.263,
      src: '/common/medias/DownTheWay.mp3'
    }]
  },
  onInit() {},
  play() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) this.playAudio();else audio.pause();
  },
  switch(addend) {
    console.log(addend);
    if (addend === -1 && this.currIndex === 0) {
      console.log('没有上一首');
      return;
    } else if (addend === 1 && this.currIndex === this.audios.length - 1) {
      console.log('没有下一首');
      return;
    }
    this.currIndex += addend;
    this.isPlaying = true;
    this.playAudio();
  },
  playAudio() {}
};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/music/music.ux?uxType=card":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/music/music.ux?uxType=card ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "music-widget"
      ]
    ],
    {
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "width": "240px",
      "height": "412px",
      "backgroundColor": "#4B4D51",
      "paddingTop": "32px",
      "paddingRight": "32px",
      "paddingBottom": "20px",
      "paddingLeft": "32px"
    }
  ],
  [
    [
      [
        0,
        "music-meta"
      ]
    ],
    {
      "width": "100%",
      "flexDirection": "column",
      "alignItems": "center"
    }
  ],
  [
    [
      [
        0,
        "img-wrapper"
      ]
    ],
    {
      "width": "176px",
      "height": "176px",
      "borderRadius": "10px",
      "marginBottom": "20px",
      "overflow": "hidden"
    }
  ],
  [
    [
      [
        0,
        "img-wrapper"
      ],
      [
        0,
        "music-poster"
      ]
    ],
    {
      "width": "176px",
      "height": "176px"
    }
  ],
  [
    [
      [
        0,
        "music-title"
      ]
    ],
    {
      "fontSize": "20px",
      "lineHeight": "30px",
      "fontWeight": "600",
      "color": "#ffffff"
    }
  ],
  [
    [
      [
        0,
        "music-artist"
      ]
    ],
    {
      "fontSize": "16px",
      "lineHeight": "24px",
      "color": "rgba(255,255,255,0.4)"
    }
  ],
  [
    [
      [
        0,
        "controlbar"
      ]
    ],
    {
      "width": "100%",
      "height": "66px",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/music/music.ux?uxType=card&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/music/music.ux?uxType=card& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "music-widget"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "music-meta"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "img-wrapper"
  ]
}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": function () {return _vm_.audios[_vm_.currIndex].cover},
  "classList": [
    "music-poster"
  ]
}
    }
  )]),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "music-title"
  ],
  "value": function () {return _vm_.audios[_vm_.currIndex].title}
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "music-artist"
  ],
  "value": function () {return _vm_.audios[_vm_.currIndex].artist}
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "controlbar"
  ]
}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-prev.png",
  "events": {
    "click": function (evt) { return _vm_.switch(-1,evt)}
  }
}
    }
  ),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !_vm_.isPlaying},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-play.png",
  "events": {
    "click": function (evt) {_vm_.play(evt)}
  }
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !(!_vm_.isPlaying)},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-pause.png",
  "events": {
    "click": function (evt) {_vm_.play(evt)}
  }
}
    }
  )
    }),aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-next.png",
  "events": {
    "click": function (evt) { return _vm_.switch(1,evt)}
  }
}
    }
  )])])
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/widgets/music/music.ux?uxType=card ***!
  \************************************************/

var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./music.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/music/music.ux?uxType=card")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./music.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/music/music.ux?uxType=card")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./music.ux?uxType=card& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/music/music.ux?uxType=card&")


      $app_exports$['music'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    
})();

/******/ })()
;
            };
            return createPageHandler();
          })(global, globalThis, window, $app_exports$, $app_evaluate$)
  }