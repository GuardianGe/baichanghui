var str = require('../tpls/place.string');

var common = require('../utils/common.util.js');

common.append($('body'), str);

//scroll
$(function(){
  var myscroll = new IScroll('#article',{bounce:false});
  $("#close").on("tap",function(){
    window.location.href="/build/index.html"
  })
})
