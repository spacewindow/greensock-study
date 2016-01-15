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

// SET

var mainTL = new TimelineMax();

TweenMax.set('#clouds1', {opacity: 0.2});
var ease = Linear.easeNone;

var cloudBG = new TimelineMax();

cloudBG.to('#clouds1', 50, {xPercent: -30, ease: ease});

TweenMax.set('#neon', {transformOrigin: 'center center', scale: 0.4});

var cameraJiggle = new TimelineMax({paused: true, repeat: -1, yoyo:true})

cameraJiggle
.to(['#neon', '#landscape'], 0.5, {x:10, y:5})
.to(['#neon', '#landscape'], 0.5, {x:-6, y:-10})
.to(['#neon', '#landscape'], 0.5, {x:4, y:-2})
.to(['#neon', '#landscape'], 0.5, {x:-8, y:4})
;




// SET UP NEON TIMELINES

var
    fullSign = select('#neon'),
    baseArrow = select('.base-arrow'),
    glowLines = selectAll('.line'),
    here = select('.here'),
    o = select('.o'),
    ver = select('.ver'),
    glowArrow = select('.glow-arrow'),
    glowSign = select('#glow-sign'),
    signBase = select('#sign-base')
    ;

var linesTL = new TimelineMax({repeat: -1}),
    hereTL = new TimelineMax({repeat: -1}),
    glowSignTL = new TimelineMax(),
    glowArrowTL = new TimelineMax({repeat: -1,  delay: 0.8}),
    overTL = new TimelineMax({repeat: -1}),
//    neonCamera = new TimelineMax({paused: true})
    neonScaleTL = new TimelineMax()
    ;

linesTL
.staggerTo(glowLines, 0.1, {
    opacity: 0
}, 0.1)
.staggerTo(glowLines, 0.1, {
    opacity: 1
}, 0.1, '-=1.1')
;

hereTL
.set(here, {
    opacity: 0,
})
.to(here,0.1,{
    delay: 0.2,
    opacity: 1
})
.to(here, 0.1, {
    delay: 2,
    opacity: 0
})
.to(here, 0.1, {
    delay: 0.1,
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
    delay: 2,
    opacity: 0
})
.to(glowArrow, 0.1, {
    opacity: 1
});


overTL
.set([o, ver], {
    opacity: 0
})
.to(o, 0.1, {
    delay: 0.2,
    opacity: 1
})
.to(ver, 0.1, {
    opacity: 1
})
.to(o, 0.1, {
    delay: 2,
    opacity: 0
})
.to(ver, 0.1, {
    opacity: 0
})
;

neonScaleTL
.to('#neon', 8, {scale:0.5});

// NEON CAMERA...

linesTL.pause(0);
hereTL.pause(0);
glowSignTL.pause(0);
glowArrowTL.pause(0);
overTL.pause(0);
neonScaleTL.pause(0);

var neonAppearTL = new TimelineMax({paused:true});


// temp

//TweenMax.set('#neon',{opacity:0});

neonAppearTL

// HIDE SIGN ELEMENTS FOR REVEAL

.set(['#glow-lines', '#sign-base', '#arrow-base', '#over-base', '#land', '#mountains', '#clouds1'], {opacity: 0})

// START NEON ELEMENT TIMELINES

.add(function(){neonScaleTL.play()})
.add(function(){overTL.play()})
.add(function(){hereTL.play()}, '+=1')
.to(['#sign-base', '#over-base'], 0.5, {opacity: 1}, '+=2')
.add(function(){glowSignTL.play()}, '+=0.5')
.add(function(){linesTL.play()})
.to('#glow-lines', 0.2, {opacity: 1})
.to(['#sign-base'], 0.2, {opacity: 1}, '+=0.2')
.add(function(){glowArrowTL.play()})
.to('#arrow-base', 0.2, {opacity: 1}, '+=0.5')
.staggerTo(['#land', '#mountains'], 0.8, {opacity:1}, 0.2, '+=0.5')
.to('#clouds1', 0.5, {opacity:0.3}, '+=0.5');
;

mainTL
.add(function(){neonAppearTL.play()})

.to('#neon', 0.8, {scale:1, ease: Back.easeInOut}, '+=7')
.to('#landscape', 0.3, {transformOrigin: '30% 0%', scale:1.8, ease: Linear.easeNone}, '-=0.6')
.add(function(){cameraJiggle.play()})
.to(['#neon'], 0.5, {scale: 1.3, rotation: -4}, '+=0.6')
.to(['#landscape'], 0.5, {scale: 2, rotation: -4}, '-=0.5')
.to('#neon', 0.5, {scale: 1, rotation: 0}, '+=0.6')
.to('#landscape', 0.5, {scale: 1.8, rotation: 0}, '-=0.5')

.add(function(){cameraJiggle.pause()})

.to('#neon', 2, {transformOrigin: '100% 50%', x: -800, y: 50, rotation: -5, ease: Power4.easeIn}, 'fallOff')
.to('#landscape', 3, {transformOrigin: '100% 50%', x: -1100, y: 330, rotation: -5, ease: Power3.easeIn}, 'fallOff')

.add(function(){cloudBG.pause()})

.to('#clouds1', 3, {transformOrigin: '100% 0%', x: -4000, y: 300, scale: 2, rotation: -45, ease: Power3.easeIn}, 'fallOff')
;



mainTL.play(10);



