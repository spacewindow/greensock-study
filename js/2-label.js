// SETUP LABEL

TweenMax.set('#label', {transformOrigin: '70% 150%', autoAlpha:0});
TweenMax.set('#label2', {x: -700});

mainTL

.set('#label', {autoAlpha:1})
.to('#label2', 0.75, {x: 1400, ease: Linear.easeNone}, 'startAnim')
.to('#clipping', 0.5, {attr: {x: -650}, ease: Linear.easeNone}, 'startAnim')
;
