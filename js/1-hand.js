var fingers = selectAll('[id^=finger]'),
    thumb = select('#thumb')
;

//var waveTL = new TimelineMax();

mainTL

.add(function(){mainTL.timeScale(3);})

.set('#hand-wave', {transformOrigin: '48% 80%', rotation: -15})
.set(fingers, {transformOrigin: '50% 90%'})
.set(thumb, {transformOrigin: '65% 100%'})
.set('#fullarm',{transformOrigin: '10% 80%'})
.fromTo('#fullarm', 2, {transformOrigin: '10% 80%', rotation: -30, y: 400, x: -100}, {y:-100, x:-150, rotation: 20})
.add('wave', '-=0.2')
.to('#fullarm', 0.5, { rotation: 30, repeat: 5, yoyo: true, ease: Power1.easeInOut}, 'wave')
.to('#hand-wave', 0.5, { rotation: 25, repeat: 5, yoyo: true, ease: Power1.easeInOut}, 'wave+=0.2')
.to(thumb, 0.5, {rotation: 2, ease: Back.easeInOut, repeat: 5, yoyo: true}, 'wave+=0.9')
.staggerTo(fingers, 0.5, {rotation: 4, ease: Back.easeInOut, repeat: 6, yoyo: true}, 0.01, 'wave+=0.9')
.to('#hand-wave', 3, {rotation: 2, ease: Elastic.easeOut}, '-=1.2')

.add(function(){mainTL.timeScale(0.8);})

.to('#fullarm', 0.3, {rotation: 35, x:200, y:-310}, 'reach')
.to('#hand-wave', 0.3, {x: 50, y:0, rotation: 60, }, 'reach')
.set('#hand-wave', {autoAlpha:0})
.set('#fullarm', {transformOrigin:'75% 5%'})
.to('#fullarm', 0.5, {x: -1100, ease: Power1.easeIn}, 'pull')
.to('#hand-grab', 0.5, {x: -1300, ease: Power1.easeIn}, 'pull')

.set('#heybox', {transformOrigin: '0% 100%'})
.from('#heybox', 0.4, {x:1100, ease: Power1.easeIn}, 'pull')

.to('#heybox', 0.3, {rotation: -5, repeat: 1, yoyo: true, ease: Power4.easeOut}, 'heyRock')
.set('#heybox', {transformOrigin: '100% 100%'})
.to('#heybox', 0.1, {rotation: 2, repeat: 1, yoyo: true, ease: Power4.easeOut})
.to({}, 1, {})

;

mainTL.play(0);
