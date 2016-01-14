CSSPlugin.useSVGTransformAttr = true;

CSSPlugin.defaultTransformPerspective = 200;

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


var stars = selectAll('#stars-big circle');
var clouds = selectAll('.cloudGroup path');
var cloudGroups = selectAll('.cloudGroup');



// STARS LOOP


TweenMax.set('#stars-big', {
    x: -200,
    y: -100,
    transformOrigin: 'center center'
});
TweenMax.set('#stars-small', {
    x: -200,
    y: -10,
    transformOrigin: 'center center',
    opacity: 0.7
});
TweenMax.set(cloudGroups, {
    y: -500,
    x: 400,
    rotation: 45,
    transformOrigin: 'center center',
    opacity: 0.3
});
TweenMax.set(cloudGroups[1], {
    scale: 3
});


var speedline = select('#speedline');
var singleStar = select('#single-star');

var loop = true;

// Thanks to Chris Gannon

function passThing() {

    if (loop) {
        // set the starting position of speedline at random x and y value

        TweenMax.fromTo(speedline, 0.4, {
            x: 0,
            y: randMinMax(-800, 400)
        }, {
            x: -800,
            y: '+=800',
            onComplete: passThing,
            ease: Power0.easeNone
        });
        TweenMax.fromTo(singleStar, 0.5, {
            x: 0,
            y: randMinMax(-800, 400)
        }, {
            x: -800,
            y: '+=800',
            onComplete: passThing,
            ease: Power0.easeNone
        });

        var cloudNum = randMinMax(0,11,true);
        var thisCloud = clouds[cloudNum];

        TweenMax.fromTo(thisCloud, 0.5, {
            y:0
        }, {
            y: 1400,
            onComplete: passThing,
            ease: Power0.easeNone
        }, 1);
    }
}
passThing();


// WRITE FOR COMING

TweenMax.from('#for', 2, {
    drawSVG: 0
});
TweenMax.from('#coming', 3, {
    drawSVG: 0,
    delay: 2
});

var mainTL = new TimelineMax();


//mainTL
//    .add(function(){
//        if (starsIn){
//            TweenMax.to(cloudGroups, speedline, singleStar, 0.5, {opacity:0});
//            TweenMax.add(function () {loop = false}, 1);
//        }
//    })
