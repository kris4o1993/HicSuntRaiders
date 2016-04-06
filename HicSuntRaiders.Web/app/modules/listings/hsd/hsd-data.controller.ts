module hsr.modules.listings.hsd.hsdData {
    'use strict';

    export class HsdController {

        private test;

        constructor(
            private data
        )
        { this.onLoad(); }

        onLoad(): void {
            this.test = this.data;
        }
    }

    hsdController.$inject = [
        'data'
    ];

    function hsdController(data) {
        return new HsdController(data)
    }

    angular.module(hsr.Constants.Modules.HsdData)
        .controller(hsr.Constants.Controllers.HsdController, hsdController);
}