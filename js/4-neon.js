// SETUP

TweenMax.set('#svg-neon', {transformOrigin: '0 0', scale:3});

// CAMERA SHAKE

var cameraShake = new TimelineMax({paused: true, repeat: -1, yoyo:true})

cameraShake
.to(['#neon', '#landscape'], 0.5, {x:10, y:5})
.to(['#neon', '#landscape'], 0.5, {x:-6, y:-10})
.to(['#neon', '#landscape'], 0.5, {x:4, y:-2})
.to(['#neon', '#landscape'], 0.5, {x:-8, y:4})
;

// SET UP NEON TIMELINES

var
    glowLines = selectAll('#glow-lines line'),
    here = select('#here'),
    o = select('#o'),
    ver = select('#ver'),
    glowArrow = select('#glow-arrow'),
    glowSign = select('#glow-base'),
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
    autoAlpha: 1
})
.to(glowArrow, 0.1, {
    autoAlpha: 0
})
.to(glowArrow, 0.1, {
    autoAlpha: 1
})
.to(glowArrow, 0.1, {
    delay: 1.5,
    autoAlpha: 0
})
.to({}, 1, {});


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


linesTL.pause(0);
hereTL.pause(0);
glowSignTL.pause(0);
glowArrowTL.pause(0);
overTL.pause(0);
neonScaleTL.pause(0);

// NEON SCALE TL

TweenMax.set('#neon', {transformOrigin: 'center center', scale: 0.4});

TweenMax.set('#landscape',  {transformOrigin: '400 200', smoothOrigin:true, scale: 0.4});

TweenMax.set('#landscape-clouds',  {transformOrigin: '400 200'});

neonScaleTL
.to('#neon', 8, {scale:0.6});

//  NEON APPEARANCE SEQUENCE

var neonAppearTL = new TimelineMax({paused:true});

// HIDE SIGN ELEMENTS FOR REVEAL

TweenMax.set(['#glow-lines', '#neon-base', '#arrow-base', '#over-base', '#landscape', '#landscape-clouds', '#purple-base'], {autoAlpha: 0})

neonAppearTL

.add(function(){neonScaleTL.play()})
.add(function(){overTL.play()})
.add(function(){hereTL.play()}, '+=1')
.add(function(){glowSignTL.play()}, '+=2')
.add(function(){glowArrowTL.play()}, '+=0.5')
.add(function(){linesTL.play()})
.to('#glow-lines', 2, {autoAlpha: 1}, '+=0.3')
.to('#arrow-base', 0.2, {autoAlpha: 1}, '+=1')
.to(['#neon-base', '#over-base'], 0.2, {autoAlpha: 1}, '+=0.5')
.staggerTo(['#land', '#mountains'], 0.8, {autoAlpha:1}, 0.2)
.to('#clouds1', 0.5, {autoAlpha:0.3});
;

// SET CLOUDS

var cloudsBG = new TimelineMax({paused:true});

cloudsBG
.to('#landscape-clouds', 10, {xPercent:-15, ease: Linear.easeNone})

mainTL
.set('#purple-base', {autoAlpha:1}, 'startDust')
.add(function(){neonAppearTL.play()}, 'startDust+=0.5')

// ShakeCAM

.add('zoom', '+=4')

.to('#landscape', 0.3, {scale:1.8, yPercent:5, ease: Back.easeInOut}, 'zoom')
//.add(function(){cameraShake.play()}, 'zoom')
//.to('#neon', 0.8, {scale:1, ease: Back.easeInOut}, 'zoom')

.to('#landscape', 0.5, {autoAlpha:1}, 'zoom')
.to('#landscape-clouds', 0.4, {autoAlpha:0.3}, 'zoom')
.add(function(){cloudsBG.play()}, 'zoom')
.add(function(){cameraShake.play()}, 'zoom')

.to('#neon', 0.5, {scale: 1.3, rotation: -4}, 'zoom')
.to('#landscape', 0.5, {scale: 1.3, rotation: -4, yPercent: 20, xPercent: -5}, 'zoom')
.to('#landscape-clouds', 0.5, {scale: 0.8, rotation: -4, xPercent:-2}, 'zoom')

.to('#neon', 0.5, {scale: 0.9, rotation: 0, yPercent: 5}, 'zoom+=1')
.to('#landscape', 0.5, {scale: 1, rotation: 0, yPercent:-2 }, 'zoom+=1')
.to('#landscape-clouds', 0.5, {scale: 1, rotation: 0},'zoom+=1')
;

mainTL
.add('falloff', '+=1')

.add(function(){cameraShake.pause()}, 'falloff')
.add(function(){cloudsBG.pause()}, 'falloff+=1')

.to('#neon', 2, {x: -800, y: 50, rotation:-2, ease: Power4.easeIn}, 'falloff')
.to('#landscape', 3, {xPercent: -100, yPercent: 90, ease: Power4.easeIn}, 'falloff')
.to('#landscape-clouds', 3, {xPercent: -100, ease: Power4.easeIn}, 'falloff+=0.1')
;
