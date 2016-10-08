/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	    renderBody: function ($el, str) {
	        $el.prepend(str);
	  },
	    inner: function ($el, str) {
	        $el.html(str);
	  },
	    append: function ($el, str) {
	        $el.append(str);
	  }
	}
	module.exports = common;



/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(9);



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(10);

	var common = __webpack_require__(4);

	common.append($('body'), str);

	//scroll
	$(function(){
	  var myscroll = new IScroll('#article',{bounce:false});
	  $("#close").on("tap",function(){
	    window.location.href="/build/index.html"
	  })
	})



/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bigbox\">  <article id=\"article\">    <section>      <div class=\"city-tip\">        已开通城市      </div>      <div class=\"list\">        <a href=\"#\" class=\"citys\">          北京          <img src=\"/build/images/place1.jpg\" >        </a>        <a href=\"#\" class=\"citys\">          上海          <img src=\"/build/images/place2.jpg\" >        </a>        <a href=\"#\" class=\"citys\">          深圳          <img src=\"/build/images/place3.jpg\" >        </a>        <a href=\"#\" class=\"citys\">          广州          <img src=\"/build/images/place4.jpg\" >        </a>        <a href=\"#\" class=\"citys\">          杭州          <img src=\"/build/images/place5.jpg\" >        </a>        <a href=\"#\" class=\"citys\">          南京          <img src=\"/build/images/place6.jpg\" >        </a>      </div>      <span class=\"tips\">        我们正在努力开拓更多城市      </span>    </section>    <footer>      <i class=\"iconfont\" id=\"close\">        &#xe608;      </i>    </footer>  </article></div>"

/***/ }
/******/ ]);