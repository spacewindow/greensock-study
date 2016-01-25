// SETUP CLOUDS



var numClouds = clouds.length;
var cloudsOn = true;


// Thanks to Chris Gannon http://codepen.io/chrisgannon/pen/KVMMjR


function passCloud() {

    if (cloudsOn) {

        var cloudNum = randMinMax(0,(numClouds-1),true);
        var thisCloud = clouds[cloudNum];

        TweenMax.fromTo(thisCloud, 0.6, {
            y:0
        }, {
            y: 3000,
            onComplete: passCloud,
            ease: Linear.easeNone
        }, 1);
    }
};

function passSpeed() {

    if (cloudsOn) {

        TweenMax.fromTo('#speedline', 0.4, {
            x: randMinMax(-400, 400),
            y:0
        }, {
            y: 2000,
            onComplete: passSpeed,
            ease: Linear.easeNone
        });

    }
};

function passStar() {

    if (cloudsOn) {

        TweenMax.fromTo('#single-star', 1, {
            x: randMinMax(-400, 400),
            y:400
        }, {
            y: 2500,
            onComplete: passStar,
            ease: Linear.easeNone
        });

    }
};

mainTL
.add(function(){
    passCloud();
    passSpeed();
    passStar();
}, 'falloff+=2')
.to(cloudGroups, 3, {rotation: 45}, 'falloff+=3')
.add('startBalloons');

