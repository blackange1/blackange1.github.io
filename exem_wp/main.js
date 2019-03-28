$(document).ready(function(){

	function objDump(object) {
	    var out = "";
	    if(object && typeof(object) == "object"){
	        for (var i in object) {
	            out += i + ": " + object[i] + "\n";
	        }
	    } else {
	        out = object;
	    }
	        console.log(out);
	}

	$(".match-heigth").matchHeight();

	var windowWidth = window.innerWidth;
	var width_and_haight = 0.34;
	for (var i = 1; i < 6 ; i++) {
		document.getElementById('h0' + i).style.width = windowWidth * 0.8 * width_and_haight + 'px';
	  	document.getElementById('h0' + i).style.height = windowWidth * 0.8 * width_and_haight + 'px';
	  	document.getElementById('h0' + i).style.borderRadius = windowWidth * 0.8  * width_and_haight * 0.5 + 'px';
	}

 	$('.main-slider').slick({
    	arrows: false,
    	dots: true,
    	autoplay: true,
    	//zIndex: 25,
  	});


  // Mobile menu
	$('.mobile-menu-button').on('click', function() {
	    $('.menu').toggleClass('collapse');
	});
	$(window).resize(function () {
	    if ( $(window).width() > 640 ) {
		    $('.menu').removeClass('collapse');
	    } else {
	      $('.menu').addClass('collapse');
	    }
	});

	AOS.init();
  	//alert('end');
});
