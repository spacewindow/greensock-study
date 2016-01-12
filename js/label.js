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

// SET UP

var mainTL = new TimelineMax({paused: true});

var ease = Power0.easeIn;


// MAIN TL

mainTL

// SET POSITIONS

.set('#label2', {x: -700})
.set('#heybox', {x: 800, transformOrigin: '0% 100%'})
.set('#hand-closed', {opacity:0})
.set('#fullarm', {x:-1000, y: 300, scale: 1.2})
.set('#sign', {opacity:0})

// HAND REACH

.to('#hand-open', 0.5, {rotation: -20, repeat:1, yoyo: true, transformOrigin: "10% 100%"}, 'startArm')
.to('#fullarm', 0.5, {x: -10}, 'startArm')
.set('#hand-open', {opacity:0})
.set('#hand-closed', {opacity:1})

// PULL HEY

.to('#fullarm', 1, {x:-800, ease: Power3.easeIn}, 'startPull')
.to('#heybox', 1, {x: 0, ease: Power3.easeIn}, 'startPull')
.to('#fullarm', 0.2, {x:-1000, ease: Power3.easeOut}, 'heyRock')
.to('#heybox', 0.3, {rotation: -5, repeat: 1, yoyo: true, ease: Power4.easeOut}, 'heyRock')
.set('#heybox', {transformOrigin: '100% 100%'})
.to('#heybox', 0.1, {rotation: 2, repeat: 1, yoyo: true, ease: Power4.easeOut})
.to({}, 1, {})

// YOU LABEL

.set('#sign', {opacity:1})
.to('#label2', 0.75, {x: 1400, ease: ease}, 'startAnim')
.to('#clipping', 0.5, {attr: {x: -650}, ease: ease}, 'startAnim')
;

// COLLAPSE

mainTL.add('squareDown')

// SQUARE FALL

mainTL
.set(['#squarefull', '#squareleft', '#squareright', '#hey'], {
        transformOrigin: 'center bottom',
    })
.set('#sign', {
        transformOrigin: '20% 150%'
    })
.set('#squarefull', {
        autoAlpha: 0,
    })
.set(['#squareleft', '#squareright'], {
    autoAlpha: 1
})
.to('#squareleft', 2, {
    skewX: -12,
    ease: Power4.easeIn
}, 'squarefall')
.to('#squareright', 2, {
    skewX: 12,
    ease: Power4.easeIn
}, 'squarefall')
.to(['#heybox'], 2, {
    scaleY: 0,
    ease: Power4.easeIn,
}, 'squarefall')
.to(['#hey'], 2, {
    scaleX: 0.3,
    ease: Power4.easeIn,
}, 'squarefall')
.to(['#sign' ], 2, {
    scaleY: 0,
    scaleX: 0.7,
    ease: Power4.easeIn,
}, 'squarefall')
;

// DUST CLOUDS

// Returns one single Cloud by duplicating the existing Cloud element
//var createCloud = function(element) {
//  var newElement = element.cloneNode(true);
//  element.parentNode.insertBefore(newElement, element.nextSibling);
//  return newElement;
//};

var dustClouds = selectAll('.dust');

// Initial placement of all clouds objects
TweenMax.staggerTo(dustClouds, 0, {
cycle: {
  x: [-100, 50, 0, 50, 100],
  y: [200],
  scale: function() { return randMinMax(0.4, 1); }
},
opacity: 0
}, 0);

mainTL
.add('startDust')
.staggerTo(dustClouds, 4, {
    cycle: {
      x: function() { return randMinMax(-400, 400); },
      y: function() { return randMinMax(-300, -400); },
      scale: function() { return randMinMax(0.4, 1.7); }
    },
    bezier: [{ opacity: 0.7 }, { opacity: 0 }],
    ease: Power1.easeInOut
}, 0, '-=0.8');

// NEON REVEAL

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

var linesTL = new TimelineMax({paused: true}),
    hereTL = new TimelineMax({paused: true, repeat: -1})
    glowSignTL = new TimelineMax({paused: true, repeat: -1, delay: 0.4})
    glowArrowTL = new TimelineMax({paused: true, repeat: -1,  delay: 0.8})
    overTL = new TimelineMax({paused: true, repeat: -1});

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

linesTL.play();
hereTL.play();
glowSignTL.play();
glowArrowTL.play();
overTL.play();

mainTL
.set('#neon', {scale: 0.1, transformOrigin: 'center center'}, 'startDust')
.to('#neon', 2, {scale: 1}, 'startDust')
.to('#neonfade', 1, {opacity: 0},'startDust+=0.3')




// FOR TESTING

mainTL.play(0);





