<?php include('header.php');?>

    <link rel="stylesheet" type="text/css" href="/css/banner.css">

    <style>



</style>

	</head>
	<body style="position:relative">

	<?php include('images/banner-assets copy.svg'); ?>



<!--		<script xlink:href="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"></script>-->

<script src="js/TweenMax.min.js"></script>

<script>

//<![CDATA[

//CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax();

// RANDOM NUMBER MIN MAX - https://gist.github.com/timohausmann/4997906

var randMinMax = function (t, n, a) {
  var r = t + Math.random() * (n - t)
  return a && (r = Math.round(r)), r
}

// SELECT FUNCTIONS

var select = function(s) {
    return document.querySelector(s);
};
var selectAll = function(s) {
    return document.querySelectorAll(s);
};

// DUPLICATE ELEMENT

var duplicate = function(e, eNumber) {
    var element = select(e);
//    console.log(element);
    for (var i=0; i < eNumber; i++){
        var newElement = element.cloneNode(true);
//        var theName= newElement.getAttribute('class') + ' ' + (newElement.getAttribute('class') + (i + 1));
//        newElement.setAttribute('class', theName);
        element.parentNode.insertBefore(newElement, element.nextSibling);
    }
};

var hey = select('.hey'),
you = select('.you'),
overhere = select('.overhere'),
board = select('.board'),
squareleft = select('.squareleft'),
squareright= select('.squareright'),
//dust = selectAll('.dust'),
youmadeit = select('.youmadeit'),
underline = select('.underline'),
lights = select('.lights'),
thanks = select('.thanks'),
glint = select('.glint');


tl.set([hey, you, overhere, board, underline, thanks, glint, lights, youmadeit], {
    display: 'none'
});


var clouds = function(cloud, numClouds){
    duplicate(cloud, numClouds);
    var allClouds = selectAll(cloud);
//    console.log(allClouds);
    for (var i=0; i < numClouds+1; i++){
        var thisCloud = allClouds[i];
        console.log(thisCloud);
//        tl
//        .set(thisCloud, {y:randMinMax(100, 200), opacity: 0})
//        .to(thisCloud, randMinMax(1,2), {y:randMinMax(-150, -200)}, 'startDust')
//        .to(thisCloud, randMinMax(1,2), {opacity: 1, repeat:1, yoyo: true}, 'startDust');
    }
}

//clouds('.dust', 4);

    // SET UP


//    tl.set([squareleft, squareright], {
//        transformOrigin: '0% 100%',
//        scaleY: 1,
//    })
//    .set(dust, {
//        opacity: 0
//    })
//    .set(youmadeit, {
//        fill: 'red',
//        x: 25,
//        y: 25,
//        xPercent: 50,
//        yPercent: 50,
//        transformOrigin: '50% 50%'
//    })
//    .to(squareleft, 2, {
//        skewX: -12,
//        ease: Power4.easeIn
//    }, 'squarefall')
//    .to(squareright, 2, {
//        skewX: 12,
//        ease: Power4.easeIn
//    }, 'squarefall')
//    .to([squareright, squareleft], 2, {
//        scaleY: 0,
//        ease: Power4.easeIn
//    }, 'squarefall')
//    .to(dust, 2, {
//        opacity: 1,
//        yoyo: true,
//        repeat: 1,
//        ease: Power0.easeIn
//    }, 'dustup')
//    .to(dust, 4, {
//        y: -200,
//        ease: Power0.easeIn
//    }, 'dustup')
//    ;



    /*
GSAP JS Demo
http://www.greensock.com/gsap-js/
Animation and Bezier motion:
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js
*/

// DUPLICATE ELEMENT

var duplicate = function(e, eNumber) {
    var element = select(e);
//    console.log(element);
    for (var i=0; i < eNumber; i++){
        var newElement = element.cloneNode(true);
//        var theName= newElement.getAttribute('class') + ' ' + (newElement.getAttribute('class') + (i + 1));
//        newElement.setAttribute('class', theName);
        element.parentNode.insertBefore(newElement, element.nextSibling);
    }
};

var tl2;


function addCloud(element, cloudNumber) {
    var target = select(element);
    for (var i=0; i < cloudNumber; i++){
        var newElement = target.cloneNode(true);
        target.parentNode.insertBefore(newElement, target.nextSibling);
        var random = randMinMax(200,400);
        TweenMax.set(element, {
            y: 0,
            x: random,
            opacity: 0
        })
        TweenMax.to(element, 0.1,{
            opacity: 1,
            y: 1,
            x: 1
        })
        TweenMax.to(element, 5, {
            y: randMinMax(200,400),
            delay: randMinMax(1,5)
        })
        TweenMax.to(element, 5, {
            opacity: 1,
            repeat: 1,
            yoyo: true
        })
    }
}

addCloud('.dust', 5);



function buildTimeline() {
  tl2 = new TimelineMax();
  for (i = 0 ; i< 20; i++){
    tl2.add(addCloud(), i * 0.17);
  }
}

//buildTimeline();




        </script>

	</body>
</html>
