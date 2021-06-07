var mainIdx = 0;
$(function(){
	$('.mainSwipe').slick({
    	arrows	 	  : false,
    	dots	 	  : true,
    	autoplay 	  : true,
		// s: 20200710 수정
		autoplaySpeed : 7000,
		// e: 20200710 수정
		speed	 	  : 500
    });

	$('body').on('click', '.mainPlay', function(){
		$(this).toggleClass('pause');
		($(this).hasClass('pause')) ? $('.mainSwipe').slick('slickPause') : $('.mainSwipe').slick('slickPlay');
	});



	// s: 20200710 추가
	$('.mainCardInner').each(function(){
		$(this).slick({
			slidesToShow	: 1,
			slidesToScroll	: 1,
			centerMode		: true,
			variableWidth 	: true,
			infinite 		: false,
			arrows			: false
	    });
	});
	$('body').on('click', '.mainCardBtn', function(e){
		e.preventDefault();

		$(this).addClass('on').siblings().removeClass('on');
		$('.mainCardInner').eq($(this).index()).addClass('on').siblings().removeClass('on');
		$('.mainCardInner').eq($(this).index()).slick('resize');
		$('.mainCardTab').animate({
			scrollLeft : $(this).position().left
		}, 500);
	});
	// e: 20200710 추가
});


// s: 20200710 추가
$(window).on('scroll', function(){
	($(window).scrollTop() > 20) ? $('#header').addClass('scroll') : $('#header').removeClass('scroll');
});
// e: 20200710 추가








































//
