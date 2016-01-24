// BALLOONS ANIMATION (PAUSED)

var
    blwrap = selectAll('[id*=bl-]'),
    bl = selectAll('[id^=balloon]'),
    string = selectAll('[id^=string]'),
    You = select('#bl_you'),
    Made = select('#bl_made'),
    It = select('#bl_it'),
    cloud = selectAll('.cloud'),
    cloudGroup = selectAll('.cloudGroup')
    ;


//TweenLite.ticker.fps(24);

var aString = new TimelineMax({repeat: -1});
var aKnot = new TimelineMax({repeat: -1});

TweenMax.set('#morphstrings', {autoAlpha:0});


//TweenMax.to(svg, 2, {attr:{viewBox: '0 0 400 400'}, repeat: -1, yoyo: true, ease:Linear.easeNone});

//findShapeIndex(".bl_madeLeft", ".bl_madeRight");


var blCreate = function() {

    for (var i=0; i < bl.length; i++){

        var balloon = bl[i];

//        var tlName = balloon.parentNode.getID("class")
        var tlName = balloon.parentNode.id;

        this[tlName] = new TimelineMax({repeat: -1, paused:true});

        var stringTL = new TimelineMax({repeat: -1});
        var wordTL = new TimelineMax();
        var knotTL = new TimelineMax();

        var string = balloon.querySelector("[id^=string]");
        var word = balloon.querySelector("[id^=wordleft]");
        var wordright = balloon.querySelector("[id^=wordright]");
        var knot = balloon.querySelector("[id^=knot]");

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
        .to(string, 1.5, {
            morphSVG: '#morphstring2',
            ease: Power1.easeIn,
        }, 'stringStart')
        .to(string, 0.7, {
            morphSVG: '#morphstring3',
            ease: Power1.easeOut,
        })
        .to(string, 1.5, {
            morphSVG: '#morphstring4',
            ease: Power1.easeIn,
        })
        .to(string, 0.7, {
            morphSVG: '#morphstring1',
            ease: Power1.easeOut,
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
        .to(bl, 2.2, {
            yoyo: true,
            repeat: -1,
            rotation: 15,
            ease: Power2.easeInOut
        });

        knotTL
        .set(knot, {
            transformOrigin: '40% 20%',
            rotation: -10,
        })
        .to(knot, 2.2, {
            rotation: 40,
            scaleY: 1.2,
            yoyo: true,
            repeat: -1,
            ease: Power2.easeInOut,
        });

        this[tlName].add(wordTL, 0).add(knotTL, 0.5).add(stringTL, 1.5)/*.add(stringRotate, 1)*/;

    }
}

blCreate(); // Creates 3 paused timelines: bl_you, bl-made, bl-it


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

var YouString = You.querySelector("[id^=string]");


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
    bl_you.play(0)
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
.to({}, 5, {})
.add(function(){
    bl_you.pause();

})
.to(YouString, 2, {
    morphSVG: '#morphstring3',
    ease: Power1.easeIn,
}, 'out')
.to(You, 2, {
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
}, 'out')
;

var MadeString = Made.querySelector("[id^=string]");


aMade
.call(function(){
    bl_made.play(0)
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
.to({}, 3, {})
.add(function(){
    bl_made.pause();

})
.to(MadeString, 2, {
    morphSVG: '#morphstring3',
    ease: Power1.easeIn,
}, 'out')
.to(Made, 2, {
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
}, 'out')
;

var ItString = It.querySelector("[id^=string]");


aIt
.call(function(){
    bl_it.play(0)
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
.to({}, 4, {})
.add(function(){
    bl_it.pause();

})
.to(ItString, 1.5, {
    morphSVG: '#morphstring1',
    ease: Power3.easeIn,
}, 'out')
.to(It, 2.5, {
    y: -600,
    x:900,
    rotation: 50,
    scaleX: 0.3,
    scaleY: 0.7,
    ease: Back.easeInOut
}, 'out+=0.3')
//.call(toggleClouds)
.call(function(){
    bl_you.kill();
    bl_made.kill();
    bl_it.kill();
})
;

mainTL
.add(aYou, 'startBalloons')
.add(aMade, 'startBalloons+=1.5')
.add(aIt, 'startBalloons+=4')
.add('stars');



