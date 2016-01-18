// SETUP LANDSCAPE

TweenMax.set('#landscape', {x:-200});

TweenMax.set('#clouds1', {autoAlpha: 0.2});
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
    glowLines = selectAll('.line'),
    here = select('.here'),
    o = select('.o'),
    ver = select('.ver'),
    glowArrow = select('.glow-arrow'),
    glowSign = select('#glow-sign'),
    signBase = select('#neon-base')
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
    autoAlpha: 0
}, 0.1)
.staggerTo(glowLines, 0.1, {
    autoAlpha: 1
}, 0.1, '-=1.1')
;

hereTL
.set(here, {
    autoAlpha: 0,
})
.to(here,0.1,{
    delay: 0.2,
    autoAlpha: 1
})
.to(here, 0.1, {
    delay: 0.5,
    autoAlpha: 0
})
.to(here, 0.1, {
    delay: 0.1,
    autoAlpha: 1
})
.set(here, {
    delay:1.5,
    autoAlpha: 0,
});

glowSignTL
.set(glowSign, {
    autoAlpha: 0,
})
.to(glowSign,0.1,{
    delay: 0.2,
    autoAlpha: 1
})
.to(glowSign, 0.1, {
    delay: 1,
    autoAlpha: 0
})
.to(glowSign, 0.1, {
    delay: 0.5,
    autoAlpha: 1
});

glowArrowTL
.set(glowArrow, {
    autoAlpha: 0,
})
.to(glowArrow,0.1,{
    delay: 0.2,
    autoAlpha: 1
})
.to(glowArrow, 0.1, {
    delay: 2,
    autoAlpha: 0
})
.to(glowArrow, 0.1, {
    autoAlpha: 1
});


overTL
.set([o, ver], {
    autoAlpha: 0
})
.to(o, 0.1, {
    delay: 0.2,
    autoAlpha: 1
})
.to(ver, 0.1, {
    autoAlpha: 1
})
.to(o, 0.1, {
    delay: 2,
    autoAlpha: 0
})
.to(ver, 0.1, {
    autoAlpha: 0
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




// HIDE SIGN ELEMENTS FOR REVEAL

 TweenMax.set(['#glow-lines', '#neon-base', '#arrow-base', '#over-base', '#land', '#mountains', '#clouds1'], {autoAlpha: 0})

neonAppearTL


// START NEON ELEMENT TIMELINES

//.to('#neonfade', 0.5, {autoAlpha:0})

.add(function(){neonScaleTL.play()})
.add(function(){overTL.play()})
.add(function(){hereTL.play()}, '+=1')
.to(['#neon-base', '#over-base'], 0.5, {autoAlpha: 1}, '+=2')
.add(function(){glowSignTL.play()}, '+=0.5')
.add(function(){linesTL.play()})
.to('#glow-lines', 0.2, {autoAlpha: 1})
.to(['#neon-base'], 0.2, {autoAlpha: 1}, '+=0.2')
.add(function(){glowArrowTL.play()})
.to('#arrow-base', 0.2, {autoAlpha: 1}, '+=0.5')
.staggerTo(['#land', '#mountains'], 0.8, {autoAlpha:1}, 0.2)
.to('#clouds1', 0.5, {autoAlpha:0.3});
;

mainTL
.add(function(){neonAppearTL.play()}, 'startDust+=0.5')

// JIGGLECAM

.to('#neon', 0.8, {scale:1, ease: Back.easeInOut}, '+=7')
.to('#landscape', 0.3, {scale:1.8, y:-200, ease: Linear.easeNone}, '-=0.6')
//.add(function(){cameraJiggle.play()})
.to(['#neon'], 0.5, {scale: 1.3, rotation: -4}, '+=0.6')
.to(['#landscape'], 0.5, {scale: 2, rotation: -4}, '-=0.5')
.to('#neon', 0.5, {scale: 1, rotation: 0}, '+=0.6')
.to('#landscape', 0.5, {scale: 1.8, rotation: 0}, '-=0.5')
;
