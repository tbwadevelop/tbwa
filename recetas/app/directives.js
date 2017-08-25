app.directive('focus', function() {
    return function(scope, element) {
        element[0].focus();
    }      
});

app.directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control) {
            var checker = function () {
 
                //get the value of the first password
                var e1 = scope.$eval(attrs.ngModel); 
 
                //get the value of the other password  
                var e2 = scope.$eval(attrs.passwordMatch);
                if(e2!=null)
                return e1 == e2;
            };
            scope.$watch(checker, function (n) {
 
                //set the form control to valid if both 
                //passwords are the same, else invalid
                control.$setValidity("passwordNoMatch", n);
            });
        }
    };
}]);


    app.directive('autoScroll', function ($document, $timeout, $location) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.okSaveScroll = true;
                scope.scrollPos = {};
                $document.bind('scroll', function () {
                    if (scope.okSaveScroll) {
                        scope.scrollPos[$location.path()] = $(window).scrollTop();
                    }
                });
                scope.scrollClear = function (path) {
                    scope.scrollPos[path] = 0;
                };
                scope.$on('$locationChangeSuccess', function (route) {
                    $timeout(function () {
                        $(window).scrollTop(scope.scrollPos[$location.path()] ? scope.scrollPos[$location.path()] : 0);
                        scope.okSaveScroll = true;
                    }, 0);
                });
                scope.$on('$locationChangeStart', function (event) {
                    scope.okSaveScroll = false;
                });
            }
        };
    });
