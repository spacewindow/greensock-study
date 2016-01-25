// SETUP LABEL



mainTL

.set(['#label1', '#label2'], {autoAlpha:1})
.to('#label2', 0.375, {x: 1400, ease: Linear.easeNone}, 'startAnim')
.to('#labelClip', 0.25, {attr: {x: -650}, ease: Linear.easeNone}, 'startAnim')
;
