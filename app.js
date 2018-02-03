AFRAME.registerComponent('singleton-sound', {
  schema: {
    src: {type: 'string'}
  },
  init: function() {
    var audio = document.querySelector(this.data.src);

    this.el.addEventListener('click', playIfFree);
    this.el.addEventListener('mouseenter', playIfFree);

    audio.addEventListener('ended', function() {
      window.isPlaying = false
    });

    function playIfFree() {
      if (!window.isPlaying) {
        audio.play();
        window.isPlaying = true
      } else {
        return false
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  if(AFRAME.utils.device.isMobile()) {
    document.querySelector('#splash').style.display = 'flex';
    document.querySelector('#splash').addEventListener('click', function () {
      let sounds = document.querySelectorAll('audio');
      sounds.forEach (function (sound) {
        sound.play();
        sound.pause();
      })
      this.style.display = 'none';
    })
  }
});