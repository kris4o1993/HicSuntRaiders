module hsr {
    'use strict';

    export class Constants {


        static ApiKey = 'apikey=mhxbm3z5e68je8svezwuajq753wdh7jm';

        static Modules = {
        
        // services
        Services: 'hsr.services',    

        // modules
        Modules: 'hsr.modules',

        // modules.listings
        Listings: 'hsr.modules.listings',

        // modules.listings.hsd
        HsdData: 'hsr.modules.listings.hsd'

        }

        static Services = {
            PlayerService: 'hsr.services.PlayerService',
        }

        static Controllers = {
            HsdController: 'hsr.modules.listings.hsd.hsdController',
        }
    }
}