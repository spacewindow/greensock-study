// SETUP CLOUDS

// in Illlustrator create one main guide as an ellipse which fills the entire stage. Makes it easy to get the center point.

function positionIt(guide, target){

    var mainGuide = document.getElementById(guide),
        allGuides = document.querySelectorAll("[id*='" + guide + "']"),
        thisTarget = document.getElementById(target),

        // get Guide x and y offset
        boundsG = mainGuide.getBBox(),
        x = boundsG.x,
        y = boundsG.y;

    // get guide center
    var cx = mainGuide.getAttribute('cx'),
        cy = mainGuide.getAttribute('cy'),
        newOrigin = cx + ' ' + cy;

    console.log(newOrigin);

    TweenMax.set(thisTarget, {
        transformOrigin: newOrigin,
        x:-x,
        y:-y});
    TweenMax.set(allGuides, {autoAlpha:0});
}

positionIt('cGuide', 'cloudGroup01');
positionIt('cGuide02', 'cloudGroup02');

var cloudGroups = ['#cloudGroup01', '#cloudGroup02'];
var clouds = document.querySelectorAll("[id*='cloudGroup'] path");
var numClouds = clouds.length;
var cloudsOn = true;

TweenMax.set(clouds, {autoAlpha: 0.5});
TweenMax.set(cloudGroups, {rotation:90});

// Thanks to Chris Gannon http://codepen.io/chrisgannon/pen/KVMMjR


function passCloud() {

    if (cloudsOn) {

        var cloudNum = randMinMax(0,(numClouds-1),true);
        var thisCloud = clouds[cloudNum];

        TweenMax.fromTo(thisCloud, 0.3, {
            y:0
        }, {
            y: 2500,
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

        TweenMax.fromTo('#single-star', 0.4, {
            x: randMinMax(-400, 400),
            y:0
        }, {
            y: 1600,
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
}, 'falloff+=3')
.to(cloudGroups, 3, {rotation: 45}, 'falloff+=3')
.add('startBalloons', 'falloff+=6');




