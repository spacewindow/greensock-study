
// setup
//
//TweenMax.set(['#thanks', '#for', '#coming'], {autoAlpha:0});





function changeSC(){
    cloudsOn = false;
}

mainTL
.to(cloudGroups, 2.5, {autoAlpha: 0}, 'stars')
.call(changeSC) // had trouble calling this as first thing in timeline replay... hmmm...
//.from(['#for', '#coming'], 1, {autoAlpha:0})
.to('#stars-big', 6, {x:-400, y:0, ease: Power3.easeOut}, 'stars')
.to('#stars-small', 6, {x:-400, y:0, ease: Power3.easeOut}, 'stars')
;

mainTL
.to('#stars-big', 10, {scale: 1.3, ease: Linear.easeNone}, 'stars+=2')
.to('#stars-small', 10, {scale: 1.2 ,ease: Linear.easeNone}, 'stars+=2')
.to('#replay', 0.7, {autoAlpha:1}, 'stars+=4')
.to(['#stars-small', '#stars-big'], 5, {autoAlpha:0, ease:Power3.easeIn}, 'stars+=5')
;

$('#replay').click(function(){
//    TweenMax.set(['#speedline', '#single-star', clouds], {clearProps: 'all'});

    cloudsOn = true;

    linesTL.remove();
    hereTL.remove();
    glowSignTL.remove();
    glowArrowTL.remove();
    overTL.remove();
    neonScaleTL.remove();
    neonAppearTL.remove();


    linesTL.pause(0);
    hereTL.pause(0);
    glowSignTL.pause(0);
    glowArrowTL.pause(0);
    overTL.pause(0);
    neonScaleTL.pause(0);
    neonAppearTL.pause(0);

    mainTL.remove();
    mainTL.play(0);

});
