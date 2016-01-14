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

var hTL = new TimelineMax();

TweenMax.set('#neon', {transformOrigin: 'center center', scale: 1});
TweenMax.set('#land', {transformOrigin: 'center top', scale: 2, y: 110});
TweenMax.set('#mountains', {transformOrigin: 'center center', scale: 1.3, y:120});

hTL
.fromTo('#neon', 10, {x:200}, {x:-200, ease: ease}, 'start')
.fromTo('#land', 10, {x:0}, {x:-100, ease: ease}, 'start')
.fromTo('#mountains', 10, {x:0}, {x:-100, ease: ease}, 'start')
;

hTL.pause(0);


//var vTL = new TimelineMax();
//
//vTL
//.fromTo('#neon', 4, {yPercent:-5}, {yPercent: 20, ease: ease}, 'start')
//.fromTo('#land', 4, {yPercent:-10}, {yPercent: 0, ease: ease}, 'start')
//.fromTo('#moutains', 4, {yPercent:-10}, {yPercent: -10, ease: ease}, 'start')
//;
//
//vTL.pause(0);

var camTL = new TimelineMax({delay: 2});

// CRAZY CAMERA MOVES

//camTL
//.add(function(){
//    hTL.play()
//}, 0)
//.add(function(){
//    hTL.reverse()
//}, 0.5)
//.add(function(){
//    vTL.play()
//}, 1)
//.add(function(){
//    vTL.reverse()
//}, 1)
//.to('#neon', 0.5, {scale: 1.1})
//.add(function(){
//    vTL.pause()
//}, 2)
//.add(function(){
//    hTL.play()
//}, 2.5)
//.add(function(){
//    hTL.pause()
//}, 3)
//;

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
    cameraJiggle = new TimelineMax({paused: true, repeat: -1, yoyo:true})
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
//cameraJiggle.pause(0);

var mainTL = new TimelineMax();

mainTL

// HIDE SIGN ELEMENTS FOR REVEAL

.set(['#glow-lines', '#sign-base', '#arrow-base', '#over-base'], {opacity: 0}, 'startDust')
//.set('#neon', {scale: 0.4, transformOrigin: 'center center'}, 'startDust')

// REMOVE NEON BLACKOUT

.to('#neonfade', 1, {opacity: 0},'startDust+=0.3')

// START NEON ELEMENT TIMELINES

.add(function(){overTL.play()}, 'startDust')
.add(function(){hereTL.play()}, 'startDust+=1')
.add(function(){linesTL.play()}, 'startDust+=2')
.to('#glow-lines', 0.5, {opacity: 1}, 'startDust+=2')
.to(['#sign-base', '#over-base'], 0.5, {opacity: 1}, 'startDust+=2.5')
.to('#arrow-base', 0.5, {opacity: 1}, 'startDust+=3')
.add(function(){glowSignTL.play()}, 'startDust+=3.5')
.add(function(){glowArrowTL.play()}, 'startDust+=4');

