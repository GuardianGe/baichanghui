var str = require('../tpls/index.string');
var common = require('../utils/common.util.js');
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
    $('#listone').find('.imgshow:nth-child(odd)').on('tap',function(){
      window.location.href='/build/meeting.html';
    });
    $('#listone').find('.imgshow:nth-child(even)').on('tap',function(){
      window.location.href='/build/party.html';
    });
  }
});
$.ajax({
  url: '/api/list.php',
  success:function(res){
    var html = template('list2',res);
    common.inner($('#listtwo'),html);
  },
  complete:function(){
    $('#listone').find('.imgshow:nth-child(odd)').on('tap',function(){
      window.location.href='/build/meeting.html';
    });
    $('#listone').find('.imgshow:nth-child(even)').on('tap',function(){
      window.location.href='/build/party.html';
    });
  }
});
$.ajax({
  url: '/api/list.php',
  success:function(res){
    var html = template('list3',res);
    common.inner($('#listthree'),html);
  },
  complete:function(){
    $('#listone').find('.imgshow:nth-child(odd)').on('tap',function(){
      window.location.href='/build/meeting.html';
    });
    $('#listone').find('.imgshow:nth-child(even)').on('tap',function(){
      window.location.href='/build/party.html';
    });
  }
});
$.ajax({
  url: '/api/list.php',
  success:function(res){
    var html = template('list4',res);
    common.inner($('#listfour'),html);
  },
  complete:function(){
    $('#listone').find('.imgshow:nth-child(odd)').on('tap',function(){
      window.location.href='/build/meeting.html';
    });
    $('#listone').find('.imgshow:nth-child(even)').on('tap',function(){
      window.location.href='/build/party.html';
    });
  }
});
