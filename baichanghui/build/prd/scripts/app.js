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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;


	var str = __webpack_require__(3);

	var common = __webpack_require__(4);

	common.append($('body'), str);

	//swiper设置
	var mySwiper = new Swiper('.swiper-container',{
	  pagination: '.swiper-pagination',
	  // space-between:30
	});
	var mySwiper1 = new Swiper('.swiper-container1',{
	  slidesPerView:1.1,
	  grabCurson:true
	});

	//scroll
	$(function(){
	  var myscroll = new IScroll('.bigbox',{bounce:false});
	  $("#jumpPlace").on("tap",function(){
	    window.location.href='/build/place.html';
	  });
	})
	//ajax
	$.ajax({
	  url: '/api/list.php',
	  success:function(res){
	    var html = template('list1',res);
	    common.inner($('#listone'),html);
	  },
	  complete:function(){
	    $('#listone').find('.imgshow').eq(2).on('tap',function(){
	      window.location.href='/build/meeting.html';
	    })
	  }
	});
	$.ajax({
	  url: '/api/list.php',
	  success:function(res){
	    var html = template('list2',res);
	    common.inner($('#listtwo'),html);
	  }
	});
	$.ajax({
	  url: '/api/list.php',
	  success:function(res){
	    var html = template('list3',res);
	    common.inner($('#listthree'),html);
	  }
	});
	$.ajax({
	  url: '/api/list.php',
	  success:function(res){
	    var html = template('list4',res);
	    common.inner($('#listfour'),html);
	  }
	});



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bigbox\">  <div class=\"bigbox2\">    <header>        <div>            <a id=\"jumpPlace\">北京<i class=\"iconfont\">&#xe600;</i></a>            <span>百场汇</span>            <div>帮我找</div>        </div>        <a class=\"search\" href=\"#\"><i class=\"iconfont\">&#xe601;</i>用途、地标、名称等</a>    </header>    <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\" id=\"listone\">                <script id=\'list1\' type=\"text/html\">                    {{each data as value i}}                    <div class=\"imgshow\">                        <img src={{value.img}}>                        <span>{{value.title}}</span>                    </div>                    {{/each}}                </script>            </div>            <div class=\"swiper-slide\" id=\"listtwo\">                <script id=\'list2\' type=\"text/html\">                    {{each data1 as value i}}                    <div class=\"imgshow\">                        <img src={{value.img}}>                        <span>{{value.title}}</span>                    </div>                    {{/each}}                </script>            </div>            <div class=\"swiper-slide\" id=\"listthree\">                <script id=\'list3\' type=\"text/html\">                    {{each data2 as value i}}                    <div class=\"imgshow\">                        <img src={{value.img}}>                        <span>{{value.title}}</span>                    </div>                    {{/each}}                </script>            </div>            <div class=\"swiper-slide\" id=\"listfour\">                <script id=\'list4\' type=\"text/html\">                    {{each data3 as value i}}                    <div class=\"imgshow\">                        <img src={{value.img}}>                        <span>{{value.title}}</span>                    </div>                    {{/each}}                </script>            </div>        </div>        <div class=\"swiper-pagination\">            <span class=\"swiper-pagination-bullet\"></span>            <span class=\"swiper-pagination-bullet\"></span>            <span class=\"swiper-pagination-bullet\"></span>            <span class=\"swiper-pagination-bullet\"></span>        </div>    </div>    <section>      <a href=\"#\">        <div>          <h1>聚会返现</h1>          <p>团建聚会还有返现</p>        </div>      </a>      <a href=\"#\">        <div>          <h1>学生特惠</h1>          <p>请带好学生证</p>        </div>      </a>      <a href=\"#\">        <div>          <h1>相约餐厅</h1>          <p>推荐其中10家精品店</p>        </div>      </a>      <a href=\"#\">        <div>          <h1>Party集中营</h1>          <p>推荐其中10家精品</p>        </div>      </a>    </section>    <article class=\"article1\">      <span class=\"spanBigTitle\">百场汇推荐</span>      <div class=\"swiper-container1\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide .width85\" >            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article1.jpg\">                <span class=\"span1\" >租个别墅开Party</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article2.jpg\">                <span class=\"span1\" >同学聚会玩到High</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article3.jpg\">                <span class=\"span1\" >最流行的聚会方式|</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article4.jpg\">                <span class=\"span1\" >城里人都这么玩</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article5.jpg\">                <span class=\"span1\" >会议必须完美</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article6.jpg\">                <span class=\"span1\" >这也能开会？想不到吧</span>              </div>            </a>          </div>        </div>      </div>    </article>    <article class=\"article1\">      <span class=\"spanBigTitle\">发现更多</span>      <div class=\"swiper-container1\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide .width85\" style=\"width:85%;\" >            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article7.jpg\">                <span class=\"span1\" >踏青、团建high起来</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article8.jpg\">                <span class=\"span1\" >奔跑吧 撕名牌</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article9.jpg\">                <span class=\"span1\" >闹中取静，惬意会所</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article10.jpg\">                <span class=\"span1\" >艺术的别样空间</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article11.jpg\">                <span class=\"span1\" >团建，温泉相伴</span>              </div>            </a>          </div>          <div class=\"swiper-slide .width85\" style=\"width:85%;\">            <a class=\"imga\" href=\"#\">              <div class=\"div1\">                <img  src=\"/build/images/article12.jpg\">                <span class=\"span1\" >演讲讲座 才华横溢</span>              </div>            </a>          </div>        </div>      </div>    </article>    <article class=\"article2\">      <span class=\"article2-title\">百场汇精选场地</span>      <a href=\"#\">        <img src=\"/build/images/list1.jpg\" >        <span class=\"item-info\">          <span class=\"mask\"></span>          <i class=\"iconfont heart\">&#xe607;</i>          <span class=\"functionallist\">            <span class=\"item\">生日</span>            <span class=\"item\">同学聚会</span>            <span class=\"item\">部门聚会</span>          </span>          <span class=\"item-name\">            秘密花园party house          </span>          <span class=\"price\">            <span class=\"price-tips\">￥</span>4760<span class=\"price-tips\">/半天</span>          </span>          <span class=\"item-tips\">1300平米 70人 朝阳区 首都机场/新国展</span>          <span class=\"item-tips\">            <i class=\"iconfont\">&#xe602;</i>            <i class=\"iconfont\">&#xe603;</i>            <i class=\"iconfont\">&#xe604;</i>            <i class=\"iconfont\">&#xe605;</i>            <i class=\"iconfont\">&#xe606;</i>          </span>          <span class=\"match\">            <span class=\"number\">1</span>个适合空间          </span>          <span class=\"fangkuai\"></span>        </span>      </a>      <a href=\"#\">        <img src=\"/build/images/list2.jpg\" >        <span class=\"item-info\">          <span class=\"mask\"></span>          <i class=\"iconfont heart\">&#xe607;</i>          <span class=\"functionallist\">            <span class=\"item\">轰趴</span>            <span class=\"item\">团队拓展</span>            <span class=\"item\">朋友聚会</span>          </span>          <span class=\"item-name\">            4k轰趴管（苏州桥）          </span>          <span class=\"price\">            <span class=\"price-tips\">￥</span>1200<span class=\"price-tips\">/半天</span>          </span>          <span class=\"item-tips\">260平米 50人 海淀区 中关村/人民大学</span>          <span class=\"item-tips\">            <i class=\"iconfont\">&#xe602;</i>            <i class=\"iconfont\">&#xe603;</i>            <i class=\"iconfont\">&#xe604;</i>            <i class=\"iconfont\">&#xe605;</i>            <i class=\"iconfont\">&#xe606;</i>          </span>          <span class=\"match\">            <span class=\"number\">1</span>个适合空间          </span>          <span class=\"fangkuai\"></span>        </span>      </a>      <a href=\"#\">        <img src=\"/build/images/list3.jpg\" >        <span class=\"item-info\">          <span class=\"mask\"></span>          <i class=\"iconfont heart\">&#xe607;</i>          <span class=\"functionallist\">            <span class=\"item\">轰趴</span>            <span class=\"item\">团队拓展</span>            <span class=\"item\">Party</span>          </span>          <span class=\"item-name\">            龙城乌托邦温泉度假屋1号馆          </span>          <span class=\"price\">            <span class=\"price-tips\">￥</span>798<span class=\"price-tips\">/半天</span>          </span>          <span class=\"item-tips\">600平米 100人 丰台区 方庄</span>          <span class=\"item-tips\">            <i class=\"iconfont\">&#xe602;</i>            <i class=\"iconfont\">&#xe603;</i>            <i class=\"iconfont\">&#xe604;</i>            <i class=\"iconfont\">&#xe605;</i>            <i class=\"iconfont\">&#xe606;</i>          </span>          <span class=\"match\">            <span class=\"number\">2</span>个适合空间          </span>          <span class=\"fangkuai\"></span>        </span>      </a>      <a href=\"#\" class=\"show-more\">        <span class=\"more-title\">查看更多场地</span>        <span class=\"more-tip\">会场、别墅、轰趴管、会馆</span>      </a>    </article>  </div></div>"

/***/ },
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



/***/ }
/******/ ]);