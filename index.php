<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/kursor.css" />
    <link rel="stylesheet" href="css/style.css" />
    <style>
        section.custom-banner-animation {
            font-size: 15vw;
            line-height: 12vw;
            font-weight: bolder;
            letter-spacing: 10px;
        }
        section.custom-banner-animation .first,
        section.custom-banner-animation .last {
            color: gold;
        }
        section.custom-banner-animation .middle {
            position: relative;
            z-index: 1;
            mix-blend-mode: difference;
            -webkit-text-stroke: 2px #ffffff;
        }
        section.custom-banner-animation .main-img {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            max-width: 640px;
            bottom: 0;
        }
        section.custom-banner-animation .main-img img {}
    </style>
</head>
<body>
    <section class="custom-banner-animation h-100 text-center pt-10 text-uppercase overflow-hidden">
        <div class="first">Lorem</div>
        <div class="middle">ipsum</div>
        <div class="last">sitamet</div>
        <div class="main-img">
            <img src="images/model.webp" alt="" />
        </div>
    </section>
    <script src="js/minified/jquery.min.js"></script>
    <script src="js/minified/lenis.min.js"></script>
    <script src="js/minified/kursor.min.js"></script>
    <script src="js/custom.js"></script>
</body>
</html>

