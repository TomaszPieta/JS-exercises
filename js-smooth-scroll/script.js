function scroll(e) { e.preventDefault();
  var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800); location.hash = href; };
$('a[href*="#"]').click(scroll); 