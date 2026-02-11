(function() {
  
  function rInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function createStars(containerId, starCount) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var skyWidth = window.innerWidth;
    var skyHeight = window.innerHeight;

    for (var i = 0; i < starCount; i++) {
      var star = document.createElement('div');
      star.className = 'distStar';

      if (i % 4 === 0) {
        star.style.width = '2px';
        star.style.height = '2px';
      } else {
        star.style.width = '1px';
        star.style.height = '1px';
      }

      var posL = rInt(0, skyWidth);
      var posT = rInt(0, skyHeight);
      var aDur = Math.random() * 4.2;
      var aDel = Math.random();

      star.style.left = posL + 'px';
      star.style.top = posT + 'px';
      star.style.animationDelay = aDel + 's';
      star.style.animationDuration = aDur + 's';

      container.appendChild(star);
    }
  }

  window.initParticles = function() {
    createStars('particles-index', 300);
    createStars('particles-analysis', 300);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initParticles);
  } else {
    window.initParticles();
  }
  
})();
