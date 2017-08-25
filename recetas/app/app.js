var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                title: 'Login',
                templateUrl: 'templates/login.html',
                controller: 'authCtrl',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'templates/login.html',
                controller: 'logoutCtrl'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'templates/signup.html',
                controller: 'authCtrl'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'templates/dashboard.html',
                controller: 'authCtrl'
            })
            .when('/', {
                title: 'Home',
                templateUrl : 'templates/home.html',
                controller  : 'HomeCtrl'
            })
            .when('/instrucciones', {
                title: 'Instrucciones',
                templateUrl : 'templates/instrucciones.html',
                controller  : 'InstCtrl'
            })
            .when('/busqueda', {
                title: 'Busqueda',
                templateUrl : 'templates/busqueda.html',
                controller  : 'listCtrl'
            })
            .when('/servicio/:id/:receta',{
                title: 'Nickname',
                templateUrl : 'templates/servicio.html',
                controller  : 'ServCtrl'
            })
            .when('/subir-receta',{
                title: 'Nickname',
                templateUrl : 'templates/subir_receta.html',
                controller  : 'ServCtrl'
            })
            .when('/receta',{
                title: 'Nickname',
                templateUrl : 'templates/receta.html',
                controller  : 'ServCtrl'
            })
            .when('/terminos',{
                title: 'Nickname',
                templateUrl : 'templates/terminos.html',
                controller  : 'ServCtrl'
            })
            .otherwise({
                templateUrl : 'templates/error.html',
                controller  : 'ErrCtrl'
            });
        
        // use the HTML5 History API
      //  $locationProvider.html5Mode(true);
        
             
  }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                      //  $location.path("/login");
                    }
                }
            });
        });
    });