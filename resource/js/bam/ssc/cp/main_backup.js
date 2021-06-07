var mainIdx = 0;
$(function(){
	$('.mainSwipe').slick({
    	arrows	 	  : false,
    	dots	 	  : true,
    	autoplay 	  : true,
		autoplaySpeed : 4000,
		speed	 	  : 500
    });
	$('.mainWrap .mainSwipe').on('afterChange', function(event, slick, currentSlide){
		if(mainIdx != currentSlide){
			var target = $('.mainCon.slick-active').find('.mainVisBg img')
			, imgSrc = target.attr('src')
			, nDate  = new Date()
			, dTime  = nDate.getTime();

			mainIdx = currentSlide;
			$('.mainCon.slick-active').addClass('on').siblings().removeClass('on');
			if(imgSrc != undefined){
				var idxSrc = imgSrc.indexOf('?')
				  , resultSrc;

				(idxSrc == -1) ? resultSrc = imgSrc + '?' + dTime : resultSrc = imgSrc.substr(0, idxSrc) + '?' + dTime;
				target.attr('src', resultSrc);
			}
		}
    });

	$('body').on('click', '.mainPlay', function(){
		$(this).toggleClass('pause');
		($(this).hasClass('pause')) ? $('.mainSwipe').slick('slickPause') : $('.mainSwipe').slick('slickPlay');
	});
});








































//
