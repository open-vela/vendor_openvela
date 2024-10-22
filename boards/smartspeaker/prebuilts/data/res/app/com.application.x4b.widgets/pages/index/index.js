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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  onInit() {}
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/textCom/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/textCom/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: {}
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/alarm/alarm.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/alarm/alarm.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/audio/audio.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/audio/audio.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let startTime = 0;
var _default = {
  onInit() {
    startTime = Date.now();
  },
  onReady() {}
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/device/device.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/device/device.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    },
    text: {
      type: String,
      default: '客厅'
    }
  },
  data: {
    status: false,
    percent: 0
  },
  onOff() {
    this.status = !this.status;
  },
  add() {
    this.percent = this.percent + 10;
  },
  reduce() {
    this.percent = this.percent - 10;
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/iot/iot.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/iot/iot.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const MIN_HEIGHT = 0;
const MAX_HEIGHT = 214;
var _default = {
  data: {
    iotName: '灯光',
    room: '客厅',
    offsetY: 107,
    canDrag: false
  },
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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/weather/weather.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/weather/weather.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/textCom/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/textCom/index.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = []

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  ],
  [
    [
      [
        0,
        "demo-page"
      ]
    ],
    {
      "alignItems": "center",
      "justifyContent": "space-between",
      "paddingLeft": "20px",
      "paddingRight": "20px",
      "backgroundColor": "#000000"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/alarm/alarm.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/alarm/alarm.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=comp ***!
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/device/device.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/device/device.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/weather/weather.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/weather/weather.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/audio/audio.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/audio/audio.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "audio-wrraper"
      ]
    ],
    {
      "height": "410px",
      "width": "385px",
      "position": "relative",
      "borderRadius": "30px",
      "overflow": "hidden"
    }
  ],
  [
    [
      [
        0,
        "audio-widget"
      ]
    ],
    {
      "height": "410px",
      "width": "385px",
      "position": "relative",
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "borderRadius": "30px",
      "backgroundSize": "385px 410px",
      "paddingTop": "20px",
      "paddingRight": "20px",
      "paddingBottom": "20px",
      "paddingLeft": "20px",
      "backgroundImage": "package://com.application.x4b.widgets/common/images/x4b/audio-bg.png"
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
      "width": "200px",
      "height": "200px",
      "borderRadius": "20px",
      "marginBottom": "16px",
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
      "width": "200px",
      "height": "200px"
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
      "fontSize": "26px",
      "lineHeight": "36px",
      "fontWeight": "600",
      "color": "#000000"
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
      "fontSize": "24px",
      "lineHeight": "32px",
      "color": "rgba(0,0,0,0.5)"
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
      "width": "108px",
      "height": "64px",
      "borderRadius": "34px",
      "backgroundColor": "#f2f2f2",
      "justifyContent": "center",
      "alignItems": "center"
    }
  ],
  [
    [
      [
        0,
        "icon-pause"
      ]
    ],
    {
      "width": "48px",
      "height": "48px"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/iot/iot.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/iot/iot.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      "backgroundColor": "#4B4D51",
      "borderRadius": "32px",
      "paddingTop": "12px",
      "paddingBottom": "12px"
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
      "flexDirection": "column"
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
      "fontSize": "22px",
      "lineHeight": "28px",
      "color": "#ffffff"
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
      "fontSize": "20px",
      "lineHeight": "26px",
      "color": "rgba(255,255,255,0.3)"
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
      "width": "76px",
      "height": "214px",
      "backgroundColor": "rgba(255,255,255,0.2)",
      "borderRadius": "24px",
      "position": "relative",
      "overflow": "hidden",
      "transform": "{\"rotate\":\"180deg\"}",
      "transformOrigin": "38px 107px"
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
      "backgroundColor": "#ffffff"
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
      "width": "76px",
      "height": "76px"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/textCom/index.ux?uxType=comp&&aliasName=text-com":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/textCom/index.ux?uxType=comp&&aliasName=text-com ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "value": "test11111111111"
}
    }
  )
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page&importNames[]=iot,importNames[]=device,importNames[]=alarm,importNames[]=music,importNames[]=weather,importNames[]=calendar":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page&importNames[]=iot,importNames[]=device,importNames[]=alarm,importNames[]=music,importNames[]=weather,importNames[]=calendar ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "demo-page"
  ]
}
    }
  ,
		[aiot.__cc__('music', {
      __vm__: _vm_,
      __opts__: {}
    }
  ),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "widget-item",
    "w-385",
    "h-200",
    "b-rd-30"
  ]
}
    }
  ,
		[aiot.__cc__('device', {
      __vm__: _vm_,
      __opts__: {}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "widget-item",
    "w-300",
    "h-156",
    "b-rd-30"
  ]
}
    }
  ,
		[aiot.__cc__('device', {
      __vm__: _vm_,
      __opts__: {
  "type": "simple"
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "widget-item"
  ]
}
    }
  ,
		[aiot.__cc__('alarm', {
      __vm__: _vm_,
      __opts__: {
  "type": "simple"
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "widget-item"
  ]
}
    }
  ,
		[aiot.__cc__('weather', {
      __vm__: _vm_,
      __opts__: {}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "widget-item"
  ]
}
    }
  ,
		[aiot.__cc__('calendar', {
      __vm__: _vm_,
      __opts__: {}
    }
  )])])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/alarm/alarm.ux?uxType=comp&&aliasName=alarm":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/alarm/alarm.ux?uxType=comp&&aliasName=alarm ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/alarm.png",
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/alarm.png",
  "classList": [
    "w-385",
    "h-200"
  ]
}
    }
  )
    })])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/audio/audio.ux?uxType=comp&importNames[]=text-com&aliasName=music":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/audio/audio.ux?uxType=comp&importNames[]=text-com&aliasName=music ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "audio-wrraper"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "audio-widget"
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/musiccover.png",
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
  "value": "Extended1234"
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "music-artist"
  ],
  "value": "Animals Team"
}
    }
  ),aiot.__cc__('text-com', {
      __vm__: _vm_,
      __opts__: {}
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/icon-pause.png",
  "classList": [
    "icon-pause"
  ]
}
    }
  )])])])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=comp&&aliasName=calendar":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=comp&&aliasName=calendar ***!
  \****************************************************************************************************************************************************************************************************************************************/
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

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/device/device.ux?uxType=comp&&aliasName=device":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/device/device.ux?uxType=comp&&aliasName=device ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "w-full",
    "h-full",
    "b-rd-30",
    "bg-cgray",
    "flex-col",
    "p-20",
    "justify-between"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "flex-row",
    "w-full",
    "justify-between",
    "items-center"
  ]
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/devices/light.png"
}
    }
  ),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "flex-col",
    "ml-20"
  ]
}
    }
  ,
		[aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "fs-26",
    "c-white"
  ],
  "value": "吸顶灯"
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "c-gray",
    "fs-22"
  ],
  "value": function () {return _vm_.text}
}
    }
  )])]),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.type==='default'},
      
    }
    }
  , function() {
      return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": function () {return ['w-90', 'h-64', 'b-rd-40', 'flex-row', 'justify-center', 'items-center', _vm_.status?'bg-green':'bg-bgray']},
  "events": {
    "click": function (evt) {_vm_.onOff(evt)}
  }
}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/devices/open.png",
  "classList": [
    "h-42",
    "w-42"
  ]
}
    }
  )])
    })]),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.type==='default'},
      
    }
    }
  , function() {
      return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "w-330",
    "h-66",
    "b-rd-100",
    "justify-between",
    "items-center",
    "pr-30",
    "pl-30",
    "bg-bgray"
  ]
}
    }
  ,
		[aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/devices/reducelight.png",
  "classList": [
    "w-28",
    "h-28"
  ],
  "events": {
    "click": function (evt) {_vm_.reduce(evt)}
  }
}
    }
  ),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "h-6",
    "w-167",
    "b-rd-2"
  ]
}
    }
  ,
		[aiot.__ce__('progress', {
      __vm__: _vm_,
      __opts__: {
  "percent": function () {return _vm_.percent}
}
    }
  )]),aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "package://com.application.x4b.widgets/common/images/devices/addlight.png",
  "classList": [
    "w-28",
    "h-28"
  ],
  "events": {
    "click": function (evt) {_vm_.add(evt)}
  }
}
    }
  )])
    })])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/iot/iot.ux?uxType=comp&&aliasName=iot":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/iot/iot.ux?uxType=comp&&aliasName=iot ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  )]),aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/images/icon-switch.png",
  "classList": [
    "icon-switch"
  ]
}
    }
  )])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/weather/weather.ux?uxType=comp&&aliasName=weather":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/weather/weather.ux?uxType=comp&&aliasName=weather ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/weather.png",
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
  "src": "package://com.application.x4b.widgets/common/images/x4b/weather.png",
  "classList": [
    "w-385",
    "h-200"
  ]
}
    }
  )
    })])
}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/components/textCom/index.ux?uxType=comp&name=text-com&aliasName=text-com":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/components/textCom/index.ux?uxType=comp&name=text-com&aliasName=text-com ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/textCom/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/textCom/index.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&&aliasName=text-com */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/textCom/index.ux?uxType=comp&&aliasName=text-com")


      $app_exports$['text-com'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/alarm/alarm.ux?uxType=comp&name=alarm&aliasName=alarm":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/alarm/alarm.ux?uxType=comp&name=alarm&aliasName=alarm ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./alarm.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/alarm/alarm.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./alarm.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/alarm/alarm.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./alarm.ux?uxType=comp&&aliasName=alarm */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/alarm/alarm.ux?uxType=comp&&aliasName=alarm")


      $app_exports$['alarm'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/audio/audio.ux?uxType=comp&name=music&aliasName=music":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/audio/audio.ux?uxType=comp&name=music&aliasName=music ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../components/textCom/index.ux?uxType=comp&name=text-com&aliasName=text-com */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/components/textCom/index.ux?uxType=comp&name=text-com&aliasName=text-com")

