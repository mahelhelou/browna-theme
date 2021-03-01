$(function () {
  // Globals
  let navbarHeight = $('.navbar').innerHeight()

  // Adjust body padding
  $('body').css('paddingTop', navbarHeight)

  // Adjust slider height
  let windowHeight = $(window).height()
  $('.carousel, .carousel-item').height(windowHeight - navbarHeight)

  // Smooth scroll
  $('.nav-link, .navbar-brand').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault()

      const hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      )
    }
  })
})