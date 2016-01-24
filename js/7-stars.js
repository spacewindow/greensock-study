
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
.to(cloudGroups, 2.5, {autoAlpha: 0}, 'stars')
.call(changeSC) // had trouble calling this as first thing in timeline replay... hmmm...
//.from(['#for', '#coming'], 1, {autoAlpha:0})
.from('#stars-big', 6, {x:1000, y:-1000, ease: Power3.easeOut}, 'stars')
.from('#stars-small', 6, {x:800, y:-800, ease: Power3.easeOut}, 'stars')
;

mainTL
.to('#stars-big', 10, {scale: 1.3, ease: Linear.easeNone}, 'stars+=2')
.to('#stars-small', 10, {scale: 1.2 ,ease: Linear.easeNone}, 'stars+=2')
.to(['#stars-small', '#stars-big'], 5, {autoAlpha:0, ease:Power3.easeIn}, 'stars+=5')
;
