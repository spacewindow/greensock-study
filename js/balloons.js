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

var
    bl = selectAll('.bl'),
    blwrap = selectAll('.blwrap'),
    grain = select('.grain'),
    You = select('#blYou'),
    Made = select('#blMade'),
    It = select('#blIt'),
    cloud = select('.cloud')
    ;


var testTL = new TimelineMax();

//TweenLite.ticker.fps(24);

var aString = new TimelineMax({repeat: -1});
var aKnot = new TimelineMax({repeat: -1});


// set balloon transform point


// FILM GRAIN

TweenMax.to(grain, 0.3, {
    transformOrigin: 'center center',
    rotation: 90,
    repeat: -1,
    ease: SteppedEase.config(1)
})

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

var aBalloons = new TimelineMax();

var aYou = new TimelineMax();
var aMade = new TimelineMax();
var aIt = new TimelineMax();

aYou
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
.call(function(){
    blYou.kill();
    blMade.kill();
    blIt.kill();
})
;

aBalloons.add(aYou, 0).add(aMade, 1.5).add(aIt, 4);



//var aCamera = new TimelineMax();

//aCamera.to(svg, 3, {
//    scale: 2,
//    yoyo: true,
//    repeat: -1
//});


// -----------------------------------

testTL.add(aString);
//testTL.add(aCamera, 0);

var dupElement = function(element) {
  var newElement = element.cloneNode(true);
  element.parentNode.insertBefore(newElement, element.nextSibling);
  return newElement;
};



// CLOUDS ANIMATION

var tapOn = false,
  cloudsTL = new TimelineMax();

var now = performance.now.bind(performance);
var ease = Power0.easeOut;
var cache = [];
var emitter = select(".emitter");
var last = now();
var frequency = 200;


for (var i = 0; i < 100; i++) {
  createParticle();
}

function createParticle() {

  var particle = dupElement(cloud);

  var x = randMinMax(0, -800);
  var color = randMinMax(0, 200);
  var time1 = randMinMax(1, 2);
  var time2 = randMinMax(1, 2);

  var tl = new TimelineLite({ paused: true, onComplete: onComplete })
    .set(particle, { autoAlpha: 0.7, background:"hsl(" + color + ", 90%, 60%)"})
    .to(particle, time1, { x: x, y: 800, ease: ease })
    .to({}, time2, {}); // Just a delay so it will sit at the bottom before restarting

  function onComplete() {
    TweenMax.set(particle, { autoAlpha: 0 });
    tl.pause();
    cache.push(tl);
  }

  cache.push(tl);
}


$('svg').click(function() {
  tapOn = !tapOn;
  if (tapOn) {

    TweenMax.ticker.addEventListener("tick", emit); // the ticker is  a Greensock object http://greensock.com/?class_element=js-tweenMax-target

  } else {

    TweenMax.ticker.removeEventListener("tick", emit);
  }
});

function emit() {

  var current = now();
  var elapsed = current - last;

  if (elapsed > frequency) {

    var tween = cache.shift(); // removes first item in cache array

    tween && tween.play(0);
    last = current;
  }
}