var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./audio.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/audio/audio.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./audio.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/audio/audio.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./audio.ux?uxType=comp&importNames[]=text-com&aliasName=music */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/audio/audio.ux?uxType=comp&importNames[]=text-com&aliasName=music")


      $app_exports$['music'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/calendar/calendar.ux?uxType=comp&name=calendar&aliasName=calendar":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/calendar/calendar.ux?uxType=comp&name=calendar&aliasName=calendar ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./calendar.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/calendar/calendar.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./calendar.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/calendar/calendar.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./calendar.ux?uxType=comp&&aliasName=calendar */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/calendar/calendar.ux?uxType=comp&&aliasName=calendar")


      $app_exports$['calendar'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/device/device.ux?uxType=comp&name=device&aliasName=device":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/device/device.ux?uxType=comp&name=device&aliasName=device ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./device.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/device/device.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./device.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/device/device.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./device.ux?uxType=comp&&aliasName=device */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/device/device.ux?uxType=comp&&aliasName=device")


      $app_exports$['device'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/iot/iot.ux?uxType=comp&name=iot&aliasName=iot":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/iot/iot.ux?uxType=comp&name=iot&aliasName=iot ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./iot.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/iot/iot.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./iot.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/iot/iot.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./iot.ux?uxType=comp&&aliasName=iot */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/iot/iot.ux?uxType=comp&&aliasName=iot")


      $app_exports$['iot'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
      }
    

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/weather/weather.ux?uxType=comp&name=weather&aliasName=weather":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/weather/weather.ux?uxType=comp&name=weather&aliasName=weather ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./weather.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/widgets/weather/weather.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./weather.ux?uxType=comp */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/widgets/weather/weather.ux?uxType=comp")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./weather.ux?uxType=comp&&aliasName=weather */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/widgets/weather/weather.ux?uxType=comp&&aliasName=weather")


      $app_exports$['weather'] = function($app_exports$) {
        $app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
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
/*!**********************************************!*\
  !*** ./src/pages/index/index.ux?uxType=page ***!
  \**********************************************/
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/iot/iot.ux?uxType=comp&name=iot&aliasName=iot */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/iot/iot.ux?uxType=comp&name=iot&aliasName=iot")
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/device/device.ux?uxType=comp&name=device&aliasName=device */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/device/device.ux?uxType=comp&name=device&aliasName=device")
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/alarm/alarm.ux?uxType=comp&name=alarm&aliasName=alarm */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/alarm/alarm.ux?uxType=comp&name=alarm&aliasName=alarm")
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/audio/audio.ux?uxType=comp&name=music&aliasName=music */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/audio/audio.ux?uxType=comp&name=music&aliasName=music")
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/weather/weather.ux?uxType=comp&name=weather&aliasName=weather */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/weather/weather.ux?uxType=comp&name=weather&aliasName=weather")
__webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!../../widgets/calendar/calendar.ux?uxType=comp&name=calendar&aliasName=calendar */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/data/x4b/widget-demo&type=import!./src/widgets/calendar/calendar.ux?uxType=comp&name=calendar&aliasName=calendar")

var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&plugins[]=/data/x4b/widget-demo/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=iot,importNames[]=device,importNames[]=alarm,importNames[]=music,importNames[]=weather,importNames[]=calendar */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page&importNames[]=iot,importNames[]=device,importNames[]=alarm,importNames[]=music,importNames[]=weather,importNames[]=calendar")


      $app_exports$['entry'] = function($app_exports$) {
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