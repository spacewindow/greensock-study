// SET POSITIONS


TweenMax.set('#heybox', {x: 800, transformOrigin: '0% 100%'});
TweenMax.set('#hand-closed', {autoAlpha:0});
TweenMax.set('#fullarm', {x:-1000, y: 300, scale: 1.2});

// MAIN TL

mainTL

// HAND REACH

.to('#hand-open', 0.5, {rotation: -20, repeat:1, yoyo: true, transformOrigin: "10% 100%"}, 'startArm')
.to('#fullarm', 0.5, {x: -10}, 'startArm')
.set('#hand-open', {autoAlpha:0})
.set('#hand-closed', {autoAlpha:1})

// PULL HEY

.to('#fullarm', 1, {x:-800, ease: Power3.easeIn}, 'startPull')
.to('#heybox', 1, {x: 0, ease: Power3.easeIn}, 'startPull')
.to('#fullarm', 0.2, {x:-1000, ease: Power3.easeOut}, 'heyRock')
.to('#heybox', 0.3, {rotation: -5, repeat: 1, yoyo: true, ease: Power4.easeOut}, 'heyRock')
.set('#heybox', {transformOrigin: '100% 100%'})
.to('#heybox', 0.1, {rotation: 2, repeat: 1, yoyo: true, ease: Power4.easeOut})
.to({}, 1, {});

