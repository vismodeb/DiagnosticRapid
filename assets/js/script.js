$(document).ready(function(){
    // Mobile Menu Icon
   $(document).ready(function(){
      $('#nav-icon').click(function(){
         $(this).toggleClass('open');
         $('.header-nav nav').slideToggle();
      });
   });
});
