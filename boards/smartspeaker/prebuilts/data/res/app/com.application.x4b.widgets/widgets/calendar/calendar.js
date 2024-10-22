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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=card":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=card ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data: {}
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=card":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=card ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "p-20"
      ]
    ],
    {
      "paddingTop": "20px",
      "paddingRight": "20px",
      "paddingBottom": "20px",
      "paddingLeft": "20px"
    }
  ],
  [
    [
      [
        0,
        "px"
      ]
    ],
    {
      "paddingLeft": "4px",
      "paddingRight": "4px"
    }
  ],
  [
    [
      [
        0,
        "pl-30"
      ]
    ],
    {
      "paddingLeft": "30px"
    }
  ],
  [
    [
      [
        0,
        "pr-30"
      ]
    ],
    {
      "paddingRight": "30px"
    }
  ],
  [
    [
      [
        0,
        "ml-20"
      ]
    ],
    {
      "marginLeft": "20px"
    }
  ],
  [
    [
      [
        0,
        "hidden"
      ]
    ],
    {
      "display": "none"
    }
  ],
  [
    [
      [
        0,
        "bg-bgray"
      ]
    ],
    {
      "backgroundColor": "rgba(242,244,252,0.08)"
    }
  ],
  [
    [
      [
        0,
        "bg-cgray"
      ]
    ],
    {
      "backgroundColor": "rgba(28,28,28,1)"
    }
  ],
  [
    [
      [
        0,
        "bg-green"
      ]
    ],
    {
      "backgroundColor": "rgba(74,222,128,1)"
    }
  ],
  [
    [
      [
        0,
        "border"
      ]
    ],
    {
      "borderTopWidth": "1px",
      "borderRightWidth": "1px",
      "borderBottomWidth": "1px",
      "borderLeftWidth": "1px",
      "borderStyle": "solid"
    }
  ],
  [
    [
      [
        0,
        "b-rd-100"
      ]
    ],
    {
      "borderRadius": "100px"
    }
  ],
  [
    [
      [
        0,
        "b-rd-2"
      ]
    ],
    {
      "borderRadius": "2px"
    }
  ],
  [
    [
      [
        0,
        "b-rd-30"
      ]
    ],
    {
      "borderRadius": "30px"
    }
  ],
  [
    [
      [
        0,
        "b-rd-40"
      ]
    ],
    {
      "borderRadius": "40px"
    }
  ],
  [
    [
      [
        0,
        "c-gray"
      ]
    ],
    {
      "color": "rgba(156,163,175,1)"
    }
  ],
  [
    [
      [
        0,
        "c-white"
      ]
    ],
    {
      "color": "rgba(255,255,255,1)"
    }
  ],
  [
    [
      [
        0,
        "flex-row"
      ]
    ],
    {
      "flexDirection": "row"
    }
  ],
  [
    [
      [
        0,
        "flex-col"
      ]
    ],
    {
      "flexDirection": "column"
    }
  ],
  [
    [
      [
        0,
        "absolute"
      ]
    ],
    {
      "position": "absolute"
    }
  ],
  [
    [
      [
        0,
        "relative"
      ]
    ],
    {
      "position": "relative"
    }
  ],
  [
    [
      [
        0,
        "fs-22"
      ]
    ],
    {
      "fontSize": "22px"
    }
  ],
  [
    [
      [
        0,
        "fs-26"
      ]
    ],
    {
      "fontSize": "26px"
    }
  ],
  [
    [
      [
        0,
        "h-156"
      ]
    ],
    {
      "height": "156px"
    }
  ],
  [
    [
      [
        0,
        "h-200"
      ]
    ],
    {
      "height": "200px"
    }
  ],
  [
    [
      [
        0,
        "h-28"
      ]
    ],
    {
      "height": "28px"
    }
  ],
  [
    [
      [
        0,
        "h-42"
      ]
    ],
    {
      "height": "42px"
    }
  ],
  [
    [
      [
        0,
        "h-6"
      ]
    ],
    {
      "height": "6px"
    }
  ],
  [
    [
      [
        0,
        "h-64"
      ]
    ],
    {
      "height": "64px"
    }
  ],
  [
    [
      [
        0,
        "h-66"
      ]
    ],
    {
      "height": "66px"
    }
  ],
  [
    [
      [
        0,
        "h-full"
      ]
    ],
    {
      "height": "100%"
    }
  ],
  [
    [
      [
        0,
        "w-167"
      ]
    ],
    {
      "width": "167px"
    }
  ],
  [
    [
      [
        0,
        "w-28"
      ]
    ],
    {
      "width": "28px"
    }
  ],
  [
    [
      [
        0,
        "w-300"
      ]
    ],
    {
      "width": "300px"
    }
  ],
  [
    [
      [
        0,
        "w-330"
      ]
    ],
    {
      "width": "330px"
    }
  ],
  [
    [
      [
        0,
        "w-385"
      ]
    ],
    {
      "width": "385px"
    }
  ],
  [
    [
      [
        0,
        "w-42"
      ]
    ],
    {
      "width": "42px"
    }
  ],
  [
    [
      [
        0,
        "w-90"
      ]
    ],
    {
      "width": "90px"
    }
  ],
  [
    [
      [
        0,
        "w-full"
      ]
    ],
    {
      "width": "100%"
    }
  ],
  [
    [
      [
        0,
        "justify-center"
      ]
    ],
    {
      "justifyContent": "center"
    }
  ],
  [
    [
      [
        0,
        "justify-between"
      ]
    ],
    {
      "justifyContent": "space-between"
    }
  ],
  [
    [
      [
        0,
        "items-center"
      ]
    ],
    {
      "alignItems": "center"
    }
  ],
  [
    [
      [
        0,
        "transform"
      ]
    ],
    {}
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=card&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=card& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": function () {return [_vm_.type==='simple'?'w-300':'w-385 ', _vm_.type==='simple'?'h-156':'h-200 ', 'b-rd-30', 'bg-cgray']}
}
    }
  ,
		[aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.type==='simple'},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/x4b/calendar.png",
  "classList": [
    "w-300",
    "h-156"
  ]
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !(_vm_.type==='simple')},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/x4b/calendar.png",
  "classList": [
    "w-385",
    "h-200"
  ]
}
    }
  )
    })])
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
/*!******************************************************!*\
  !*** ./src/widgets/calendar/calendar.ux?uxType=card ***!
  \******************************************************/

var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./calendar.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=card")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./calendar.ux?uxType=card */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=card")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./calendar.ux?uxType=card& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=card&")


      $app_exports$['calendar'] = function($app_exports$) {
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