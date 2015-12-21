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

var
//    hey = select('.hey'),
//    you = select('.you'),
//    overhere = select('.overhere'),
//    board = select('.board'),
//    dust = selectAll('.dust'),
//    square = select('.square'),
//    squarefull = select('.squarefull'),
//    squarebulge = select('.squarebulge'),
//    squareleft = select('.squareleft'),
//    squareright = select('.squareright'),
//    youmadeit = select('.youmadeit'),
//    ymd_words = selectAll('.word'),
//    underline = select('.underline'),
//    lights = select('.lights'),
//    thanks = select('.thanks'),
//    glint = select('.glint'),
    blYouLeft = select('.blYouLeft'),
    blYouRight = select('.blYouRight'),
    blMadeLeft = select('.blMadeLeft'),
    blMadeRight = select('.blMadeRight'),
    blItLeft = select('.blItLeft'),
    blItRight = select('.blItRight'),
    blReflect = select('.blReflect'),
    blKnot = select('.blKnot'),
    blBody = select('.blBody'),
    bl = selectAll('.bl'),
    string1 = selectAll('.string'),
    balloonCam = select('.balloonCam'),
    grain = select('.grain')
    ;


var testTL = new TimelineMax();

TweenLite.ticker.fps(24);

var aString = new TimelineMax({repeat: -1});
var aYou = new TimelineMax({repeat: -1});

TweenMax.set([blYouRight, blMadeRight, blItRight], {
    autoAlpha: 0
});
TweenMax.staggerTo(bl, 0 ,{
    cycle: {
      x: [-100, 100, 0],
      scale: [1, 1.2, 1.1],
    },
    transformOrigin: 'center 20%',
});

//FILM GRAIN

TweenMax.to(grain, 0.3, {
    transformOrigin: 'center center',
    rotation: 90,
    repeat: -1,
    ease: SteppedEase.config(1)
})

//TweenMax.to(svg, 2, {attr:{viewBox: '0 0 400 400'}, repeat: -1, yoyo: true, ease:Linear.easeNone});

//findShapeIndex(".blMadeLeft", ".blMadeRight");

TweenMax.to(balloonCam, 5, {
    scale: 2,
    rotation: 10,
    yoyo: true,
    repeat: -1
})

var aBalloon = new TimelineMax({repeat: -1});

aBalloon.to(bl, 3, {
    rotation: -15,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
}, '+=2');

TweenMax.to(blYouLeft, 2.5,{
    morphSVG: {shape: '.blYouRight', map:"complexity"},
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});

TweenMax.to(blMadeLeft, 2.5,{
    morphSVG: '.blMadeRight',
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});

TweenMax.to(blItLeft, 2.5,{
    morphSVG: '.blItRight',
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});


TweenMax.set(string1, {
    transformOrigin: '0% 0%',
    rotation: -10
});

aString
.to(string1, 1.5, {
    morphSVG: '#string2',
    ease: Power0.easeInOut,
}, 'stringStart-=0.3')
.to(string1, 1.5, {
    morphSVG: '#string3',
    ease: Power0.easeInOut,
})
.to(string1, 1.5, {
    morphSVG: '#string4',
    ease: Power0.easeInOut,
})
.to(string1, 1.5, {
    morphSVG: '#string1',
    ease: Power0.easeInOut,
})
;

//var aCamera = new TimelineMax();

//aCamera.to(svg, 3, {
//    scale: 2,
//    yoyo: true,
//    repeat: -1
//});


// -----------------------------------

testTL.add(aString);
//testTL.add(aCamera, 0);
