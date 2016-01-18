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
    speedClouds = false;
}

mainTL
.to('#fadebox', 4, {autoAlpha: 1}, 'fadeIn')
.call(changeSC) // had trouble calling this as first thing in timeline replay... hmmm...
//.from(['#for', '#coming'], 1, {autoAlpha:0})
.from('#stars-big', 4, {x:1000, y:-1000}, 'fadeIn')
.from('#stars-small', 4, {x:800, y:-800}, 'fadeIn')
;
