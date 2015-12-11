var tl = new TimelineMax({ repeat: -1 });

// RANDOM NUMBER MIN MAX - https://gist.github.com/timohausmann/4997906
var randMinMax = function(t, n, a) {
  var r = t + Math.random() * (n - t)
  return a && (r = Math.round(r)), r
}

// Returns one single Cloud by duplicating the existing Cloud element
var createCloud = function(element) {
  var newElement = element.cloneNode(true);
  element.parentNode.insertBefore(newElement, element.nextSibling);
  return newElement;
};

// Initial placement of all clouds objects
var placeClouds = function(clouds) {
  TweenMax.staggerTo(clouds, 0, {
    cycle: {
      x: function() { return randMinMax(-200, 200); },
      y: function() { return randMinMax(0, 100); },
      scale: function() { return randMinMax(0.4, 1); }
    },
    opacity: 0
  }, 0);
};

// Addition of all cloud elements into main TimelineMax instance
var addIntoMainTimeline = function(clouds) {
  tl.staggerTo(clouds, 4, {
    cycle: {
      x: function() { return randMinMax(-200, 200); },
      y: function() { return randMinMax(-150, -200); },
      scale: function() { return randMinMax(0.4, 2); }
    },
    bezier: [{ opacity: 0.8 }, { opacity: 0 }],
    ease: Power1.easeInOut
  }, 0);
};

var clouds = function(cloud, numClouds) {
  var clouds;
  var element = document.querySelector(cloud);
  for (var i = 0; i < numClouds; i++) { createCloud(element); }
  clouds = document.querySelectorAll(cloud);
  placeClouds(clouds);
  addIntoMainTimeline(clouds);
};

clouds('.dust', 4);
