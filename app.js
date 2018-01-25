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