// SETUP LABEL

TweenMax.set('#label1', {transformOrigin: '70% 150%', autoAlpha:0});
TweenMax.set('#label2', {x: -700, autoAlpha:0});

mainTL

.set(['#label1', '#label2'], {autoAlpha:1})
.to('#label2', 0.375, {x: 1400, ease: Linear.easeNone}, 'startAnim')
.to('#labelClip', 0.25, {attr: {x: -650}, ease: Linear.easeNone}, 'startAnim')
;
