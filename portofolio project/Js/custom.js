/* global $, alert, console*/ 

$(function () {
    'use strict';
    
    // Adjust Header Hieght
    
    var myHeadear = $('.header');
	myHeadear.height($(window).height());
    
    $(window).resize(function () {
        
        myHeadear.height($(window).height());
		$(this).addClass('active').siblings().removeClass('active');
	 
    });
	
	// Links Add Active Class
	$('.links li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	//smooth scroll to div
   
	$('.links li a').click(function (){
		$('html, body').animate ({
			scrollTop : $('#' + $(this).data('value')).offset().top
		}, 1000);
		
	});
});