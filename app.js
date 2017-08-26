var images = [
  "portfolio/img1.png", "portfolio/img2.png", "portfolio/img3.png", "portfolio/img4.png", "portfolio/img5.png",
  "portfolio/img6.png", "portfolio/img7.png", "portfolio/img8.png", "portfolio/img9.png", "portfolio/img10.jpg",
  "portfolio/img11.jpg", "portfolio/img12.jpg", "portfolio/img13.jpg", "portfolio/img14.jpg", "portfolio/img15.jpg",
  "portfolio/img16.jpg", "portfolio/img17.jpg", "portfolio/img18.jpg", "portfolio/img19.jpg"
];

//how to have the url change for every image
var urls = [
  "http://ybinstock.github.io/carmensandiego_360/", 'http://ybinstock.github.io/curiosity_360/',
  "http://ybinstock.github.io/concert_hall_360/", "https://ybinstock.github.io/jaws-at-night-aframe/",
  "https://ybinstock.github.io/Platos-Cave/", "https://ybinstock.github.io/ArtExhibitVR/",
  "https://ybinstock.github.io/BoilingFrog/", "https://ybinstock.github.io/SkyDiving/",
  "https://ybinstock.github.io/Desert360/", "https://ybinstock.github.io/starstuff/",
  "https://ybinstock.github.io/OzymandiasWebVR/", "https://ybinstock.github.io/BatCave/",
  "https://ybinstock.github.io/campfireVR/", "https://ybinstock.github.io/SacredGeometryVR/",
  "https://ybinstock.github.io/thanksobamavr/", "https://ybinstock.github.io/GreatEscape360/",
  "https://ybinstock.github.io/JazzVR/",
  "https://play.google.com/store/apps/details?id=com.YoniBinstock.PrayerVR&hl=en", "https://youtu.be/uXa2tIzPXUc",
];

//why isn't this workign without a hitch

AFRAME.registerComponent('next-mission', {

  init: function() {
    var el = document.getElementById('slideshow_image');
    var next = document.getElementById('next_image');
    var previous = document.getElementById('previous_image');

    next.addEventListener('click', function(evt) {
      var next_val = document.getElementById("img_no").value;
      var next_val = Number(next_val) + 1;
      if (next_val >= images.length) {
        next_val = 0;
      }
      el.setAttribute('src', images[next_val]);
      //el.setAttribute('onclick', location.href = urls[next_val]);
      document.getElementById("img_no").value = next_val;
    });

  }
});

AFRAME.registerComponent('previous-mission', {

  init: function() {
    var el = document.getElementById('slideshow_image');
    var previous = document.getElementById('previous_image');

    previous.addEventListener('click', function(evt) {
      var prev_val = document.getElementById("img_no").value;
      var prev_val = Number(prev_val) - 1;
      if (prev_val <= -1) {
        prev_val = images.length - 1;
      }
      el.setAttribute('src', images[prev_val]);
      //el.setAttribute('onclick', location.href = urls[prev_val]);
      document.getElementById("img_no").value = prev_val;
    });

  }
});

