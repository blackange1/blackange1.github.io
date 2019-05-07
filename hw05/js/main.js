(function ($) {



  $(document).ready(function () {

      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:50
      });

      // Mobile menu
      $('.mobile-menu-button').on('click', function() {
        $('.mainNav__items').toggleClass('collapse');
      });

      // Scripts which runs at window resize
      $(window).resize(function () {
        if ( $(window).width() > 720 ) {
          $('.mainNav__items').removeClass('collapse');
          //$('.searchform').removeClass('collapse');
        } else {
          $('.mainNav__items').addClass('collapse');
          //$('.searchform').addClass('collapse');

        }
      });
      

      //slider-header
       $('.slider__content').slick({
        infinite: true,
        dots: true,
        prevArrow: '',
        nextArrow: '', 
        autoplay: true,

      });
      //slider-persone
      $('.slider-testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.siteSection-testimonials__icoPersones'
      });
      $('.siteSection-testimonials__icoPersones').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-testimonials',
        //dots: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<i class="fas fa-chevron-left fa-2x slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right fa-2x slick-next"></i>',
      });


  });


  $(window).load(function () {
    
    
  });


  $(window).scroll(function () {
    
  });


  $(window).resize(function () {
    // тут весь код для исполнения на ресайз документа
  });

}(jQuery));