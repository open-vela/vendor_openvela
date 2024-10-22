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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/light/light.ux?uxType=card":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/light/light.ux?uxType=card ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const MIN_HEIGHT = 0;
const MAX_HEIGHT = 216;
let startTime = 0;
var _default = {
  data: {
    iotName: '吸顶灯',
    room: '客厅',
    offsetY: 107,
    canDrag: false
  },
  onInit() {
    startTime = Date.now();
  },
  onReady() {},
  onTouchStart(e) {
    this.canDrag = true;
  },
  onTouchMove(e) {
    console.log('touchmove e ', e);
    const offsetY = e.changedTouches[0].offsetY;
    if (offsetY > MAX_HEIGHT || offsetY < MIN_HEIGHT) return;
    if (this.canDrag) this.offsetY = offsetY;
    console.log('this.offsetY ', this.offsetY);
  },
  onTouchEnd(e) {
    console.log('touchend e ', e);
  }
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/light/light.ux?uxType=card":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/light/light.ux?uxType=card ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "iot-widget"
      ]
    ],
    {
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "width": "240px",
      "height": "412px",
      "backgroundColor": "#ffffff",
      "borderRadius": "40px",
      "paddingTop": "14px",
      "paddingBottom": "20px"
    }
  ],
  [
    [
      [
        0,
        "iot-info"
      ]
    ],
    {
      "flexDirection": "column",
      "alignItems": "center",
      "marginBottom": "10px"
    }
  ],
  [
    [
      [
        0,
        "iot-info"
      ],
      [
        0,
        "txt-device"
      ]
    ],
    {
      "fontSize": "26px",
      "lineHeight": "34px",
      "color": "#000000"
    }
  ],
  [
    [
      [
        0,
        "iot-info"
      ],
      [
        0,
        "txt-room"
      ]
    ],
    {
      "fontSize": "24px",
      "lineHeight": "32px",
      "color": "rgba(0,0,0,0.5)"
    }
  ],
  [
    [
      [
        0,
        "slider-wrapper"
      ]
    ],
    {
      "width": "108px",
      "height": "216px",
      "backgroundColor": "#fef3d8",
      "borderRadius": "34px",
      "position": "relative",
      "overflow": "hidden",
      "transform": "{\"rotate\":\"180deg\"}",
      "transformOrigin": "54px 108px",
      "justifyContent": "center"
    }
  ],
  [
    [
      [
        0,
        "slider-track"
      ]
    ],
    {
      "position": "absolute",
      "top": "0px",
      "width": "100%",
      "backgroundColor": "#FFBC39"
    }
  ],
  [
    [
      [
        0,
        "icon-area"
      ]
    ],
    {
      "width": "108px",
      "height": "64px",
      "borderRadius": "34px",
      "backgroundColor": "#00D085",
      "justifyContent": "center",
      "alignItems": "center"
    }
  ],
  [
    [
      [
        0,
        "icon-switch"
      ]
    ],
    {
      "width": "42px",
      "height": "42px"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/light/light.ux?uxType=card&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/light/light.ux?uxType=card& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "iot-widget"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "iot-info"
  ]
}
    }
  ,
		[aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "txt-device"
  ],
  "value": function () {return _vm_.iotName}
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "txt-room"
  ],
  "value": function () {return _vm_.room}
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "slider-wrapper"
  ],
  "events": {
    "touchstart": function (evt) {_vm_.onTouchStart(evt)},
    "touchmove": function (evt) {_vm_.onTouchMove(evt)},
    "touchend": function (evt) {_vm_.onTouchEnd(evt)}
  }
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "slider-track"
  ],
  "style": {
    "height": function () {return _vm_.offsetY+'px'}
  }
}
    }
  ),aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/x4b/icon-brightness.png"
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "icon-area"
  ]
}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-switch.png",
  "classList": [
    "icon-switch"
  ]
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
  !*** ./src/widgets/light/light.ux?uxType=card ***!
  \************************************************/

var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./light.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/light/light.ux?uxType=card")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./light.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/light/light.ux?uxType=card")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./light.ux?uxType=card& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/light/light.ux?uxType=card&")


      $app_exports$['light'] = function($app_exports$) {
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