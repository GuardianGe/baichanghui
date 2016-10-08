var str=require("./tpls/header.string");
var banner = require('./tpls/banner.string');
var section = require('./tpls/section.string');
$("body").append("<div id='scroll'><div class='isc'>"+str+banner+section+"</div></div>"+"<div class='iconfont homepage'>&#xe7cd;</div>"+"<div class='footer'>"+"<span>询价</span>"+"<span>电话预定</span>"+"</div>");
$(function () {
  var Iscroll=new IScroll('#scroll',{mouseWheel:true,bounce:false});
});
