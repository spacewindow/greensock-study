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

var select = function(s) {
        return document.querySelector(s);
      },
    selectAll = function(s) {
        return document.querySelectorAll(s);
      },
    hey = select('#hey'),
    you = select('#you'),
    overhere = select('#overhere'),
    board = select('#board'),
    square = select('#square'),
    youmadeit = select('#youmadeit'),
    word = select('t'),
    underline = select('#underline'),
    lights = select('#lights'),
    thanks = select('#thanks'),
    glint = select('#glint');


    CSSPlugin.useSVGTransformAttr = true;

    var tl = new TimelineMax();

    tl.set([hey, you, overhere, board, underline, thanks, glint, lights], {
        display: 'none'
    })
    .set(youmadeit, {
        fill: 'red',
        x: 25,
        y: 25,
        xPercent: 50,
        yPercent: 50,
        transformOrigin: '50% 50%'
    })
    ;

        </script>

	</body>
</html>
