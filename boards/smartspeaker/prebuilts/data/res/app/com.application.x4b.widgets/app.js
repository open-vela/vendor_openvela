export default function(global, globalThis, window, $app_exports$, $app_evaluate$){ 
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$){
  var setTimeout = global.setTimeout;
  var setInterval = global.setInterval;
  var clearTimeout = global.clearTimeout;
  var clearInterval = global.clearInterval;
  var $app_require$ = global.$app_require$ || org_app_require
            
  var $app_define_wrap$ = $app_define_wrap$ || function() {}
  var createAppHandler = function() {
    return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/data/x4b/widget-demo/src!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/data/x4b/widget-demo/src!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  onCreate() {
    console.log('app created');
  },
  onDestroy() {
    console.log('app destroyed');
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/app.ux?uxType=app":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/app.ux?uxType=app ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = []

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.application.x4b.widgets","name":"widget-demo","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"service.internal.audiosync"}],"config":{"logLevel":"log","designWidth":800},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/detail":{"component":"detail"}},"widgets":{"widgets/demo":{"name":"demo","description":"demo","component":"demo","features":["/common/images/telephone.png"]},"widgets/music":{"name":"music","description":"远程组件music","component":"music","features":[]},"widgets/iot":{"name":"iot","description":"远程组件iot","component":"iot","path":"/widgets/iot","features":[]},"widgets/alarm":{"name":"alarm","description":"远程组件alarm","component":"alarm","path":"/widgets/alarm","features":[]},"widgets/audio":{"name":"audio","description":"远程组件audio","component":"audio","path":"/widgets/audio","features":[],"assets":["/common/images/x4b/music-cover.png","/common/images/x4b/icon-pause.png","/common/images/x4b/audio-bg.png"]},"widgets/light":{"name":"light","description":"远程组件light","component":"light","path":"/widgets/light","features":[]},"widgets/weather":{"name":"weather","description":"远程组件weather","component":"weather","path":"/widgets/weather","features":[]},"widgets/album":{"name":"album","description":"远程组件album","component":"album","path":"/widgets/album","features":[],"assets":["/common/images/x4b/bg-album1.png","/common/images/x4b/bg-album2.png"]},"widgets/device":{"name":"device","description":"远程组件device","component":"device","path":"/widgets/device","features":[],"assets":["/common/images/devices/addlight.png","/common/images/devices/light.png","/common/images/devices/reducelight.png","/common/images/devices/addlight.png"]},"widgets/calendar":{"name":"calendar","description":"calendar","component":"calendar","path":"/widgets/calendar","features":[],"assets":[]}}}}');

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
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

  var $app_style$ = __webpack_require__(/*! !../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./app.ux?uxType=app */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/app.ux?uxType=app")

  var $app_script$ = __webpack_require__(/*! !../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/data/x4b/widget-demo/src!../node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/data/x4b/widget-demo/src!./node_modules/babel-loader/lib/index.js?cwd=/data/x4b/widget-demo&cacheDirectory&comments=false&configFile=/data/x4b/widget-demo/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

  $app_script$({}, $app_exports$, $app_require$)
    
  
  $app_exports$.default.style = $app_style$
  $app_exports$.default.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
    
})();

/******/ })()
;
  };
  return createAppHandler();
})(global, globalThis, window, $app_exports$, $app_evaluate$)
  }