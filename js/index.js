var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});

jQuery(".header-section .menu-box ul.main-menu li").has("ul").append("<span class='main-menu-span'><i class='bi bi-chevron-left fs-12'></i></span>");
jQuery(".responsive-menu-body ul li").has("ul").append("<span class='responsive-menu-span'><i class='bi bi-caret-down-fill'></i></span>");

jQuery(".responsive-menu-body ul li .responsive-menu-span").click(function () {
	jQuery(this).prev("ul").slideToggle();
	jQuery(this).find("i").toggleClass("bi-caret-down-fill");
	jQuery(this).find("i").toggleClass("bi-caret-up-fill");
});

var W_STop = jQuery(window).scrollTop();

jQuery(window).scroll(function () {
	if (jQuery(window).scrollTop() > 1500) {
		jQuery(".scroll-to-top").show();
	} else {
		jQuery(".scroll-to-top").hide();
	}
});

jQuery(".scroll-to-top").click(function () {
	jQuery("body,html").animate({
		scrollTop: 0
	}, 1000);
});

jQuery('.products-slider,.blog-slider').owlCarousel({
	rtl:true,
	loop:true,
	margin:8,
	nav:false,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});