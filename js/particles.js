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

// SET UP

var mainTL = new TimelineMax({paused: true, onUpdate:updateSlider});

mainTL
.to('.sign-group', 10, {x:300, ease: Power0.easeIn})

// FOR TESTING

mainTL.play();


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

function updateSlider() {
  $("#slider").slider("value", mainTL.progress() *100);
}
