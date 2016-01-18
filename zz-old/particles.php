<?php include('header.php');?>
    <link rel="stylesheet" type="text/css" href="/css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="/css/banner.css">
    <link rel="stylesheet" type="text/css" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">

    <style>

        #controls{
            position: absolute;
            top: 500px;
            left:300px;
        }

    </style>

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
<script src="js/Physics2DPlugin.min.js"></script>
<script src="js/MorphSVGPlugin.min.js"></script>

<script src="js/particles.js"></script>


	</body>
</html>
