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




// HIDE SIGN ELEMENTS FOR REVEAL

 TweenMax.set(['#glow-lines', '#sign-base', '#arrow-base', '#over-base', '#land', '#mountains', '#clouds1'], {opacity: 0})

neonAppearTL


// START NEON ELEMENT TIMELINES

//.to('#neonfade', 0.5, {opacity:0})

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

// JIGGLECAM

.to('#neon', 0.8, {scale:1, ease: Back.easeInOut}, '+=7')
.to('#landscape', 0.3, {scale:1.8, y:-200, ease: Linear.easeNone}, '-=0.6')
//.add(function(){cameraJiggle.play()})
.to(['#neon'], 0.5, {scale: 1.3, rotation: -4}, '+=0.6')
.to(['#landscape'], 0.5, {scale: 2, rotation: -4}, '-=0.5')
.to('#neon', 0.5, {scale: 1, rotation: 0}, '+=0.6')
.to('#landscape', 0.5, {scale: 1.8, rotation: 0}, '-=0.5')

// TRANSITION NEON -> BALLOONS

.add(function(){cameraJiggle.pause()})
.add(function(){cloudBG.pause()})

.to('#neon', 2, {transformOrigin: '100% 50%', x: -800, y: 50, rotation: -5, ease: Power4.easeIn}, 'fallOff')
.to('#landscape', 3, {transformOrigin: '100% 50%', x: -1300, y: 200, rotation: -5, ease: Power3.easeIn}, 'fallOff')

.to('#clouds1', 3, {transformOrigin: '100% 0%', x: -4000, y: 300, scale: 2, rotation: -45, ease: Power3.easeIn}, 'fallOff')
;

// CLOUDS/STARS

var cloudGroups = selectAll('.cloudGroup');

TweenMax.set(cloudGroups, {
    y: -600,
    x: 700,
    rotation: 45,
    transformOrigin: 'center center',
    opacity: 0.3
});
TweenMax.set(cloudGroups[1], {
    scale: 3
});


var speedline = select('#speedline');
var singleStar = select('#single-star');
var clouds = selectAll('.cloudGroup path');

var speedClouds = true;

// Thanks to Chris Gannon

function passThing() {

    if (speedClouds) {
        // set the starting position of speedline at random x and y value

        TweenMax.fromTo(speedline, 0.4, {
            x: 0,
            y: randMinMax(-800, 400)
        }, {
            x: -800,
            y: '+=800',
            onComplete: passThing,
            ease: Power0.easeNone
        });
        TweenMax.fromTo(singleStar, 0.5, {
            x: 0,
            y: randMinMax(-800, 400)
        }, {
            x: -800,
            y: '+=800',
            onComplete: passThing,
            ease: Power0.easeNone
        });

        var cloudNum = randMinMax(0,11,true);
        var thisCloud = clouds[cloudNum];

        TweenMax.fromTo(thisCloud, 0.5, {
            y:0
        }, {
            y: 1800,
            onComplete: passThing,
            ease: Power0.easeNone
        }, 1);
    }
};

mainTL
.add(function(){passThing()});


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

var aYou = new TimelineMax();
var aMade = new TimelineMax();
var aIt = new TimelineMax();

aYou
//.call(toggleClouds)
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
//.call(toggleClouds)
.call(function(){
    blYou.kill();
    blMade.kill();
    blIt.kill();
})
;

var aBalloons = new TimelineMax({paused: true, onComplete: continueMainTL});

function continueMainTL(){mainTL.play();}

aBalloons.add(aYou, 0).add(aMade, 1.5).add(aIt, 4);


// START BALLOONS

mainTL
.add(function(){aBalloons.play()})
.add(function(){mainTL.pause()})
;


// THANKS FOR COMING

// SET FADEBOX TO BE INVISIBLE

TweenMax.set('#fadebox', {opacity:0});

// setup

TweenMax.set(['#thanks', '#for', '#coming'], {opacity:0});

TweenMax.set('#stars-big', {
    x: -200,
    y: -100,
    transformOrigin: 'center center'
});
TweenMax.set('#stars-small', {
    x: -200,
    y: -10,
    transformOrigin: 'center center',
//    opacity: 0.7
});

function changeSC(){
    speedClouds = false;
}

mainTL
.to('#fadebox', 4, {opacity: 1}, 'fadeIn')
.call(changeSC) // had trouble calling this as first thing in timeline replay... hmmm...
//.from(['#for', '#coming'], 1, {opacity:0})
.from('#stars-big', 4, {x:1000, y:-1000}, 'fadeIn')
.from('#stars-small', 4, {x:800, y:-800}, 'fadeIn')
;


// FOR TESTING

mainTL.play(8);
