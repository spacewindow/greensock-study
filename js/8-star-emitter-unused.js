// GET ABSOLUTE LOCATION (AND DIMENIONS) OF ELEMENT AS OBJECT

function absoluteLocation(element, offset) {
    var bounds = element.getBBox();
    if (typeof offset !== "object") {
        offset = {x:0, y:0};
    }
    return bounds
}


// GET PARTICLES / GET EMITTERS

var particles = selectAll('.particle'),
    numParticleTypes = particles.length,
    emitters = selectAll('.emit');
    numEmitters = emitters.length;

console.log(numEmitters);

// CREATE STAR PARTICLES

var particlesPerEmitter = 10;

var prepStars = function(){
    // for each emitter

    for (var i=0; i < numEmitters; i++){
        // get its location
        var location = absoluteLocation(emitters[i]);
        var x = location.x;
        var y = location.y;

        // then duplicate particle types at random for each location

        for (var v=0; v < particlesPerEmitter; v++){
            var random = randMinMax(0, (numParticleTypes-1), true);
            var target = particles[random];
            var duplicate = dupElement(target);

            // (and set a common class name for the duplicated particles)

            var newClass = 'particle' + i;
            duplicate.setAttribute('class', newClass);
//            console.log(duplicate.className);

            // (and finally, send them to the location)

            TweenMax.set(duplicate, {x: x, y: y});
        }
    }

}

prepStars();

TweenMax
.set('.particle10', {scale: 2, fill: 'red'});

var angle = Math.random() * Math.PI * 2;

TweenMax.staggerTo('.particle10', 0.5, {
    physics2D:{
        angle:angle * 180 / Math.PI, //translate radians to degrees
        velocity:(100 + Math.random() * 300), //initial velocity
        gravity:2000
    }
}, 0.4);