
var str = require('../tpls/index.string');

var common = require('../utils/common.util.js');

common.append($('body'), str);

//swiper设置
var mySwiper = new Swiper('.swiper-container',{
  pagination: '.swiper-pagination',
});
var mySwiper1 = new Swiper('.swiper-container1');
//ajax
$.ajax({
  url: '/api/list.php',
  success:function(res){
    var html = template('list1',res);
    common.inner($('#listone'),html);
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
