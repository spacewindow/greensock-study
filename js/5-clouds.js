// CLOUDS

mainTL

.add(function(){cameraJiggle.pause()})
.add(function(){cloudBG.pause()})

.to('#neon', 2, {transformOrigin: '100% 50%', x: -800, y: 50, rotation: -5, ease: Power4.easeIn}, 'fallOff')
.to('#landscape', 3, {transformOrigin: '100% 50%', x: -1300, y: 200, rotation: -5, ease: Power3.easeIn}, 'fallOff')

.to('#clouds1', 3, {transformOrigin: 'center top', x: -4000, y: 300, scale: 2, rotation: -45, ease: Power3.easeIn}, 'fallOff')
;

// CLOUDS/STARS

var cloudGroups = selectAll('.cloudGroup');

var speedline = select('#speedline');
var singleStar = select('#single-star');
var clouds = selectAll('.cloudGroup path');
var numClouds = clouds.length

var speedClouds = true;

TweenMax.set(cloudGroups, {
    y: -300,
    x: 900,
    transformOrigin: 'center center',
});
TweenMax.set(clouds, {
    autoAlpha: 0.3
});
TweenMax.set(speedline, {
    autoAlpha: 0.6
});
TweenMax.set(cloudGroups[1], {
    scale: 3
});

// Thanks to Chris Gannon

function passThing() {

    if (speedClouds) {
        // set the starting position of speedline at random x and y value


        TweenMax.fromTo(speedline, 0.4, {
            x: randMinMax(-800, 400),
            y:0
        }, {
//            x:0,
            y: 800,
            onComplete: passThing,
            ease: Power0.easeNone
        });
        TweenMax.fromTo(singleStar, 0.5, {
            x: randMinMax(-800, 400),
            y:100
        }, {
//            x:0,
            y: 1800,
            onComplete: passThing,
            ease: Power0.easeNone
        });

        var cloudNum = randMinMax(0,(numClouds-1),true);
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
.fromTo(cloudGroups, 4, {rotation:70}, {rotation: 45, ease: Power4.easeIn}, 'fallOff+=3')
.add(function(){passThing()}, 'fallOff+=3')
.add('startBallons', 'fallOff+=6');

