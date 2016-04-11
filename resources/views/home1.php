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
            background-image: url("drashoAll/app/images/ea50a.jpg");
            background-size: 100%;
        }
        .shopItem{
            display: inline-flex;
        }
        .shopItemHeight{
            width: 100%;
        }

        .shopItem img{
            width: 50px;
            height: 50px;
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




<body data-spy="scroll" data-target=".navbar-collapse" ng-controller="ctrl_Navigation">
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/">upgrade your browser</a>
    to improve your experience.
</p>
<![endif]-->

<header id="main_menu" class="header navbar">
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#/home">Home</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
        
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
      
      	
        <li ng-hide='isLoggedUser'><a href="#/login">Sign in/ Sign up</a></li>
        <li ng-show='isLoggedUser'><a href="#/myAccount">{{loggedUserName}}</a></li>
        <li ng-show='isLoggedUser'><a href="#/login">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
</header>





    <ng-view>


    </ng-view>










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


<script src="drashoAll/app/app-js/controllers/ctrl_Navigation.js" ></script>
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