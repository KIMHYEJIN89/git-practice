var filter = "win16|win32|win64|mac";
$(function(){

  // top??? ????
  $().UItoTop({
    easingType: 'easeOutQuart'
  });

    // gnb
    $('body').on('click', '.btnGnb', function(){
        $('body').css('overflow', 'hidden');
        $('.gnbWrap').addClass('on');
        $('.gnbDepth1').stop().slideDown(500);
        $(this).addClass('on');
        $('.gnbDimm').css('visibility','visible').stop().animate({'opacity':'1'}, 500);
        $('#header').find('.leftMenu').hide();
        $('#header').find('.btnHome').hide();
        $('#header').find('.btnGnb').hide();
        $('#header').find('.btnClose').show();
        $('.snbDepth2').hide(); // ??????? 20200922 ???

    }).on('click', '.gnbDimm, .btnClose', function(){
        $('body').css('overflow', '');
        $('.gnbWrap').removeClass('on');
        $('.gnbDepth1').stop().slideUp(500);
        $('.btnGnb').removeClass('on');
        $('.gnbDimm').css('visibility','hidden').stop().animate({'opacity':'0'}, 500);
        $('#header').find('.btnGnb').show();
        $('#header').find('.leftMenu').show();
        $('#header').find('.btnHome').show();
        $('#header').find('.btnClose').hide();
        $('.snbDepth2').show(); // ??????? 20200922 ???


    });


    //gnb ????? ????
    $('.gnbWrap .gnbDepth1>li>a').on('click',function(){

          $('.gnbWrap .gnbDepth1>li>a').removeAttr('style');
          $(this).css('background','#f7f8fa');

    });


    // sub navigation depth 2
    $('body').on('click', '.btnPageTit', function(){
        var wrap = $(this).closest('.snbDepth2')
          , list = wrap.find('.snbLst2');

        if(!wrap.hasClass('lock')){
            wrap.addClass('lock').toggleClass('on');
            (wrap.hasClass('on')) ? list.slideDown(500) : list.slideUp(500);
            setTimeout(function(){
                wrap.removeClass('lock');
            }, 500);
        }
    });




    // sub navigation depth 3
    if($('.snbLst3 > li').length > 0){
        if(navigator.platform != null && navigator.platform != undefined && filter.indexOf(navigator.platform.toLowerCase()) >= 0) $('.snbDepth3').addClass('pc');
        setTimeout(function(){
            var posX = $('.snbLst3').find('.btnDepth3.on').closest('li').position().left;
            $('.snbDepth3').scrollLeft(posX);
        }, 200);
    }




    // counter
    if($('._counter').length) $('._counter').yCounter({runTime:1000,delay:0});




    // tab
    if($('body').find('.tabWrap').length) tab.init();




    // tooltip
    $('body').on('click', '.btnTip', function(){
        $(this).parent().toggleClass('on');
        $(this).siblings().css('top', $(this).position().top + 28);
    }).on('click', '.btnTipClose', function(){
          $(this).closest('.tooltip').removeClass('on');

    });


    // ??????? ??????,????
    $('body').on('click', '.noticeWrap .btnMore', function(){
          if(!$(this).hasClass('on')){
              $(this).addClass('on');
              $(this).closest('.noticeWrap').find('li').show();
              $(this).text('????')

          }else{
           $(this).removeClass('on');
            $(this).closest('.noticeWrap').find('li').hide();
            $(this).closest('.noticeWrap').find('li').first().show();
            $(this).text('??????');
          }

    });



    // ??? ??¬Þ? ??????,????
    $('body').on('click', '.crdCsArea .btnMore, .crdGuideArea .btnMore', function(){

      if(!$(this).hasClass('on')){
          $(this).addClass('on');
          $(this).text('????')
          $(this).prev('.blitListWrap').find('li').show();

      }else{
        $(this).removeClass('on');
        $(this).text('??????');
        $(this).prev('.blitListWrap').find('li').removeAttr('style');

        }

    });





});






// tab
var tab ={
    'init' : function(){
        $('.tabInner').each(function(){
            var result = $(this).closest('.tabWrap').attr('data-tab');

            if(result == undefined || result == null) result = $(this).parents('.tabWrap').length + '_' + Math.ceil( Math.random()*1000);
            $(this).attr('data-tab', result);
            $(this).closest('.tabCont').attr('data-tab', result);
            $(this).closest('.tabWrap').attr('data-tab', result);
        });
    }
}



// layer popup
function layerPopup(target){
    var targetId = $('#'+target);
    $('body').css('overflow', 'hidden').append('<div class="layerPopupDimm"></div>');
    targetId.css({'display':'block','margin-top':-(targetId.height()/2)});
}
function layerPopClose(){
    $('body').css('overflow', '');
    $('.layerPopupDimm').remove();
    $('.layerPopWrap').css({'display':'none','margin-top':''});
}


function scoreBarFunc(){
  var percent = []
    , highVal = 0
    , lowVal = 0
    , i = 0;

  $('.graphBar').find('.bar').each(function(){
    percent[i] = $(this).attr('data-score') / 10;
    $(this).css('width', percent[i] + '%');
    i++;

    if($(this).closest('.graphBarWrap').hasClass('between')){
      highVal = percent[0];
      lowVal = percent[1];
    }
  });

  if($('.graphBar .betweenLine').length){
    $('.graphBar .betweenLine').css({'left': lowVal+'%','width': (highVal-lowVal)+'%'});
  }
}

// 20201019 ??????? scoreBarFunc2??? ???
function scoreBarFunc2(selector){
  var percent = []
    , highVal = 0
    , lowVal = 0
    , i = 0;

  $('#graphBarWrap'+selector).find('.bar').each(function(){
    percent[i] = $(this).attr('data-score') / 10;
    $(this).css('width', percent[i] + '%');
    i++;

    if($(this).closest('.graphBarWrap').hasClass('between')){
      highVal = percent[0];
      lowVal = percent[1];
    }
  });

  if($('.graphBar .betweenLine').length){
    $('.graphBar .betweenLine').css({'left': lowVal+'%','width': (highVal-lowVal)+'%'});
  }
}







































//
