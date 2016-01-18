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

// GET PARTICLES / GET STARS

var particles = selectAll('.particle'),
    numParticles = particles.length,
    stars = selectAll('.emit');
    numStars = stars.length;


//console.log(numParticles);
//console.log(particles);

// SET UP

//var mainTL = new TimelineMax({paused: true, onUpdate:updateSlider});

// LOCATE STARS

var starLocations = [];

function normalizeSVGOrigin(element, offset) {
    var bounds = element.getBBox();
    if (typeof offset !== "object") {
        offset = {x:0, y:0};
    }
    starLocations.push(bounds);
}

function locateStars(){
    for (var i=0; i < numStars; i++){
        var log = normalizeSVGOrigin(stars[i]);
    }
}

locateStars();
//console.log(starLocations);


// SET PARTICLES ON STARS

function setParticles(){
    for (var i=0; i < numParticles; i++){
        TweenMax.set(particles[i], {
            x: starLocations[i].x,
            y: starLocations[i].y
        });
    }
}

setParticles();


// FOR TESTING

//mainTL.play();


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
