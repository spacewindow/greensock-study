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

// DUPLICATE ELEMENT ( + ADD CLASS)

// Returns one single element by duplicating the existing element

var duplicate = function(element) {
  var newElement = element.cloneNode(true);
  element.parentNode.insertBefore(newElement, element.nextSibling);
  return newElement;
};

var hey = select('.hey'),
    you = select('.you'),
    overhere = select('.overhere'),
    board = select('.board'),
    dust = selectAll('.dust'),
    squareleft = select('.squareleft'),
    squareright = select('.squareright'),
    youmadeit = select('.youmadeit'),
    underline = select('.underline'),
    lights = select('.lights'),
    thanks = select('.thanks'),
    glint = select('.glint');


// SET UP


var mainTL = new TimelineMax({
    paused: true
});

mainTL
.set([hey, you, board, dust, overhere, underline, thanks, glint, lights], {
    autoAlpha: 0
})
.set(youmadeit, {

});

// INTRO

var tl1 = new TimelineMax();

tl1
.set([squareleft, squareright], {
        transformOrigin: '0% 100%',
        scaleY: 1,
    })
    .to(squareleft, 2, {
        skewX: -12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to(squareright, 2, {
        skewX: 12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to([squareright, squareleft], 2, {
        scaleY: 0,
        ease: Power4.easeIn,
        onComplete:tl1Done,
    }, 'squarefall');

function tl1Done(){
    mainTL.add('squareDown', "-=0.3");
}

mainTL.add(tl1);

// DUST CLOUDS

var makeClouds = function (cloud, numClouds) {
    var element = document.querySelector(cloud);
    for (var i = 0; i < numClouds; i++) { duplicate(element); }
    var clouds = selectAll(cloud);

    for (var i = 0; i < clouds.length; i++) {

        var thisCloud = clouds[i];
        var tl = new TimelineMax();

        tl
            .set(thisCloud, {
                x: randMinMax(0, 200),
                y: randMinMax(0, 100),
                scale: randMinMax(0.3, 1),
                opacity: 0
            })
            .to(thisCloud, 4, {
                x: randMinMax(0, 200),
                y: randMinMax(0, 100)
            }, 'startDust')
            .to(thisCloud, 2, {
                opacity: 1,
                repeat: 1,
                yoyo: true
            }, 'startDust')
            .to({}, 2, {});

        mainTL.add(tl, 'squareDown');

    }

    mainTL.add('dustClear');
}

makeClouds('.dust', 4);

// NEXT PART


var tl2 = new TimelineMax();

tl2
    .to(youmadeit, 0.3, {
        autoAlpha: 1,
        fill: 'red'
     });


mainTL.add(tl2, 'dustClear-=0.5');

// PLAY timeline

mainTL.play('dustClear');
