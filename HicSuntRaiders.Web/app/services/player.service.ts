module hsr.services {

    export interface IPlayerService {
        getPlayerData(name: string, realm: string): ng.IPromise<any>;
    }

    export class PlayerService {
        constructor(
            private $q: ng.IQService,
            private $http: ng.IHttpService
        ) { }

        getPlayerData(name: string, realm: string): ng.IPromise<any> {
            return this.$http
                .get('https://eu.api.battle.net/wow/character/' + realm + '/' + name + '?' + hsr.Constants.ApiKey)
                .then((response: any): any => {
                    return response;
                });
        }
    }

    factory.$inject = [
        '$q',
        '$http'
    ];

    function factory(
        $q: ng.IQService,
        $http: ng.IHttpService
    ) {
        return new PlayerService($q, $http);
    }

    angular.module(hsr.Constants.Modules.Services)
        .factory(hsr.Constants.Services.PlayerService, factory);
}