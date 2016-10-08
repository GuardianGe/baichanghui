var str = require('../tpls/party.string');

var common = require('../utils/common.util.js');
common.append($('body'), str);
//common.isRetina();
$.ajax({
  url: '/api/party.php',
  success: function (res) {

    var html = template('test', res);

    common.inner($('#list'), html);

  }
});
window.onload=function(){
    var scroll=new IScroll("#meeting-iscroll",{
        probeType: 3,
        mouseWheel: true,
        scrollbars:true
    });
    var seeMore = function(){
        $.ajax({
            url:'/api/seeMore.php',
            success:function (res) {
                var html = template('testMore', res);
                common.append($('#list'), html);
                scroll.refresh();
            }
        })
    }
    var seeMore2 = function(){
        $.ajax({
            url:'/api/seeMore2.php',
            success:function (res) {
                var html = template('testMore2', res);
                common.append($('#list'), html);
                scroll.refresh();
            }
        })
    }
    scroll.on('scroll',function(){
        var y=this.y;
        var maxY=this.maxScrollY;
        if(y<(-1750)&&maxY>-2500){
            seeMore();
        }
        if(y<(-4250)&&maxY>-5000){
            seeMore2();
        }
    })
    $('nav li').on('tap',function(){
        scroll.destroy();
        $('nav li').each(function(){
            $(this).css({
                "color":"#000"
            });
        });
        $(this).css({
            "color":"#f2626f"
        });
        $('#list').html("");
        if($(this).index()=='0'){
            $('#list').css({
                "display":"flex",
                "height":"100%"
            });
            $.ajax({
              url: '/api/choose1.php',
              success: function (res) {
                var html = template('choose1', res);
                common.inner($('#list'), html);
            },
            complete:function(){
                var newScroll=new IScroll('#scrollRight',{
                    probeType: 3,
                    mouseWheel: true
                });
                $('.left li').on('tap',function(){
                    $('.left li').each(function(){
                        $(this).css({
                            "color":"#666",
                            "background":"#f7f7f7"
                        });
                    });
                    $(this).css({
                        "color":"rgb(242, 98, 111)",
                        "background":"#fff"
                    });
                    switch ($(this).index()) {
                        case 0:
                            $('#scrollRight').remove();
                            $('#scrollSecond').remove();
                            $('#scrollThird').remove();
                            $.ajax({
                                url: '/api/choose1.php',
                                success: function (res) {
                                  var html = template('choose21', res);
                                  common.append($('#list'), html);
                              },
                              complete:function(){
                                  var scroll=new IScroll("#scrollRight",{
                                      probeType: 3,
                                      mouseWheel: true
                                  });
                                  $('.right li').on('tap',function(){
                                      $('.right li').each(function(){
                                          $(this).css({
                                              "color":"#666"
                                          });
                                      });
                                      $(this).css({
                                          "color":"rgb(242, 98, 111)"
                                      });

                                  });
                              }
                            })
                            break;
                        case 1:
                            $('#scrollRight').remove();
                            $('#scrollSecond').remove();
                            $('#scrollThird').remove();
                            $.ajax({
                                url: '/api/choose1.php',
                                success: function (res) {
                                  var html = template('choose22', res);
                                  common.append($('#list'), html);
                              },
                              complete:function(){
                                  var scroll=new IScroll("#scrollRight",{
                                      probeType: 3,
                                      mouseWheel: true
                                  });
                                  $('.right li').on('tap',function(){
                                      $('.right li').each(function(){
                                          $(this).css({
                                              "color":"#666"
                                          });
                                      });
                                      $(this).css({
                                          "color":"rgb(242, 98, 111)"
                                      });

                                  });
                              }
                            })
                            break;
                        case 2:

                            $('#scrollRight').remove();
                            $('#scrollSecond').remove();
                            $('#scrollThird').remove();
                            $.ajax({
                                url: '/api/choose1.php',
                                success: function (res) {
                                  var html = template('choose23', res);
                                  common.append($('#list'), html);
                              },
                              complete:function(){
                                  var scroll=new IScroll("#scrollSecond",{
                                      probeType: 3,
                                      mouseWheel: true
                                  });
                                  var scroll=new IScroll("#scrollThird",{
                                      probeType: 3,
                                      mouseWheel: true
                                  });
                                  $('.second li').on('tap',function(){
                                      $('.second li').each(function(){
                                          $(this).css({
                                              "color":"#666"
                                          });
                                      });
                                      $(this).css({
                                          "color":"rgb(242, 98, 111)"
                                      });
                                  });
                                  $('.third li').on('tap',function(){
                                      $('.third li').each(function(){
                                          $(this).css({
                                              "color":"#666"
                                          });
                                      });
                                      $(this).css({
                                          "color":"rgb(242, 98, 111)"
                                      });

                                  });
                              }
                            })
                            break;
                    }
                });
                $('.right li').on('tap',function(){
                    $('.right li').each(function(){
                        $(this).css({
                            "color":"#666"
                        });
                    });
                    $(this).css({
                        "color":"rgb(242, 98, 111)"
                    });

                });
            }
            });

        }

    });

}
