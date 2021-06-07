var slideType
  , bridgeIdx = 0;
$(function(){
	// sample slide
	$('.bridgeSample').slick({
		dots		  : false,
		arrows		  : false,
		slidesToShow  : 1,
		infinite      : true,
		touchMove	  : false,
		draggable	  : false,
		swipe		  : false,
		variableWidth : true,
		centerMode	  : true,
		centerPadding : '55px',
        // s: 20200204 추가
        accessibility : false,
        focusOnSelect : false,
        pauseOnHover  : false,
        // e: 20200204 추가
		autoplay	  : false,
		autoplaySpeed : 1500
	});
	$('.bridgeSample').on('afterChange', function(event, slick, currentSlide){
		event.stopPropagation();
		if($(slick.$slides).length-1 == currentSlide) $('.bridgeSample').slick('slickPause');
	});



    var winH = $(window).outerHeight();

	if(winH < 568){
		slideType = false;
		$('.bridgeWrap').addClass('scrollType');
		$('.bridgeCon').waypoint(function(){
            if($(this).hasClass('bridgeCon02') && !$(this).hasClass('on')){
                $('.bridgeSample').slick('slickPlay');
            }
	        $(this).addClass('on');
	    },{offset:'80%'});
	}else{
		slideType = true;
		$('.bridgeWrap').addClass('slideType').find('.bridgeCon').css('height', winH);

		$('.bridgeWrap').slick({
			vertical		: true,
			verticalSwiping : true,
			slidesToShow	: 1,
			slidesToScroll	: 1,
			infinite		: false,
			arrows	 		: false,
			dots	 		: true,
			autoplay 		: false,
			speed	 		: 500
		});
		$('.bridgeWrap').on('afterChange', function(event, slick, currentSlide){
			if(bridgeIdx != currentSlide){
				bridgeIdx = currentSlide;
				$('.bridgeCon.slick-active').addClass('on').siblings().removeClass('on');

				if(bridgeIdx == 1){
					$('.bridgeSample').slick('slickPause');
					$('.bridgeSample').slick('slickGoTo', 0);
					$('.bridgeSample').slick('slickPlay');
				}else{
					$('.bridgeSample').slick('slickPause');
					$('.bridgeSample').slick('slickGoTo', 0);
				}

			}
		});
	}


	// direct button
	$('body').on('click', '.bridgeBtn, .bridgePackBtn', function(){
		(slideType) ? $('.bridgeWrap').slick('slickGoTo', 0) : $('html').animate({'scrollTop': $('.bridgeCon01').offset().top}, 1000); // 20200709 수정
	});


    // agree
	var agree = [
		{
			'title'    : '웹서비스 이용약관',
			'contents' : '웹서비스 이용약관약관약관약관약관약관약관약관약관'
		},
		{
			'title'    : '개인정보 수집 이용',
			'contents' : '개인정보 수집 이용약관약관약관약관약관약관약관약관약관'
		}
	];
	$('body').on('click', '.btnAgree', function(){
		var agreeIdx = $(this).closest('.agreeElem').data('agree');

		$('.agreePopTit').html(agree[agreeIdx].title);
		$('.agreePopInner').html(agree[agreeIdx].contents);
		$('.agreePop').addClass('on');
	}).on('click', '.btnAgreeClose', function(){
		$('.agreePop').addClass('off');
		setTimeout(function(){
			$('.agreePop').removeClass('off on');
		}, 500);
	}).on('click', '.btnLogin', function(){
		if(!$('.agreeTop input[type="checkbox"]').is(':checked')) alert('약관동의 후 이용할 수 있습니다.');
	});

    // s: 20200211 추가
    $('body').on('change', '.agreeTop input', function(){
        var bln = $(this).is(':checked');

        $('.agreeCont').find('input').prop('checked', bln);
    }).on('change', '.agreeCont input', function(){
        var allChk = $('.agreeTop input')
          , allLen = $('.agreeCont').find('input').length
          , chkLen = $('.agreeCont').find('input:checked').length;

        (allLen == chkLen) ? allChk.prop('checked', true) : allChk.prop('checked', false);
    });
    // e: 20200211 추가


	// certify
	$('body').on('click', '.certElem', function(){
		var otherElem = $(this).siblings('.certElem.on');

		otherElem.addClass('off').removeClass('on');
		$(this).removeClass('off').toggleClass('on');
		if(!$(this).hasClass('on')) $(this).addClass('off');
	});
});






































//
