var xmlns = "http://www.w3.org/2000/svg",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  landSpeeder = select('#landSpeeder'),
  shadow = select('#shadow'),
  passing = select('#passing'),
  passingGround = select('#passingGround'),
  //passingArr = ['#passing'],
  landSpeederGroup = select('#landSpeederGroup')


//center the container cos it's pretty an' that
TweenMax.set('svg', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility:'visible'
})


var upDownTl = new TimelineMax({repeat:-1, yoyo:true});
upDownTl.to(landSpeeder, 3, {
  y:6,
  ease:Sine.easeInOut
})
.to(shadow, 3, {
  attr:{
    x1:'-=6',
    x2:'+=6'
  },
  ease:Sine.easeInOut

},'-=3')

var shakeTl = new TimelineMax({repeat:-1, yoyo:true});
shakeTl.to(landSpeeder, 0.01, {
  x:2,
  ease:Linear.easeNone
})
.to(landSpeederGroup, 0.01, {
  y:1.2,
  ease:Linear.easeNone
},'-=0.01')

var backForthTl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:6});
backForthTl.to(landSpeeder, 8, {
  x:-30,
  ease:Sine.easeInOut
})
.to(shadow, 8, {
  x:-30,
  ease:Sine.easeInOut
},'-=8')

function passThing(){

  TweenMax.set(passing, {
    y:randomBetween(100, 290),
    attr:{
      x2:randomBetween(30, 350)
    },
    alpha:randomBetween(1,8)/10
  })
 TweenMax.set(passingGround, {
    y:randomBetween(310, 610),
    attr:{
      x2:randomBetween(30, 200)
    }
  })

  TweenMax.fromTo(passing, randomBetween(1, 4)/10, {
    x:600
  },{
    x:-600,
    //delay:randomBetween(0,1),
  onComplete:passThing,
    ease:Linear.easeNone
  }
)
   TweenMax.fromTo(passingGround, randomBetween(1, 4)/10, {
    x:600
  },{
    x:-600,
    //delay:randomBetween(0,1),
  onComplete:passThing,
    ease:Linear.easeNone
  }
)

}
passThing();

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
