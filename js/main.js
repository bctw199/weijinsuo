/**
 * Created by java on 2017/2/13.
 */

'use strict';

$(function () {
    //��û��resize�¼�ʱ��window���󴥷�һ��resize()����;
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

    /*�ֻ���Ļ��ָ�����ֲ�ͼ*/
    var startX,endX;
    var offsetX=50;
    /*���ֲ�ͼ���ע��һ��touchstart�¼�����¼��ָ�Ӵ���Ļʱ��X����*/
    $('.carousel').on('touchstart',function(e){
        startX=e.originalEvent.changedTouches[0].clientX;
        //console.log(startX);startX
    })
    /*���ֲ�ͼ���ע��touchmove�¼�ʵʱ��¼��ָ��X����*/
    $('.carousel').on('touchmove',function(e){
        endX= e.originalEvent.changedTouches[0].clientX;
        //console.log(endX);
    })
    /*��touchend��ʱ��ͨ���ж�startX��endX��ֵ���ж������󻬶��������һ������������������50pxʱ�ű��ж�����*/
    $('.carousel').on('touchend',function(){
        if(Math.abs(startX-endX)>offsetX){
            startX>endX?$(this).carousel('next'):$(this).carousel('prev');
        }
    }).carousel('cycle');
})