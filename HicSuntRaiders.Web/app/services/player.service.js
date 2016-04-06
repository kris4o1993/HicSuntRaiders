var hsr;
(function (hsr) {
    var services;
    (function (services) {
        var PlayerService = (function () {
            function PlayerService($q, $http) {
                this.$q = $q;
                this.$http = $http;
            }
            PlayerService.prototype.getPlayerData = function (name, realm) {
                return this.$http
                    .get('https://eu.api.battle.net/wow/character/' + realm + '/' + name + '?' + hsr.Constants.ApiKey)
                    .then(function (response) {
                    return response;
                });
            };
            return PlayerService;
        })();
        services.PlayerService = PlayerService;
        factory.$inject = [
            '$q',
            '$http'
        ];
        function factory($q, $http) {
            return new PlayerService($q, $http);
        }
        angular.module(hsr.Constants.Modules.Services)
            .factory(hsr.Constants.Services.PlayerService, factory);
    })(services = hsr.services || (hsr.services = {}));
})(hsr || (hsr = {}));
