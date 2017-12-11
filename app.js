var images = [
  "portfolio/img1.png", "portfolio/img2.png", "portfolio/img3.png", "portfolio/img4.png", "portfolio/img5.png",
  "portfolio/img6.png", "portfolio/img7.png", "portfolio/img8.png", "portfolio/img9.png", "portfolio/img10.png",
  "portfolio/img11.png", "portfolio/img12.png", "portfolio/img13.png", "portfolio/img14.png", "portfolio/img15.png",
  "portfolio/img16.png", "portfolio/img17.png", "portfolio/img18.png", "portfolio/img19.png", "portfolio/20.png",
  "portfolio/img21.png", "portfolio/img22.png", "portfolio/img23.png"
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
  "https://play.google.com/store/apps/details?id=com.YoniBinstock.PrayerVR&hl=en", "https://youtu.be/rtaJvmqsj_g",
  'https://ybinstock.github.io/paris_tour/', 'https://ybinstock.github.io/aframe_map'
];

//why isn't this working without a hitch

AFRAME.registerComponent('next-mission', {

  init: function() {
    var el = document.getElementById('slideshow_image');
    var next = document.getElementById('next_image');
    console.log('next');


    next.addEventListener('click', function(evt) {
      var next_val = document.getElementById("img_no").value;
      var next_val = Number(next_val) + 1;
      //var next_url = document.getElementById("url_no").value; 
      //var next_url = Number(next_url) + 1;
      if (next_val >= images.length) {
        next_val = 0;
      }
      //if (next_url >= urls.length) { 
      //  next_url = 0; 
      //}


      el.setAttribute('src', images[next_val]);

      //if I uncomment this, then when i ever click next or previous
      //el.setAttribute('onclick', location.href = urls[next_val]);
      document.getElementById("img_no").value = next_val;
      //document.getElementById("url_no").value = next_url;
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
      //var prev_url = document.getElementById("url_no").value;
      // var prev_url = Number(prev_url) - 1;
      if (prev_val <= -1) {
        prev_val = images.length - 1;
      }
      //if (prev_url <= -1)
      //{   prev_url = urls.length - 1;
      // }

      console.log('previous',previous );
      console.log('previous_val', prev_val);
      //console.log('previous_url',prev_url);

      el.setAttribute('src', images[prev_val]);
      //el.setAttribute('onclick', location.href = urls[prev_val]);
      document.getElementById("img_no").value = prev_val;
      //document.getElementById("url_no").value = prev_url;

    });

  }
});

