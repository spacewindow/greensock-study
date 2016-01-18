function setFromGuide(guide, target){
    var selectGuide = document.getElementById(guide);
    var guideBounds = selectGuide.getBBox();
    var x = -(guideBounds.x);
    var y = -(guideBounds.y);
    TweenMax.set(target, {x:x, y:y});
    TweenMax.set(selectGuide, {autoAlpha: 0});

}

setFromGuide('cloudGuide', '.cloudGroupNew');
