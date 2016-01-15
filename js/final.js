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


// FILM GRAIN LOOP

TweenMax.to('.grain', 0.3, {
    transformOrigin: 'center center',
    rotation: 90,
    repeat: -1,
    ease: SteppedEase.config(1)
});


// MAIN TL

mainTL

// SET POSITIONS

.set('#label2', {x: -700})
.set('#heybox', {x: 800, transformOrigin: '0% 100%'})
.set('#hand-closed', {opacity:0})
.set('#fullarm', {x:-1000, y: 300, scale: 1.2})
.set('#sign', {opacity:0})
.set('#landscape', {x:-200})

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

// SET UP NEON TIMELINES

var
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

var cameraJiggle = new TimelineMax({paused: true, repeat: -1, yoyo:true})

cameraJiggle
.to('#neon', 0.5, {x:10, y:5})
.to('#neon', 0.5, {x:-6, y:-10})
.to('#neon', 0.5, {x:4, y:-2})
.to('#neon', 0.5, {x:-8, y:4})
;

linesTL.pause(0);
hereTL.pause(0);
glowSignTL.pause(0);
glowArrowTL.pause(0);
overTL.pause(0)
cameraJiggle.pause(0);

mainTL

// HIDE SIGN ELEMENTS FOR REVEAL

.set(['#glow-lines', '#sign-base', '#arrow-base', '#over-base'], {opacity: 0}, 'startDust')
.set('#neon', {scale: 0.4, transformOrigin: 'center center'}, 'startDust')

// START NEON CAMERA LOOP

.add(function(){cameraJiggle.play()}, 'startDust')

// REMOVE NEON BLACKOUT

.to('#neonfade', 1, {opacity: 0},'startDust+=0.3')

// START NEON ELEMENT TIMELINES

.add(function(){overTL.play()}, 'startDust')
.add(function(){hereTL.play()}, 'startDust+=1')
.add(function(){linesTL.play()}, 'startDust+=2')
.to('#glow-lines', 0.5, {opacity: 1}, 'startDust+=2')
.to('#arrow-base', 0.5, {opacity: 1}, 'startDust+=2.5')
.to(['#sign-base', '#over-base'], 0.5, {opacity: 1}, 'startDust+=3')
.add(function(){glowSignTL.play()}, 'startDust+=3.5')
.add(function(){glowArrowTL.play()}, 'startDust+=4')

// NEON CAMERA

.to('#neon', 2, {scale:1, ease: Back.easeOut.config(4)}, 'startDust+=0.5')
.to('#neon', 2, {scale:1.2, ease: Back.easeOut.config(4)})
.to('#neon', 1, {scale:1, ease: Back.easeOut.config(4)})
.add(function(){cameraJiggle.pause()}, 'endNeon')
.to('#neon', 1, {rotation: -20, x: -800, y: 300, ease: Power3.easeIn})
.add('endNeon')
;



// BALLOONS ANIMATION (PAUSED)

var
    bl = selectAll('.bl'),
    blwrap = selectAll('.blwrap'),
    grain = select('.grain'),
    You = select('#blYou'),
    Made = select('#blMade'),
    It = select('#blIt'),
    cloud = selectAll('.cloud'),
    cloudGroup = selectAll('.cloudGroup')
    ;


//TweenLite.ticker.fps(24);

var aString = new TimelineMax({repeat: -1});
var aKnot = new TimelineMax({repeat: -1});


//TweenMax.to(svg, 2, {attr:{viewBox: '0 0 400 400'}, repeat: -1, yoyo: true, ease:Linear.easeNone});

//findShapeIndex(".blMadeLeft", ".blMadeRight");


var blCreate = function() {

    for (var i=0; i < bl.length; i++){

        var balloon = bl[i];
//        var tlName = balloon.parentNode.getID("class")
        var tlName = balloon.parentNode.id;

        this[tlName] = new TimelineMax({repeat: -1, paused:true});

        var stringTL = new TimelineMax({repeat: -1});
        var wordTL = new TimelineMax();
        var knotTL = new TimelineMax();

        var string = balloon.getElementsByClassName("string")[0];
        var word = balloon.getElementsByClassName("word")[0];
        var wordright = balloon.getElementsByClassName("wordright")[0];
        var knot = balloon.getElementsByClassName("knot")[0];

        // WORD LOOP

        wordTL
        .set(wordright, {
            opacity:0
        })
        .to(word, 2.5,{
            morphSVG: {shape: wordright, map: 'complexity'},
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
        })
        ;

        // STRING LOOP

        stringTL
        .to(string, 1, {
            morphSVG: '#string2',
            ease: Power0.easeInOut,
        }, 'stringStart')
        .to(string, 1, {
            morphSVG: '#string3',
            ease: Power0.easeInOut,
        })
        .to(string, 1, {
            morphSVG: '#string4',
            ease: Power0.easeInOut,
        })
        .to(string, 1, {
            morphSVG: '#string1',
            ease: Power0.easeInOut,
        })
        ;


        var stringRotate = new TimelineMax();

        stringRotate
        .set(string, {
            transformOrigin: '0% 0%',
            rotation: -10
        })
        .to(string, 3, {
            yoyo: true,
            repeat: -1,
            rotation: 10
        });

        var blRotate = new TimelineMax();

        blRotate
        .set(bl, {
            transformOrigin: '40% 20%',
            rotation: -10
        })
        .to(bl, 3, {
            yoyo: true,
            repeat: -1,
            rotation: 10
        });

        knotTL
        .set(knot, {
            transformOrigin: '30% 20%',
            rotation: 15,
        })
        .to(knot, 3, {
            rotation: -15,
            scaleY: 1.2,
            yoyo: true,
            repeat: -1,
            ease: Power1.easeInOut,
        });

        this[tlName].add(wordTL, 0).add(stringTL, 0).add(stringRotate, 0).add(knotTL, 3);

    }
}

