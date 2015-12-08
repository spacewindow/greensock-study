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
    var className = element.getAttribute('class');
    for (var i=0; i < eNumber; i++){
        var newElement = element.cloneNode(true);
        var newClass = className + (i+1);
            newElement.setAttribute('class', className + ' ' + newClass);
            element.parentNode.insertBefore(newElement, element.nextSibling);
    };
    element.setAttribute('class', className + ' ' + className + '0');
};

var hey = select('.hey'),
you = select('.you'),
overhere = select('.overhere'),
board = select('.board'),
squareleft = select('.squareleft'),
squareright= select('.squareright'),
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
    for (var i=0; i < numClouds+1; i++){
        var thisCloud = select(cloud + i);
        tl
        .set(thisCloud, {x:randMinMax(200, 300), y:randMinMax(0, 100),  opacity: 0})
        .to(thisCloud, 1, {y:randMinMax(-150, -200), x:randMinMax(-200, 100), opacity: randMinMax(0.3, 1), repeat:5, yoyo: true}, 'startDust')
//        .to(thisCloud, 1, {opacity: 1, repeat:1, yoyo: true}, 'startDust');
    }
}

clouds('.dust', 4);

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


        </script>

	</body>
</html>
