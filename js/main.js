$(document).ready(function() {

  var link = $('nav').find('a');

  link.on('click', function(event) {
    event.preventDefault();
      hash = this.hash;
      if (this.hash !== ""){
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
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
