TweenMax.set(['#heybox', '#squareleft', '#squareright', '#hey'], {
        transformOrigin: 'center bottom',
});
TweenMax.set('#sign', {
        transformOrigin: '70% 150%',
});
TweenMax.set(['#squareleft', '#squareright'], {
    autoAlpha: 1
});


mainTL

// SQUARE FALL

.set('#bg', {fill: '#41395d'})

.to('#squareleft', 2, {
    skewX: -12,
    ease: Power4.easeIn
}, 'squarefall')
.to('#squareright', 2, {
    skewX: 12,
    ease: Power4.easeIn
}, 'squarefall')
.to(['#heybox'], 2, {
    scaleY: 0,
    ease: Power4.easeIn,
}, 'squarefall')
/*.to(['#hey'], 2, {
    scaleX: 0.3,
    ease: Power4.easeIn,
}, 'squarefall')*/
.to(['#sign' ], 2, {
    scaleY: 0,
    scaleX: 0.7,
    ease: Power4.easeIn,
}, 'squarefall')
;

// DUST CLOUDS

// Returns one single Cloud by duplicating the existing Cloud element
//var createCloud = function(element) {
//  var newElement = element.cloneNode(true);
//  element.parentNode.insertBefore(newElement, element.nextSibling);
//  return newElement;
//};

var dustClouds = selectAll('.dust');

// Initial placement of all clouds objects
TweenMax.staggerTo(dustClouds, 0, {
cycle: {
  x: [-100, 50, 0, 50, 100],
  y: [200],
  scale: function() { return randMinMax(0.4, 1); }
},
autoAlpha: 0
}, 0);

mainTL
.add('startDust')
.staggerTo(dustClouds, 4, {
    cycle: {
      x: function() { return randMinMax(-400, 400); },
      y: function() { return randMinMax(-300, -400); },
      scale: function() { return randMinMax(0.4, 1.7); }
    },
    bezier: [{ autoAlpha: 0.7 }, { autoAlpha: 0 }],
    ease: Power1.easeInOut
}, 0, '-=0.2');
