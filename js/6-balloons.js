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
            autoAlpha:0
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
        .to(string, 0.8, {
            morphSVG: '#string2',
            ease: Linear.easeNone,
        }, 'stringStart')
        .to(string, 0.8, {
            morphSVG: '#string3',
            ease: Linear.easeNone,
        })
        .to(string, 0.8, {
            morphSVG: '#string4',
            ease: Linear.easeNone,
        })
        .to(string, 0.8, {
            morphSVG: '#string1',
            ease: Linear.easeNone,
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

        this[tlName].add(wordTL, 0).add(stringTL, 2).add(stringRotate, 0).add(knotTL, 3);

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
    scale: 1.6,
    y:-100,
    x: 30
})
.to(Made, 2, {
    delay: 2.5,
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
    x:160,
    y:300,
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

mainTL
.add(aYou, 'startBalloons')
.add(aMade, 'startBalloons+=1.5')
.add(aIt, 'startBalloons+=4')
.add('stars', 'startBalloons+=12');
