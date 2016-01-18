// THANKS FOR COMING

// SET FADEBOX TO BE INVISIBLE

TweenMax.set('#fadebox', {autoAlpha:0});

// setup

TweenMax.set(['#thanks', '#for', '#coming'], {autoAlpha:0});

TweenMax.set('#stars-big', {
    x: -200,
    y: -100,
    transformOrigin: 'center center'
});
TweenMax.set('#stars-small', {
    x: -200,
    y: -10,
    transformOrigin: 'center center',
//    autoAlpha: 0.7
});

function changeSC(){
    cloudsOn = false;
}

mainTL
.to('#fadebox', 4, {autoAlpha: 1}, 'stars')
.call(changeSC) // had trouble calling this as first thing in timeline replay... hmmm...
//.from(['#for', '#coming'], 1, {autoAlpha:0})
.from('#stars-big', 6, {x:1000, y:-1000, ease: Power3.easeOut}, 'stars')
.from('#stars-small', 6, {x:800, y:-800, ease: Power3.easeOut}, 'stars')
;

mainTL
.to('#stars-big', 5, {scale: 1.1, ease: Linear.easeNone}, 'stars+=2')
.to('#stars-small', 5, {scale: 1.05 ,ease: Linear.easeNone}, 'stars+=2')
.to(['#stars-small', '#stars-big'], 2.5, {autoAlpha:0, ease:Power3.easeIn}, "-=2.5")
;

mainTL.play(0);


//
//
//// GET ABSOLUTE LOCATION (AND DIMENIONS) OF ELEMENT AS OBJECT
//
//function absoluteLocation(element, offset) {
//    var bounds = element.getBBox();
//    if (typeof offset !== "object") {
//        offset = {x:0, y:0};
//    }
//    return bounds
//}
//
//
//// GET PARTICLES / GET EMITTERS
//
//var particles = selectAll('.particle'),
//    numParticleTypes = particles.length,
//    emitters = selectAll('.emit');
//    numEmitters = emitters.length;
//
//console.log(numEmitters);
//
//// CREATE STAR PARTICLES
//
//var particlesPerEmitter = 10;
//
//var prepStars = function(){
//    // for each emitter
//
//    for (var i=0; i < numEmitters; i++){
//        // get its location
//        var location = absoluteLocation(emitters[i]);
//        var x = location.x;
//        var y = location.y;
//
//        // then duplicate particle types at random for each location
//
//        for (var v=0; v < particlesPerEmitter; v++){
//            var random = randMinMax(0, (numParticleTypes-1), true);
//            var target = particles[random];
//            var duplicate = dupElement(target);
//
//            // (and set a common class name for the duplicated particles)
//
//            var newClass = 'particle' + i;
//            duplicate.setAttribute('class', newClass);
////            console.log(duplicate.className);
//
//            // (and finally, send them to the location)
//
//            TweenMax.set(duplicate, {x: x, y: y});
//        }
//    }
//
//}
//
//prepStars();
//
//TweenMax
//.set('.particle10', {scale: 2, fill: 'red'});
//
//var angle = Math.random() * Math.PI * 2;
//
//TweenMax.staggerTo('.particle10', 0.5, {
//    physics2D:{
//        angle:angle * 180 / Math.PI, //translate radians to degrees
//        velocity:(100 + Math.random() * 300), //initial velocity
//        gravity:2000
//    }
//}, 0.4);
//
//
