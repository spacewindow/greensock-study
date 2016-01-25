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

// CONTROLLER

$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    mainTL.progress( ui.value / 100 ).pause();
    }
});

var updateSlider = function() {
  $("#slider").slider("value", mainTL.progress() *100);
};


// SET UP

var mainTL = new TimelineMax({onUpdate: updateSlider});

// FILM GRAIN LOOP

TweenMax.to('.grain', 0.3, {
    transformOrigin: 'center center',
    rotation: 90,
    repeat: -1,
    ease: SteppedEase.config(1)
});

// HAND

var fingers = selectAll('[id^=finger]'),
    thumb = select('#thumb')
;

mainTL.set(['#heybox', '#squareleft', '#squareright', '#hey'], {
        transformOrigin: 'center bottom',
});
mainTL.set('#hand-wave', {autoAlpha:1, x:0, y:0, rotation: 0
});


// YOU LABEL

mainTL.set('#label1', {transformOrigin: '70% 150%', autoAlpha:0});
mainTL.set('#label2', {x: -700, autoAlpha:0});
mainTL.set('#sign', {
        transformOrigin: '70% 150%',
});
mainTL.set(['#squareleft', '#squareright'], {
    autoAlpha: 1
});

// NEON

mainTL.set('#svg-neon', {transformOrigin: '0 0', scale:3});
mainTL.set('#neon', {transformOrigin: 'center center', scale: 0.4});
mainTL.set('#landscape',  {transformOrigin: '400 200', smoothOrigin:true, scale: 0.4});
mainTL.set('#landscape-clouds',  {transformOrigin: '400 200'});
mainTL.set(['#glow-lines', '#neon-base', '#arrow-base', '#over-base', '#landscape', '#landscape-clouds', '#purple-base'], {autoAlpha: 0});

// BALLOONS

var
    bl = selectAll('[id^=balloon]'),
    string = selectAll('[id^=string]'),
    You = select('#bl_you'),
    Made = select('#bl_made'),
    It = select('#bl_it')
    ;

mainTL.set([You, Made], {
    y: 800,
    x: -100,
    rotation: 10
});
mainTL.set(It, {
    y: 800,
    x: 100,
    rotation: 10
});

// CLOUDS

var cloudGroups = ['#cloudGroup01', '#cloudGroup02'];
var clouds = document.querySelectorAll("[id*='cloudGroup'] path");
var firstPlay = true;

function positionIt(guide, target){

    var mainGuide = document.getElementById(guide),
//        allGuides = document.querySelectorAll("[id*='" + guide + "']"),
        thisTarget = document.getElementById(target),

        // get Guide x and y offset
        boundsG = mainGuide.getBBox(),
        x = boundsG.x,
        y = boundsG.y;

    console.log(thisTarget);

    // get guide center
    var cx = mainGuide.getAttribute('cx'),
        cy = mainGuide.getAttribute('cy'),
        newOrigin = cx + ' ' + cy;
    console.log(newOrigin);

    TweenMax.set(thisTarget, {
        transformOrigin: newOrigin,
        x:-x,
        y:-y});
    console.log(thisTarget);

//    TweenMax.set(allGuides, {autoAlpha:0});
    TweenMax.set(mainGuide, {autoAlpha:0});
}

mainTL.add(function(){
    if (firstPlay){
        positionIt('cGuide01', 'cloudGroup01');
        positionIt('cGuide02', 'cloudGroup02');
        firstPlay = false;
    }
}, 0.1);

// STARS

mainTL.set('#replay', {autoAlpha:0});
mainTL.set('#stars-big', {x:1000, y:-1000, ease: Power3.easeOut});
mainTL.set('#stars-small', {x:800, y:-800, ease: Power3.easeOut});


mainTL.set(clouds, {autoAlpha: 0.3});
mainTL.set(cloudGroups, {rotation:90});
mainTL.set('#speedline', {autoAlpha:0.5});

mainTL.set('#morphstrings', {autoAlpha:0});
