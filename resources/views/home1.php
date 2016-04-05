<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game</title>


    <script src="drashoAll/app/node_modules/jquery/dist/jquery.js"></script>
    <script src="drashoAll/app/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="drashoAll/app/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="drashoAll/app/node_modules/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="drashoAll/app/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css">






    <link rel="stylesheet" href="drashoAll/app/styles/css/fonticons.css">
    <link rel="stylesheet" href="drashoAll/app/styles/fonts/stylesheet.css">
    <link rel="stylesheet" href="drashoAll/app/styles/css/font-awesome.min.css">

    <link rel="stylesheet" href="drashoAll/app/styles/css/normalize.css">

    <link rel="stylesheet" href="drashoAll/app/styles/css/plugins.css" />
    <link rel="stylesheet" href="drashoAll/app/styles/css/style.css">
    <link rel="stylesheet" href="drashoAll/app/styles/css/responsive.css" />

    <link rel="stylesheet" href="drashoAll/app/styles/css/forthefuckinimage.css">
    <link rel="stylesheet" href="drashoAll/app/styles/css/form-style.css">


    <style>

        /*body{*/
            /*background-color: greenyellow;*/
        /*}*/
        html, body {
            height: 100%;
            margin: 0px;
        }

        #canvasBg{
            position: absolute;
        }
        #gameCanvas{
            z-index: 5;
        }
        canvas{
            border: 1px solid black;
            position: absolute;
            display: block;
        }

        .gameWrapper{
            height: 85%;
            background-image: url("drashoAll/app/images/bald_eagle_flying-wallpaper-1366x768.jpg");
            background-size: 100%;
        }
        .loginWrapper{
            height: 100%;
            background-image: url("drashoAll/app/images/eagle_mountain_sky_snow_hills_birds_predators_52858_1366x768.jpg");
            background-size: 100%;
        }
        .statisticWrapper{
            height: 100%;
            background-image: url("drashoAll/app/images/bald_eagle_flying-wallpaper-1366x768.jpg");
            background-size: 100%;
        }
        .tableStyle{
            background-color: rgba(104,104,104, 0.7);
            color: white;

        }
        .tableStyle td{
            padding-left: 10px;
        }

        .tableStyle a{
            color: white;
        }

        .pagination > li > a, .pagination > li > span{
            background-color: rgba(104,104,104, 0.6);
            color: white;
        }


        .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
            z-index: 3;
            color: #fff;
            cursor: default;
            background-color: rgba(104,104,104, 0.8);
            border-color: #1ab188;
        }


        .pagination > .disabled > span, .pagination > .disabled > .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
            color: white;
            cursor: not-allowed;
            background-color: rgba(104,104,104, 1);
            /*background-color: rgba(104,104,104, 0.8);*/
            border-color: #ddd;
        }

        .shopWrapper{
            height: 100%;
            background-image: url("drashoAll/app/images/bald_eagle_flying-wallpaper-1366x768.jpg");
            background-size: 100%;
        }
        .shopItem{
            display: inline-flex;
        }
        .shopItemHeight{
            width: 100%;
        }

        .shopItem img{
            width: 200px;
            height: 200px;
        }
        .shopItem h4{
            font-size: 21px;
            margin-bottom: 7px;
        }

        .game{
            text-align: center;
        }



    </style>

</head>
<body ng-app="app">




<body data-spy="scroll" data-target=".navbar-collapse">
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/">upgrade your browser</a>
    to improve your experience.
</p>
<![endif]-->

<header id="main_menu" class="header navbar">
    <div class="main_menu_bg">
        <div class="container">
            <div class="row">
                <div class="nave_menu">
                    <nav class="navbar navbar-default" id="navmenu">
                        <div class="container-fluid">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#/home">
                                    <img src="drashoAll/app/images/ea1.png">
                                </a>
                            </div>

                            <!-- Collect the nav links, forms, and other content for toggling -->



                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="active"><a href="#/home">Home</a></li>
                                    <li><a href="#/register">Sign in/Sign up</a></li>

                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>

        </div>

    </div>
</header>





    <ng-view>


    </ng-view>





<footer id="footer" class="footer navbar-fixed-bottom" style="display: none">
    <div class="container">
        <div class="main_footer">
            <div class="row">

                <div class="col-sm-6 col-xs-12">
                    <div class="copyright_text">
                        <p class=" wow fadeInRight"
                           data-wow-duration="1s">Made with <i class="fa fa-heart"></i> by <a href="http://bootstrapthemes.co">Drashoo and Miroo</a>2016. All Rights Reserved</p>
                    </div>
                </div>

                <div class="col-sm-6 col-xs-12">
                    <div class="footer_socail">
                        <a href=""><i class="fa fa-facebook"></i></a>
                        <a href=""><i class="fa fa-twitter"></i></a>
                        <a href=""><i class="fa fa-google-plus"></i></a>
                        <a href=""><i class="fa fa-rss"></i></a>
                        <a href=""><i class="fa fa-instagram"></i></a>
                        <a href=""><i class="fa fa-dribbble"></i></a>
                        <a href=""><i class="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>





</body>

<script src="drashoAll/app/node_modules/angular/angular.js"></script>
<script src="drashoAll/app/node_modules/angular-route/angular-route.js"></script>
<script src="drashoAll/app/node_modules/angular-cookies/angular-cookies.js"></script>
<script src="drashoAll/app/node_modules/angular-utils-pagination/dirPagination.js"></script>



<script src="drashoAll/app/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script>


<script src="drashoAll/app/app-js/app.js"></script>

<script src="drashoAll/app/app-js/services/identity_service.js"></script>
<script src="drashoAll/app/app-js/services/auth_service.js"></script>
<script src="drashoAll/app/app-js/services/statistic_service.js"></script>
<script src="drashoAll/app/app-js/services/myAccount_service.js"></script>
<script src="drashoAll/app/app-js/services/shop_service.js"></script>
<script src="drashoAll/app/app-js/services/userAcc_service.js"></script>
<script src="drashoAll/app/app-js/directives/game.js"></script>

<script src="drashoAll/app/app-js/controllers/ctrl_Home.js" ></script>
<script src="drashoAll/app/app-js/controllers/ctrl_Game.js" ></script>
<script src="drashoAll/app/app-js/controllers/ctrl_Login.js"></script>
<script src="drashoAll/app/app-js/controllers/ctrl_MyAcc.js"></script>
<script src="drashoAll/app/app-js/controllers/ctrl_Register.js"></script>
<script src="drashoAll/app/app-js/controllers/ctrl_Shop.js" ></script>
<script src="drashoAll/app/app-js/controllers/ctrl_Statistic.js"></script>
<script src="drashoAll/app/app-js/controllers/ctrl_UserDetails.js"></script>
<script src="drashoAll/app/app-js/controllers/ctrl_MainPage.js"></script>





<!-- game scripts -->

<script src="drashoAll/app/app-js/game/framework.js"></script>
<script src="drashoAll/app/app-js/game/scripts/Background.js"></script>
<script src="drashoAll/app/app-js/game/scripts/FrontStage.js"></script>
<script src="drashoAll/app/app-js/game/scripts/Player.js"></script>
<script src="drashoAll/app/app-js/game/scripts/Enemy.js"></script>
<script src="drashoAll/app/app-js/game/scripts/Bonus.js"></script>
<script src="drashoAll/app/app-js/game/scripts/main.js"></script>

</html>