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
      

      
  });


  $(window).load(function () {
    
    
  });


  $(window).scroll(function () {
    
  });


  $(window).resize(function () {
    // тут весь код для исполнения на ресайз документа
  });

}(jQuery));