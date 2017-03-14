/**
 * Created by java on 2017/2/13.
 */

'use strict';

$(function () {
    //当没有resize事件时让window对象触发一下resize()对象;
    function resize(){
        var screen_width = $(window).width();
        $('.carousel-inner > .item').each(function (i, item) {
            if(screen_width>=768){
                $(this).empty();
                $(this).css({'backgroundImage': 'url('+$(item).data('imge-lg')+')'});
            }else{
                /*'<img src="'+$(item).data('imge-xs')+'"/>'*/
                $(this).html('<img src="'+$(this).data('imge-xs')+'"/>');
            }
        })
    }
    $(window).on('resize',resize).trigger('resize');

    var $tabsWidth=0;
    var $tabs = $('#products .tabs-box .nav').children();
    $tabs.each(function(i,element){
        $tabsWidth+=$(element).width();
    });

    $('#products .tabs-box .nav').css('width',$tabsWidth);
    $('#news .container .nav li').on('click',function(){
        $('#news .container .new-title h4').empty();
        $('#news .container .new-title h4').html($(this).data('title'));
    })

    /*手机屏幕手指控制轮播图*/
    var startX,endX;
    var offsetX=50;
    /*给轮播图组件注册一个touchstart事件，记录手指接触屏幕时的X坐标*/
    $('.carousel').on('touchstart',function(e){
        startX=e.originalEvent.changedTouches[0].clientX;
        //console.log(startX);startX
    })
    /*给轮播图组件注册touchmove事件实时记录手指的X坐标*/
    $('.carousel').on('touchmove',function(e){
        endX= e.originalEvent.changedTouches[0].clientX;
        //console.log(endX);
    })
    /*当touchend的时候通过判断startX和endX的值，判断是向左滑动还是向右滑动。当滑动距离大于50px时才被判定滑动*/
    $('.carousel').on('touchend',function(){
        if(Math.abs(startX-endX)>offsetX){
            startX>endX?$(this).carousel('next'):$(this).carousel('prev');
        }
    }).carousel('cycle');
})