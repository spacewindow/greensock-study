
var tapOn = false,
  waterTL = new TimelineLite();

var now = performance.now.bind(performance);
var ease = Power0.easeOut;
var cache = [];
var emitter = $("#emitter");
var last = now();
var frequency = 10;


for (var i = 0; i < 200; i++) {
  createParticle();
}

function createParticle() {

  var particle = $('<div class="particle" />').appendTo(emitter);

  var x = randMinMax(100, -100);
  var color = randMinMax(0, 200);
  var time1 = randMinMax(1, 2);
  var time2 = randMinMax(1, 2);

  var tl = new TimelineLite({ paused: true, onComplete: onComplete })
    .set(particle, { autoAlpha: 0.7, background:"hsl(" + color + ", 90%, 60%)"})
    .to(particle, time1, { x: x, y: 200, ease: ease })
    .to({}, time2, {}); // Just a delay so it will sit at the bottom before restarting

  function onComplete() {
    TweenLite.set(particle, { autoAlpha: 0 });
    tl.pause();
    cache.push(tl);
  }

  cache.push(tl);
}


//https://gist.github.com/timohausmann/4997906
function randMinMax(t, n, a) {
  var r = t + Math.random() * (n - t)
  return a && (r = Math.round(r)), r
}

$('.tap').click(function() {
  $(this).toggleClass('on');
  tapOn = !tapOn;
  if (tapOn) {

    TweenLite.ticker.addEventListener("tick", emit); // the ticker is  a Greensock object http://greensock.com/?class_element=js-tweenlite-target

  } else {

    TweenLite.ticker.removeEventListener("tick", emit);
  }
});

function emit() {

  var current = now();
  var elapsed = current - last;

  if (elapsed > frequency) {

    var tween = cache.shift(); // removes first item in cache array

    tween && tween.play(0);
    last = current;
  }
}
