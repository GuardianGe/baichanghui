var common = {
    renderBody: function ($el, str) {
        $el.prepend(str);
  },
    inner: function ($el, str) {
        $el.html(str);
  },
    append: function ($el, str) {
        $el.append(str);
  },
  isRetina:function(){
      if(window.devicePixelRatio&&window.devicePixelRatio>1&&window.devicePixelRatio<3){
          $('header').attr("class","hairline");
          $('nav').attr("class","hairline");
      }
  }
}
module.exports = common;
