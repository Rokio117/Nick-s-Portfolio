function scrollTo() {
  $('#about-nav,#portfolio-nav,#contact-nav').on('click',function(event){
    event.preventdefault;

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 750, 'swing');
  })
}
function expandHamburger() {
  $('#hamburger-button').click(function(event){
    $('#nav-menu').toggleClass('hidden');
  })
}

function watchClicks() {
  scrollTo();
  expandHamburger();
}
$(watchClicks);