blCreate(); // Creates 3 paused timelines: blYou, blMade, blIt


// BALLOON SIZE PULSE

TweenMax.staggerTo(bl, 1.2, {
    scale: 1.06,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
}, 1);

TweenMax.staggerTo(bl, 1, {
    cycle: {
        x: [10, 20, 50],
        y: [-10, 20, 50]
    },
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
}, 1);

// ANIMATE IN

var aBalloons = new TimelineMax({paused: true});

var aYou = new TimelineMax();
var aMade = new TimelineMax();
var aIt = new TimelineMax();

aYou
.call(toggleClouds)
.set([You, Made], {
    y: 800,
    x: -100,
    rotation: 10
})
.set(It, {
    y: 800,
    x: 100,
    rotation: 10
})
.call(function(){
    blYou.play(0)
})
.to(You, 2, {
    x:0,
    y:0,
    scale: 2,
    ease: Back.easeInOut
})
.to(You, 2, {
    x:-140,
    y:200,
    scale: 1,
    ease: Back.easeInOut
})
.to(You, 2, {
    y: 0,
    ease: Back.easeInOut
})
.to(You, 2, {
    delay: 4,
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
})
;

aMade
.call(function(){
    blMade.play(0)
})
.to(Made, 2, {
    x:0,
    y:0,
    scale: 2,
    ease: Back.easeInOut
})
.to(Made, 2, {
    x:-140,
    y:200,
    scale: 1,
    ease: Back.easeInOut
})
.to(Made, 2, {
    delay: 1,
    scale: 1.4
})
.to(Made, 2, {
    delay: 2,
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
})
;


aIt
.call(function(){
    blIt.play(0)
})
.to(It, 2, {
    x:200,
    y:0,
    scale: 1.8,
    ease: Back.easeInOut
})
.to(It, 2, {
    x:100,
    y:100,
    scale: 1,
    ease: Back.easeInOut
})
.to(It, 2.5, {
    delay: 3,
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
})
.call(toggleClouds)
.call(function(){
    blYou.kill();
    blMade.kill();
    blIt.kill();
})
;

aBalloons.add(aYou, 0).add(aMade, 1.5).add(aIt, 4);

// -----------------------------------


// CLOUD ANIMATION (PAUSED)

TweenMax.set(cloudGroup[0], {rotation: 45, y:-400, x: 600});
TweenMax.set(cloudGroup[1], {rotation: 45, y:-400, x: 600, scale: 2, opacity: 0.5});

var tapOn = false,
  cloudsTL = new TimelineMax();

var now = performance.now.bind(performance);
var ease = Power0.easeOut;
var cache = [];
var last = now();
var numClouds = cloud.length;
var frequency = 500;
//console.log(numClouds);

for (var i = 0; i < numClouds; i++) {
  createParticle();
}

function createParticle() {

//  var x = [-800, -600, -200, -100, 0, 100, 200, 300];
var particle = cloud[i];

  var tl = new TimelineLite({ paused: true, onComplete: onComplete })
  .set(particle, { autoAlpha: 1 })
    .to(particle, 1, { /*x: x[i],*/ y: 1300, ease: ease, scale: 2 })
    .to({}, 2, {}); // Just a delay so it will sit at the bottom before restarting

  function onComplete() {
    TweenMax.set(particle, { autoAlpha: 0 });
    tl.pause();
    cache.push(tl);
  }

  cache.push(tl);
}


function toggleClouds() {
  tapOn = !tapOn;
  if (tapOn) {

    TweenMax.ticker.addEventListener("tick", emit); // the ticker is  a Greensock object http://greensock.com/?class_element=js-tweenMax-target

  } else {

    TweenMax.ticker.removeEventListener("tick", emit);
  }
};

function emit() {

  var current = now();
  var elapsed = current - last;

  if (elapsed > frequency) {

    var tween = cache.shift(); // removes first item in cache array

    tween && tween.play(0);
    last = current;
  }
};


// START BALLOONS

mainTL.add(function(){aBalloons.play()});


// FOR TESTING

mainTL.play(0);
