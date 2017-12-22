$(document).ready(function() {
  var slideshowIndex = 0;
  slideshow();
  function slideshow() {

    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideshowIndex++;
    if (slideshowIndex > x.length){
      slideshowIndex = 1;
    }
    x[slideshowIndex - 1].style.display = "block";
    setTimeout(slideshow, 9000);
  }
});
