<!DOCTYPE html>
<html lang="en" ng-app="myApp">
 <head>
    <!-- <base href="recetas"> -->
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>Vive sabores del mundo</title>
          
          <!-- Bootstrap -->
          <link href="css/bootstrap.min.css" rel="stylesheet">
          <link href="css/style.css" rel="stylesheet">
          <link href="css/custom.css" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
          <link rel="stylesheet" href="slick/slick-theme.css">
        <script src='https://www.google.com/recaptcha/api.js'></script>     

</head>

  <body ng-cloak="" ng-controller='HomeCtrl'> 
    <nav class="nav navbar-inverse menu">
      <div class="container">
        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand logo"><img src="img/logo.png" alt="logo"></a>
        </div>
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#busqueda">Galería</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#login"><div class="inicio-sesion">Inicia sesión / Registro</div></a></li>
                <!-- signup y dashboard -->
            </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div ng-view></div>
      <!-- <div data-ng-view="" id="ng-view" class="slide-animation"></div> -->
    </div>
    <!-- footer -->
      <footer>
        <div class="logo-jumbo">
          <a href="http://www.tiendasjumbo.co/" target="_blank"></a>
        </div>
          <ul>
              <li><a href="https://www.facebook.com/TiendasJumboColombia" target="_blank"><img src="img/ico-facebook.svg"></a></li>
              <li><a href="https://www.instagram.com/tiendasjumbocolombia/" target="_blank"><img src="img/ico-instagram.svg"></a></li>
              <li></li>
              <li><a href="https://twitter.com/TiendasJumboCo" target="_blank"><img src="img/ico-twitter.svg"></a></li>
              <li><a href="https://www.youtube.com/user/TiendasJumboColombia" target="_blank"><img src="img/ico-youtube.svg"></a></li>
          </ul>
        <p><a href="https://catalogostiendasjumbo.co/" target="_blank">Catálogos</a> • <a href="https://catalogostiendasjumbo.co/" target="_blank">Novedades</a> • <a href="#terminos" data-toggle="modal" data-target="terminos" class="termonis">Términos y condiciones</a> • <a href="http://www.tiendasjumbo.co/politica-de-cookies" target="_blank">Políticas de uso</a></p>
        <p>Cencosud Colombia S.A. ® Derechos reservados - <a href="http://www.tiendasjumbo.co/" target="_black">www.tiendasjumbo.co</a></p>
      </footer>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
  <!-- Libs -->
  <!-- <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script> -->
  <!-- <script src="slick/slick.js" type="text/javascript" charset="utf-8"></script>
  <script type="text/javascript">
    $(document).on('ready', function() {
      $(".fotos-recetas").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    });
  </script>
 -->  
  <script src="js/angular.min.js"></script>
  <script src="js/angular-route.min.js"></script>
  <script src="js/angular-animate.min.js" ></script>
  <script src="js/toaster.js"></script>
<!--   <script src="js/custom.js"></script>
 -->  <script src="app/app.js"></script>
  <script src="app/data.js"></script>
  <script src="app/directives.js"></script>
  <script src="app/authCtrl.js"></script>
</html>

