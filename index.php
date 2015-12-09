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

var mainTimeline = new TimelineMax({repeat: -1});

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


mainTimeline.set([hey, you, overhere, underline, thanks, glint, lights, youmadeit], {
    display: 'none'
});



    // SET UP


//    var newLoop;


//    board.addEventListener("click", function(){
//
//    });




    mainTimeline.set([squareleft, squareright], {
        transformOrigin: '0% 100%',
        scaleY: 1,
    })
    .set(youmadeit, {
        fill: 'red',
        x: 25,
        y: 25,
        xPercent: 50,
        yPercent: 50,
        transformOrigin: '50% 50%'
    })

    function makeClouds(){



        for(var i = 0; i < dust.length; i++){
            var dustcloud = dust[i];
            var tl = new TimelineMax({repeat:-1});
            tl.set(dustcloud, {
              x:randMinMax(-100, 50),
            })
            .to(dustcloud, 1 , {
              x:randMinMax(10,200),
                opacity: 0
            })
            .to(dustcloud, 1 , {
                opacity: 1,
              x:0
            })

            mainTimeline.add(tl, i/3)
          }
    }

    makeClouds()

;






//    makeClouds();


//    mainTimeline.to(squareleft, 2, {
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
