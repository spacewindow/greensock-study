<?php include('header.php');?>
    <link rel="stylesheet" type="text/css" href="/css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="/css/banner.css">
    <link rel="stylesheet" type="text/css" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">

	</head>
	<body style="position:relative">

    <!--SVG-->

    <?php include('images/particles.svg'); ?>

    <!--CONTROLS-->

    <div id="controls">
      <div id="slider"></div>
    </div>

<script src="js/jquery.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/MorphSVGPlugin.min.js"></script>

<script src="js/particles.js"></script>

<script>

    $("#slider").slider({
      range: false,
      min: 0,
      max: 100,
      step:.1,
      slide: function ( event, ui ) {
        mainTL.pause();
        //adjust the timeline’s progress() based on slider value
        mainTL.progress( ui.value/100 );
        }
    });

    function updateSlider() {
      $("#slider").slider("value", tl.progress() *100);
    }

</script>

	</body>
</html>
