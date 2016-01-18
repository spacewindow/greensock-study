// RANDOM NUMBER MIN MAX - https://gist.github.com/timohausmann/4997906

var randMinMax = function (t, n, a) {
    var r = t + Math.random() * (n - t)
    return a && (r = Math.round(r)), r
}

// SELECT FUNCTIONS

var select = function (s) {
    return document.querySelector(s);
};
var selectAll = function (s) {
    return document.querySelectorAll(s);
};

// CONTROLLER

$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    mainTL.progress( ui.value / 100 ).pause();
    }
});

var updateSlider = function() {
  $("#slider").slider("value", mainTL.progress() *100);
};

// SET UP

var mainTL = new TimelineMax({onUpdate: updateSlider});

//var mainTL = new TimelineMax();

// FILM GRAIN LOOP

TweenMax.to('.grain', 0.3, {
    transformOrigin: 'center center',
    rotation: 90,
    repeat: -1,
    ease: SteppedEase.config(1)
});
