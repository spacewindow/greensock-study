CSSPlugin.useSVGTransformAttr = true;

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
    fullSign = select('.sign-group'),
    baseArrow = select('.base-arrow'),
    glowLines = selectAll('.line'),
    here = select('.here'),
    o = select('.o'),
    ver = select('.ver'),
    glowArrow = select('.glow-arrow'),
    glowSign = select('.glow-sign')
    ;


//var signTL = new TimelineMax();

var linesTL = new TimelineMax();

var hereTL = new TimelineMax({repeat: -1});

var glowSignTL = new TimelineMax({repeat: -1, delay: 0.4});

var glowArrowTL = new TimelineMax({repeat: -1,  delay: 0.8});

var overTL = new TimelineMax({repeat: -1});

linesTL
.staggerTo(glowLines, 0.5, {
    bezier: {
        curviness: 0,
        values: [{opacity: 1}, {opacity: 0}, {opacity: 1}],
    },
    ease: Power1.easeOut,
    repeat: -1,
    repeatDelay: 0.5
}, 0.2);

hereTL
.set(here, {
    opacity: 0,
})
.to(here,0.1,{
    delay: 0.2,
    opacity: 1
})
.to(here, 0.1, {
    delay: 1,
    opacity: 0
})
.to(here, 0.1, {
    delay: 0.5,
    opacity: 1
});

hereTL
.set(here, {
    opacity: 0,
})
.to(here,0.1,{
    delay: 0.2,
    opacity: 1
})
.to(here, 0.1, {
    delay: 1,
    opacity: 0
})
.to(here, 0.1, {
    delay: 0.5,
    opacity: 1
});

glowSignTL
.set(glowSign, {
    opacity: 0,
})
.to(glowSign,0.1,{
    delay: 0.2,
    opacity: 1
})
.to(glowSign, 0.1, {
    delay: 1,
    opacity: 0
})
.to(glowSign, 0.1, {
    delay: 0.5,
    opacity: 1
});

glowArrowTL
.set(glowArrow, {
    opacity: 0,
})
.to(glowArrow,0.1,{
    delay: 0.2,
    opacity: 1
})
.to(glowArrow, 0.1, {
    delay: 1,
    opacity: 0
})
.to(glowArrow, 0.1, {
    delay: 0.5,
    opacity: 1
});


overTL
.set([o, ver], {
    opacity: 0
})
.to(o, 0.1, {
    delay: 1,
    opacity: 1
})
.to(ver, 0.1, {
    opacity: 1
})
.to(o, 0.1, {
    delay: 1,
    opacity: 0
})
.to(ver, 0.1, {
    opacity: 0
})
.to({}, 0.1, {})
;

