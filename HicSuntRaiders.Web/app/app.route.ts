module hsr {
    export class Routes {
        static $inject = ['$routeProvider'];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/home', {
                    controller: '',
                    templateUrl: '',
                    controllerAs: 'vm'
                }).otherwise({
                    redirectTo: '/home'
                });
        }
    }
} 