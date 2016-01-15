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

TweenMax.set('#clouds1', {opacity: 0.2});
var ease = Linear.easeNone;

var cloudBG = new TimelineMax();

cloudBG.to('#clouds1', 30, {xPercent: -30, ease: ease});

TweenMax.set('#neon', {transformOrigin: 'center center', scale: 1});
TweenMax.set('#land', {transformOrigin: 'center top', scale: 2, y: 110});
TweenMax.set('#mountains', {transformOrigin: 'center center', scale: 1.3, y:120});

var hTL = new TimelineMax();

hTL
.fromTo('#neon', 16, {x:200}, {x:-200, ease: ease}, 'start')
.fromTo('#land', 16, {x:0}, {x:-100, ease: ease}, 'start')
.fromTo('#mountains', 16, {x:0}, {x:-100, ease: ease}, 'start')
;

var vTL = new TimelineMax();

vTL
.fromTo('#neon', 10, {yPercent:-5}, {yPercent: 5, ease: ease}, 'start')
.fromTo('#land', 10, {yPercent:0}, {yPercent: 0, ease: ease}, 'start')
.fromTo('#mountains',10, {yPercent:0}, {yPercent: -30, ease: ease}, 'start')
;

vTL.pause(8);
hTL.pause(8);

var camTL = new TimelineMax({repeat:-1, paused:true});

// CRAZY CAMERA MOVES

camTL
//1
.add(function(){
    vTL.play()
})
//2
.add(function(){
    vTL.reverse();
    hTL.reverse();
}, '+=0.3')
//3
.add(function(){
    vTL.pause();
    hTL.play();
}, '+=0.2')
//4
.add(function(){
    vTL.reverse();
}, '+=0.3')
//5
.add(function(){
    vTL.pause();
    hTL.reverse();
}, '+=0.2')
//6
.add(function(){
    vTL.pause();
    hTL.reverse();
}, '+=0.3')
//7
.add(function(){
    vTL.play();
    hTL.play();
}, '+=0.2')
//8
.add(function(){
    vTL.pause();
    hTL.play();
}, '+=0.1')
//9
.add(function(){
    vTL.play();
    hTL.pause();
}, '+=0.1')
//10
.add(function(){
    vTL.pause();
    hTL.play();
}, '+=0.1')
//finish
.add(function(){
    hTL.pause()
}, '+=0.1');


// ZOOM

var zoomTL = new TimelineMax();

zoomTL
.set('#neon', {scale: 0.4})
.to('#neon', 0.2, {scale: 1.1}, 3)
.add(function(){
    camTL.play();
})
.to('#neon', 0.2, {scale: 1}, 5)
.add(function(){
    camTL.pause();
}, '+=2')

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
    hereTL = new TimelineMax({repeat: -1})
    glowSignTL = new TimelineMax()
    glowArrowTL = new TimelineMax({repeat: -1,  delay: 0.8})
    overTL = new TimelineMax({repeat: -1})
    neonCamera = new TimelineMax({paused: true})
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

// NEON CAMERA...

linesTL.pause(0);
hereTL.pause(0);
glowSignTL.pause(0);
glowArrowTL.pause(0);
overTL.pause(0)

var mainTL = new TimelineMax();

mainTL

// HIDE SIGN ELEMENTS FOR REVEAL

// temp!!!!!!!

.set(['#glow-lines', '#sign-base', '#arrow-base', '#over-base', '#land', '#mountains', '#clouds1'], {opacity: 0}, 'startDust')

.set('#neonfade', {opacity:0})

// REMOVE NEON BLACKOUT

.to('#neonfade', 1, {opacity: 0},'startDust+=0.3')

// START NEON ELEMENT TIMELINES

.to('#neon', 8, {scale: 0.5}, 'startDust')

.add(function(){overTL.play()}, 'startDust')
.add(function(){hereTL.play()}, 'startDust+=1')
.add(function(){linesTL.play()}, 'startDust+=2')
.to('#glow-lines', 0.5, {opacity: 1}, 'startDust+=2')
.to('#arrow-base', 0.5, {opacity: 1}, 'startDust+=3')
.to(['#sign-base', '#over-base'], 0.5, {opacity: 1}, 'startDust+=3.5')
.add(function(){glowSignTL.play()}, 'startDust+=4')
.add(function(){glowArrowTL.play()}, 'startDust+=4.5')
.staggerTo(['#land', '#mountains', '#clouds1'], 0.5, {opacity:1}, 0.5 );

