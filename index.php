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

var mainTimeline = new TimelineMax();

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

var duplicate = function(e, eNumber) {
    var element = select(e);
//    var className = element.getAttribute('class');
    for (var i=0; i < eNumber; i++){
        var newElement = element.cloneNode(true);
//        var newClass = className + (i+1);
//            newElement.setAttribute('class', className + ' ' + newClass);
            element.parentNode.insertBefore(newElement, element.nextSibling);
    };
//    element.setAttribute('class', className + ' ' + className + '0');
};

var hey = select('.hey'),
you = select('.you'),
overhere = select('.overhere'),
board = select('.board'),
dust = selectAll('.dust'),
squareleft = select('.squareleft'),
squareright= select('.squareright'),
youmadeit = select('.youmadeit'),
underline = select('.underline'),
lights = select('.lights'),
thanks = select('.thanks'),
glint = select('.glint');


mainTimeline.set([hey, you, board, overhere, underline, thanks, glint, lights, youmadeit], {
    display: 'none'
});



    // SET UP


//    var newLoop;


//    board.addEventListener("click", function(){
//
//    });

    var numClouds = 5;
    var cloud = select('.dust');

    function timelineDone(){
        mainTimeline.add('squareDown', "-=0.3");
    }

    mainTimeline.set([squareleft, squareright], {
        transformOrigin: '0% 100%',
        scaleY: 1,
    })
    .to(squareleft, 2, {
        skewX: -12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to(squareright, 2, {
        skewX: 12,
        ease: Power4.easeIn
    }, 'squarefall')
    .to([squareright, squareleft], 2, {
        scaleY: 0,
        ease: Power4.easeIn,
        onComplete:timelineDone,
    }, 'squarefall')


    for(var i = 0; i < numClouds; i++){
        var newCloud = cloud.cloneNode(true);
        cloud.parentNode.insertBefore(newCloud, cloud.nextSibling);

        var tl = new TimelineMax();

        tl.set(newCloud, {
            x: randMinMax(-100, 100),
            y: 200,
            opacity: 0,
            scale: randMinMax(0.3, 1)
        })
        .to(newCloud, randMinMax(1,2), {
            scale: 1.2,
            y: -100
        })
        .to(newCloud, 1, {
            scale: randMinMax(0.3, 1),
            opacity: 1,
            repeat: 1,
            yoyo: true
        }, '-=1.5')

        mainTimeline.add(tl, 'squareDown')
    }
    select('.elements').removeChild(cloud);


        </script>

	</body>
</html>
