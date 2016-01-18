// RANDOM NUMBER MIN MAX - https://gist.github.com/timohausmann/4997906

var randMinMax = function(t, n, a) {
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

// DUPLICATE ELEMENT

var dupElement = function(element) {
  var newElement = element.cloneNode(true);
  element.parentNode.insertBefore(newElement, element.nextSibling);
  return newElement;
};


var mainTL = new TimelineMax({onUpdate: updateSlider});
var subTL = new TimelineMax({ repeat:5, yoyo:true});
var thanks = select('#thanks');
var particles = selectAll('.particle');

TweenMax.set(particles, {transformOrigin: 'left top'});

TweenMax.set(thanks, {opacity:0})

subTL
.to(thanks, 1, {opacity:1})
;

mainTL
.to(particles, 2, {scale:4})
.add(subTL)
.to(particles, 4, {scale:1}, 2)
.to(particles, 4, {x:400})

;






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
