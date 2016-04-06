var hsr;
(function (hsr) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when('/home', {
                controller: '',
                templateUrl: '',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/home'
            });
        };
        Routes.$inject = ['$routeProvider'];
        return Routes;
    })();
    hsr.Routes = Routes;
})(hsr || (hsr = {}));
