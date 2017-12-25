$(document).ready(function() {


  var link = $('nav').find('a');
  var navbarSize = $('nav').height() - 1;

  link.on('click', function(event) {
    event.preventDefault();
      hash = this.hash;
      if (this.hash !== ""){
        $('html, body').animate({
          scrollTop: ($(hash).offset().top - navbarSize)
        }, 800, function () {
          window.location.hash = hash - navbarSize;
        });
      }
      else {
        $('html,body').animate({
          scrollTop: 0
        }, 800, function () {
          window.location.hash = hash;
        });
      }
  });

});
