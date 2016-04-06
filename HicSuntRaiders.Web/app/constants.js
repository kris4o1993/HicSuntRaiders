var hsr;
(function (hsr) {
    'use strict';
    var Constants = (function () {
        function Constants() {
        }
        Constants.ApiKey = 'apikey=mhxbm3z5e68je8svezwuajq753wdh7jm';
        Constants.Modules = {
            // services
            Services: 'hsr.services',
            // modules
            Modules: 'hsr.modules',
            // modules.listings
            Listings: 'hsr.modules.listings',
            // modules.listings.hsd
            HsdData: 'hsr.modules.listings.hsd'
        };
        Constants.Services = {
            PlayerService: 'hsr.services.PlayerService',
        };
        Constants.Controllers = {
            HsdController: 'hsr.modules.listings.hsd.hsdController',
        };
        return Constants;
    })();
    hsr.Constants = Constants;
})(hsr || (hsr = {}));
