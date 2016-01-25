function positionIt(e,a){var o=document.getElementById(e),t=document.getElementById(a),n=o.getBBox(),s=n.x,r=n.y;console.log(t);var l=o.getAttribute("cx"),i=o.getAttribute("cy"),u=l+" "+i;console.log(u),TweenMax.set(t,{transformOrigin:u,x:-s,y:-r}),console.log(t),TweenMax.set(o,{autoAlpha:0})}function passCloud(){if(cloudsOn){var e=randMinMax(0,numClouds-1,!0),a=clouds[e];TweenMax.fromTo(a,.6,{y:0},{y:3e3,onComplete:passCloud,ease:Linear.easeNone},1)}}function passSpeed(){cloudsOn&&TweenMax.fromTo("#speedline",.4,{x:randMinMax(-400,400),y:0},{y:2e3,onComplete:passSpeed,ease:Linear.easeNone})}function passStar(){cloudsOn&&TweenMax.fromTo("#single-star",1,{x:randMinMax(-400,400),y:400},{y:2500,onComplete:passStar,ease:Linear.easeNone})}function changeSC(){cloudsOn=!1}var randMinMax=function(e,a,o){var t=e+Math.random()*(a-e);return o&&(t=Math.round(t)),t},select=function(e){return document.querySelector(e)},selectAll=function(e){return document.querySelectorAll(e)};$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(e,a){mainTL.progress(a.value/100).pause()}});var updateSlider=function(){$("#slider").slider("value",100*mainTL.progress())},mainTL=new TimelineMax({onUpdate:updateSlider});TweenMax.to(".grain",.3,{transformOrigin:"center center",rotation:90,repeat:-1,ease:SteppedEase.config(1)});var fingers=selectAll("[id^=finger]"),thumb=select("#thumb");mainTL.set(["#heybox","#squareleft","#squareright","#hey"],{transformOrigin:"center bottom"}),mainTL.set("#hand-wave",{autoAlpha:1,x:0,y:0,rotation:0}),mainTL.set("#label1",{transformOrigin:"70% 150%",autoAlpha:0}),mainTL.set("#label2",{x:-700,autoAlpha:0}),mainTL.set("#sign",{transformOrigin:"70% 150%"}),mainTL.set(["#squareleft","#squareright"],{autoAlpha:1}),mainTL.set("#svg-neon",{transformOrigin:"0 0",scale:3}),mainTL.set("#neon",{transformOrigin:"center center",scale:.4}),mainTL.set("#landscape",{transformOrigin:"400 200",smoothOrigin:!0,scale:.4}),mainTL.set("#landscape-clouds",{transformOrigin:"400 200"}),mainTL.set(["#glow-lines","#neon-base","#arrow-base","#over-base","#landscape","#landscape-clouds","#purple-base"],{autoAlpha:0});var bl=selectAll("[id^=balloon]"),string=selectAll("[id^=string]"),You=select("#bl_you"),Made=select("#bl_made"),It=select("#bl_it");mainTL.set([You,Made],{y:800,x:-100,rotation:10}),mainTL.set(It,{y:800,x:100,rotation:10});var cloudGroups=["#cloudGroup01","#cloudGroup02"],clouds=document.querySelectorAll("[id*='cloudGroup'] path"),firstPlay=!0;mainTL.add(function(){firstPlay&&(positionIt("cGuide01","cloudGroup01"),positionIt("cGuide02","cloudGroup02"),firstPlay=!1)},.1),mainTL.set("#replay",{autoAlpha:0}),mainTL.set("#stars-big",{x:1e3,y:-1e3,ease:Power3.easeOut}),mainTL.set("#stars-small",{x:800,y:-800,ease:Power3.easeOut}),mainTL.set(clouds,{autoAlpha:.3}),mainTL.set(cloudGroups,{rotation:90}),mainTL.set("#speedline",{autoAlpha:.5}),mainTL.set("#morphstrings",{autoAlpha:0});var fingers=selectAll("[id^=finger]"),thumb=select("#thumb");mainTL.add(function(){mainTL.timeScale(3)}).set("#hand-wave",{transformOrigin:"48% 80%",rotation:-15}).set(fingers,{transformOrigin:"50% 90%"}).set(thumb,{transformOrigin:"65% 100%"}).set("#fullarm",{transformOrigin:"10% 80%"}).fromTo("#fullarm",2,{transformOrigin:"10% 80%",rotation:-30,y:400,x:-100},{y:-100,x:-150,rotation:20}).add("wave","-=0.2").to("#fullarm",.5,{rotation:30,repeat:5,yoyo:!0,ease:Power1.easeInOut},"wave").to("#hand-wave",.5,{rotation:25,repeat:5,yoyo:!0,ease:Power1.easeInOut},"wave+=0.2").to(thumb,.5,{rotation:2,ease:Back.easeInOut,repeat:5,yoyo:!0},"wave+=0.9").staggerTo(fingers,.5,{rotation:4,ease:Back.easeInOut,repeat:6,yoyo:!0},.01,"wave+=0.9").to("#hand-wave",3,{rotation:2,ease:Elastic.easeOut},"-=1.2").add(function(){mainTL.timeScale(.8)}).to("#fullarm",.3,{rotation:35,x:200,y:-310},"reach").to("#hand-wave",.3,{x:50,y:0,rotation:60},"reach").set("#hand-wave",{autoAlpha:0}).set("#fullarm",{transformOrigin:"75% 5%"}).to("#fullarm",.5,{x:-1100,ease:Power1.easeIn},"pull").to("#hand-grab",.5,{x:-1300,ease:Power1.easeIn},"pull").set("#heybox",{transformOrigin:"0% 100%"}).from("#heybox",.4,{x:1100,ease:Power1.easeIn},"pull").to("#heybox",.3,{rotation:-5,repeat:1,yoyo:!0,ease:Power4.easeOut},"heyRock").set("#heybox",{transformOrigin:"100% 100%"}).to("#heybox",.1,{rotation:2,repeat:1,yoyo:!0,ease:Power4.easeOut}).to({},1,{}),mainTL.pause(0),mainTL.set(["#label1","#label2"],{autoAlpha:1}).to("#label2",.375,{x:1400,ease:Linear.easeNone},"startAnim").to("#labelClip",.25,{attr:{x:-650},ease:Linear.easeNone},"startAnim"),mainTL.set("#bg",{fill:"#41395d"}).to("#squareleft",2,{skewX:-12,ease:Power4.easeIn},"squarefall").to("#squareright",2,{skewX:12,ease:Power4.easeIn},"squarefall").to(["#heybox"],2,{scaleY:0,ease:Power4.easeIn},"squarefall").to(["#sign"],2,{scaleY:0,scaleX:.7,ease:Power4.easeIn},"squarefall");var dustClouds=selectAll(".dust");TweenMax.staggerTo(dustClouds,0,{cycle:{x:[-100,50,0,50,100],y:[200],scale:function(){return randMinMax(.4,1)}},autoAlpha:0},0),mainTL.add("startDust").staggerTo(dustClouds,3,{cycle:{x:function(){return randMinMax(-400,400)},y:function(){return randMinMax(-300,-400)},scale:function(){return randMinMax(.4,1.7)}},bezier:[{autoAlpha:.7},{autoAlpha:0}],ease:Power1.easeInOut},0,"-=0.4");var cameraShake=new TimelineMax({paused:!0,repeat:-1,yoyo:!0});cameraShake.to(["#neon","#landscape"],.5,{x:10,y:5}).to(["#neon","#landscape"],.5,{x:-6,y:-10}).to(["#neon","#landscape"],.5,{x:4,y:-2}).to(["#neon","#landscape"],.5,{x:-8,y:4});var glowLines=selectAll("#glow-lines line"),here=select("#here"),o=select("#o"),ver=select("#ver"),glowArrow=select("#glow-arrow"),glowSign=select("#glow-base"),signBase=select("#neon-base"),linesTL=new TimelineMax({repeat:-1}),hereTL=new TimelineMax({repeat:-1}),glowSignTL=new TimelineMax,glowArrowTL=new TimelineMax({repeat:-1,delay:.8}),overTL=new TimelineMax({repeat:-1}),neonScaleTL=new TimelineMax;linesTL.staggerTo(glowLines,.1,{autoAlpha:0},.1).staggerTo(glowLines,.1,{autoAlpha:1},.1,"-=1.1"),hereTL.set(here,{autoAlpha:0}).to(here,.1,{delay:.2,autoAlpha:1}).to(here,.1,{delay:.5,autoAlpha:0}).to(here,.1,{delay:.1,autoAlpha:1}).set(here,{delay:1.5,autoAlpha:0}),glowSignTL.set(glowSign,{autoAlpha:0}).to(glowSign,.1,{delay:.2,autoAlpha:1}).to(glowSign,.1,{delay:1,autoAlpha:0}).to(glowSign,.1,{delay:.5,autoAlpha:1}),glowArrowTL.set(glowArrow,{autoAlpha:0}).to(glowArrow,.1,{autoAlpha:1}).to(glowArrow,.1,{autoAlpha:0}).to(glowArrow,.1,{autoAlpha:1}).to(glowArrow,.1,{delay:1.5,autoAlpha:0}).to({},1,{}),overTL.set([o,ver],{autoAlpha:0}).to(o,.1,{delay:.2,autoAlpha:1}).to(ver,.1,{autoAlpha:1}).to(o,.1,{delay:2,autoAlpha:0}).to(ver,.1,{autoAlpha:0}),linesTL.pause(0),hereTL.pause(0),glowSignTL.pause(0),glowArrowTL.pause(0),overTL.pause(0),neonScaleTL.pause(0),neonScaleTL.to("#neon",4,{scale:.6});var neonAppearTL=new TimelineMax({paused:!0});neonAppearTL.add(function(){neonScaleTL.play()}).add(function(){overTL.play()}).add(function(){hereTL.play()},"+=1").add(function(){glowSignTL.play()},"+=2").add(function(){glowArrowTL.play()},"+=0.5").add(function(){linesTL.play()}).to("#glow-lines",2,{autoAlpha:1},"+=0.3").to("#arrow-base",.2,{autoAlpha:1},"+=1").to(["#neon-base","#over-base"],.2,{autoAlpha:1},"+=0.5").staggerTo(["#land","#mountains"],.8,{autoAlpha:1},.2);var cloudsBG=new TimelineMax({paused:!0});cloudsBG.to("#landscape-clouds",10,{xPercent:-15,ease:Power2.easeIn}),mainTL.set("#purple-base",{autoAlpha:1},"startDust").add(function(){neonAppearTL.play()},"startDust+=0.5").add("zoom","+=4").to("#landscape",.3,{scale:1.8,yPercent:5,ease:Back.easeInOut},"zoom").to("#landscape",.5,{autoAlpha:1},"zoom").to("#landscape-clouds",.4,{autoAlpha:.3},"zoom").add(function(){cloudsBG.play()},"zoom").add(function(){cameraShake.play()},"zoom").to("#neon",.5,{scale:1.3,rotation:-4},"zoom").to("#landscape",.5,{scale:1.3,rotation:-4,yPercent:20,xPercent:-5},"zoom").to("#landscape-clouds",.5,{scale:.8,rotation:-4,xPercent:-2},"zoom").to("#neon",.5,{scale:.9,rotation:0,yPercent:5},"zoom+=1").to("#landscape",.5,{scale:1,rotation:0,yPercent:-2},"zoom+=1").to("#landscape-clouds",.5,{scale:1,rotation:0},"zoom+=1"),mainTL.add("falloff","+=1").add(function(){cameraShake.pause()},"falloff").to("#neon",2,{x:-800,y:50,rotation:-2,ease:Power4.easeIn},"falloff").to("#landscape",3,{xPercent:-100,yPercent:90,ease:Power2.easeIn},"falloff").to("#landscape-clouds",3,{xPercent:-100,ease:Power4.easeIn},"falloff+=0.1");var numClouds=clouds.length,cloudsOn=!0;mainTL.add(function(){passCloud(),passSpeed(),passStar()},"falloff+=2").to(cloudGroups,3,{rotation:45},"falloff+=3").add("startBalloons");var aString=new TimelineMax({repeat:-1}),aKnot=new TimelineMax({repeat:-1}),blCreate=function(){for(var e=0;e<bl.length;e++){var a=bl[e],o=a.parentNode.id;this[o]=new TimelineMax({repeat:-1,paused:!0});var t=new TimelineMax({repeat:-1}),n=new TimelineMax,s=new TimelineMax,r=a.querySelector("[id^=string]"),l=a.querySelector("[id^=wordleft]"),i=a.querySelector("[id^=wordright]"),u=a.querySelector("[id^=knot]");n.set(i,{autoAlpha:0}).to(l,2.5,{morphSVG:{shape:i,map:"complexity"},repeat:-1,yoyo:!0,ease:Power1.easeInOut}),t.to(r,1.5,{morphSVG:"#morphstring2",ease:Power1.easeIn},"stringStart").to(r,.7,{morphSVG:"#morphstring3",ease:Power1.easeOut}).to(r,1.5,{morphSVG:"#morphstring4",ease:Power1.easeIn}).to(r,.7,{morphSVG:"#morphstring1",ease:Power1.easeOut});var c=new TimelineMax;c.set(r,{transformOrigin:"0% 0%",rotation:-10}).to(r,3,{yoyo:!0,repeat:-1,rotation:10});var d=new TimelineMax;d.set(bl,{transformOrigin:"40% 20%",rotation:-10}).to(bl,2.2,{yoyo:!0,repeat:-1,rotation:15,ease:Power2.easeInOut}),s.set(u,{transformOrigin:"40% 20%",rotation:-10}).to(u,2.2,{rotation:10,scaleY:1.2,yoyo:!0,repeat:-1,ease:Power2.easeInOut}),this[o].add(n,0).add(s,.5).add(t,1.5)}};blCreate(),TweenMax.staggerTo(bl,1.2,{scale:1.06,repeat:-1,yoyo:!0,ease:Power1.easeInOut},1),TweenMax.staggerTo(bl,1,{cycle:{x:[10,20,50],y:[-10,20,50]},repeat:-1,yoyo:!0,ease:Power1.easeInOut},1);var aYou=new TimelineMax,aMade=new TimelineMax,aIt=new TimelineMax,YouString=You.querySelector("[id^=string]");aYou.call(function(){bl_you.play(0)}).to(You,2,{x:0,y:0,scale:2,ease:Back.easeInOut}).to(You,2,{x:-140,y:200,scale:1,ease:Back.easeInOut}).to(You,2,{y:0,ease:Back.easeInOut}).to({},5,{}).add(function(){bl_you.pause()}).to(YouString,2,{morphSVG:"#morphstring3",ease:Power1.easeIn},"out").to(You,2,{y:-600,x:900,rotation:50,scaleX:.3,scaleY:.7,ease:Back.easeInOut},"out");var MadeString=Made.querySelector("[id^=string]");bl_you.timeScale(1.5),bl_made.timeScale(1.5),bl_it.timeScale(1.5),aMade.call(function(){bl_made.play(0)}).to(Made,2,{x:0,y:0,scale:2,ease:Back.easeInOut}).to(Made,2,{x:-140,y:200,scale:1,ease:Back.easeInOut}).to(Made,2,{delay:1,scale:1.6,y:-100,x:30}).to({},3,{}).add(function(){bl_made.pause()}).to(MadeString,2,{morphSVG:"#morphstring1",ease:Power1.easeIn},"out").to(Made,2,{y:-600,x:900,rotation:50,scaleX:.3,scaleY:.7,ease:Back.easeInOut},"out");var ItString=It.querySelector("[id^=string]");aIt.call(function(){bl_it.play(0)}).to(It,2,{x:200,y:0,scale:1.8,ease:Back.easeInOut}).to(It,2,{x:160,y:300,scale:1,ease:Back.easeInOut}).to({},4,{}).add(function(){bl_it.pause()}).to(ItString,1.5,{morphSVG:"#morphstring1",ease:Power3.easeIn},"out").to(It,2.5,{y:-600,x:900,rotation:50,scaleX:.3,scaleY:.7,ease:Back.easeInOut},"out+=0.3").call(function(){bl_you.kill(),bl_made.kill(),bl_it.kill()}),mainTL.add(aYou,"startBalloons").add(aMade,"startBalloons+=1.5").add(aIt,"startBalloons+=4").add("stars"),mainTL.to(cloudGroups,2.5,{autoAlpha:0},"stars").call(changeSC).to("#stars-big",6,{x:-400,y:0,ease:Power3.easeOut},"stars").to("#stars-small",6,{x:-400,y:0,ease:Power3.easeOut},"stars"),mainTL.to("#stars-big",10,{scale:1.3,ease:Linear.easeNone},"stars+=2").to("#stars-small",10,{scale:1.2,ease:Linear.easeNone},"stars+=2").to("#replay",.7,{autoAlpha:1},"stars+=4").to(["#stars-small","#stars-big"],5,{autoAlpha:0,ease:Power3.easeIn},"stars+=5"),$("#replay").click(function(){cloudsOn=!0,linesTL.remove(),hereTL.remove(),glowSignTL.remove(),glowArrowTL.remove(),overTL.remove(),neonScaleTL.remove(),neonAppearTL.remove(),linesTL.pause(0),hereTL.pause(0),glowSignTL.pause(0),glowArrowTL.pause(0),overTL.pause(0),neonScaleTL.pause(0),neonAppearTL.pause(0),mainTL.remove(),mainTL.play(0)}),mainTL.play(0);
//# sourceMappingURL=gsap-banner.js.map