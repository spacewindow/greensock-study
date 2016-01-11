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

var hey = select('.hey'),
    you = select('.you'),
    overhere = select('.overhere'),
    board = select('.board'),
    dust = selectAll('.dust'),
    square = select('.square'),
    squarefull = select('.squarefull'),
    squareleft = select('.squareleft'),
    squareright = select('.squareright'),
    youmadeit = select('.youmadeit'),
    ymd_words = selectAll('.word'),
    underline = select('.underline'),
    lights = select('.lights'),
    thanks = select('.thanks'),
    glint = select('.glint'),
    sign = select('.sign');


// SET UP

var mainTL = new TimelineMax({
    paused: true,
//    onUpdate: updateSlider
});



// SETUP

mainTL
.to(sign, 10, {attr: {x: 400}})
.set([you, board, dust, overhere, underline, thanks, glint, lights, youmadeit], {
    autoAlpha: 0
})
;

// SQUARE UP

var tlsquareup = new TimelineMax();

tlsquareup
.set([square, squareleft, squareright], {
        transformOrigin: 'center bottom',
    })
    .set(square, {
        scaleY: 0
    })
    .to(squarefull, 0.1, {
        fill: 'green'
    })
    .to(square, 2,{
        scaleY: 1,
        ease: Power4.easeOut
    }, 'squareUp')
    .to(squarefull, 2, {
        fill: 'lime'
    }, 'squareUp')
;

mainTL.add(tlsquareup);
mainTL.add('squareDown')

// SQUARE FALL

var tlsquare = new TimelineMax();

tlsquare
.set(squarefull, {
        autoAlpha: 0,
    })
.set([squareleft, squareright], {
    autoAlpha: 1,
    fill: 'lime'
})
    .to(squareleft, 2, {
        skewX: -12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to(squareright, 2, {
        skewX: 12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to([square], 2, {
        scaleY: 0,
        ease: Power4.easeIn,
    }, 'squarefall')
;


mainTL.add(tlsquare, 'squareDown');

// DUST CLOUDS

// RANDOM NUMBER MIN MAX - https://gist.github.com/timohausmann/4997906
var randMinMax = function(t, n, a) {
  var r = t + Math.random() * (n - t)
  return a && (r = Math.round(r)), r
}

// Returns one single Cloud by duplicating the existing Cloud element
var createCloud = function(element) {
  var newElement = element.cloneNode(true);
  element.parentNode.insertBefore(newElement, element.nextSibling);
  return newElement;
};

// Initial placement of all clouds objects
var placeClouds = function(clouds) {
  TweenMax.staggerTo(clouds, 0, {
    cycle: {
      x: [-100, 50, 0, 50, 100],
      y: [200],
      scale: function() { return randMinMax(0.4, 1); }
    },
    opacity: 0
  }, 0);
};

// Addition of all cloud elements into main TimelineMax instance
var addIntoMainTimeline = function(clouds) {
  mainTL.staggerTo(clouds, 4, {
    cycle: {
      x: function() { return randMinMax(-200, 200); },
      y: function() { return randMinMax(-150, -200); },
      scale: function() { return randMinMax(0.4, 2); }
    },
    bezier: [{ opacity: 0.8 }, { opacity: 0 }],
    ease: Power1.easeInOut
  }, 0, '-=0.8');
};

var clouds = function(cloud, numClouds) {
  var clouds;
  var element = document.querySelector(cloud);
  for (var i = 0; i < numClouds; i++) { createCloud(element); }
  clouds = document.querySelectorAll(cloud);
  placeClouds(clouds);
  addIntoMainTimeline(clouds);
};

clouds('.dust', 4);

// NEXT PART

var tl2 = new TimelineMax();

tl2

    // center text

    .set(youmadeit, {
        fill: 'red',
        x: 25,
        y: 25,
        xPercent: 50,
        yPercent: 50,
        opacity: 0,
        transformOrigin: '50% 50%'
    })
    .set(ymd_words, {
        transformOrigin: '50% 50%'
    })

    // animate text

    .to(youmadeit, 0.3, {
        autoAlpha: 1,
        opacity: 1,
        fill: 'red'
     })
    .staggerTo(ymd_words, 0.3, {
        bezier: [{scale: 2}, {scale: 1.1}]
    }, 0.2);


mainTL.add(tl2, 'dustClear-=0.5');

// PLAY timeline

mainTL.play(0);
//mainTL.addCallback(loopIt, 'squareflex+=3');
//function loopIt(){
//    mainTL.play('squareflex');
//}

//mainTL.pause(3);

//function updateSlider() {
//  $("#slider").slider("value", mainTL.progress() *100);
//}
//
//
//$("#slider").slider({
//  range: false,
//  min: 0,
//  max: 100,
//  step:.1,
//  slide: function ( event, ui ) {
//    mainTL.pause();
//    //adjust the timeline’s progress() based on slider value
//    mainTL.progress( ui.value/100 );
//    }
//});



