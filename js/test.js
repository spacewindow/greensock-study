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
    squarebulge = select('.squarebulge'),
    squareleft = select('.squareleft'),
    squareright = select('.squareright'),
    youmadeit = select('.youmadeit'),
    ymd_words = selectAll('.word'),
    underline = select('.underline'),
    lights = select('.lights'),
    thanks = select('.thanks'),
    glint = select('.glint');


var testTL = new TimelineMax();

testTL
.set([you, board, dust, overhere, underline, thanks, glint, lights, youmadeit, squarebulge, squareleft, squareright], {
    autoAlpha: 0
})
;

// -----------------------------------

testTL
    .set(squarebulge, {
    autoAlpha: 0
})
    .set(square, {
        autoAlpha: 1,
        fill: 'red'
    })
    .to(squarefull, 0.5, {
        morphSVG: '.squarebulge',
        repeat: 1,
        yoyo: true,
        ease: Power2.easeOut
    })
;
