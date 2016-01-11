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

var hey = select('.hey'),
    you = select('.you'),
    overhere = select('.overhere'),
    board = select('.board'),
    dust = selectAll('.dust'),
    square = select('.square'),
    squarefull = select('.squarefull'),
    squareleft = select('.squareleft'),
    squareright = select('.squareright'),
    youmadeit = select('.youmadeit'),
    ymd_words = selectAll('.word'),
    underline = select('.underline'),
    lights = select('.lights'),
    thanks = select('.thanks'),
    glint = select('.glint'),
    signstart = select('.signstart'),
    signfinish = select('.signfinish'),
    strip1 = select('#strip1'),
    strip1r = select('#strip1 .rect')
    strip2 = select('#strip2'),
    strip2r = select('#strip2 .rect')
    ;


// SET UP

var mainTL = new TimelineMax({
//    paused: true,
//    onUpdate: updateSlider
});


// SETUP

mainTL
.set([you, board, dust, overhere, underline, thanks, glint, lights, youmadeit], {
    autoAlpha: 0
})
.set(strip1, {transformOrigin: '100% 50%', rotation: 45})
//.set(signfinish, {rotation: 45})
//.to(strip1r, 3, {x:600, ease: Power0.easeIn})
//.to(strip2r, 3, {x:400, ease: Power0.easeIn}, '-=1.5')
;
