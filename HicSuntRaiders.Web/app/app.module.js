(function () {
    var app = angular.module('hsr', [
        'ngRoute',
        hsr.Constants.Modules.Modules,
        hsr.Constants.Modules.Services
    ]);
    app.config(hsr.Routes.configureRoutes);
})();
