(function () {
    'use strict';
    
    // console.log('loaded');

        $('.slider-inner-container').slick({
        	autoplay: true,
        	dots: true,
        	
		});

		$('.carriers-image-container').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
 			autoplaySpeed: 2000,
        	arrows: false,
        	responsive: [
				{
					breakpoint: 375,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2 	 						}
				}
			]
		});

})();