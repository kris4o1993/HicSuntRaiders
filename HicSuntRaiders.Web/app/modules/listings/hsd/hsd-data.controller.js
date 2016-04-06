var hsr;
(function (hsr) {
    var modules;
    (function (modules) {
        var listings;
        (function (listings) {
            var hsd;
            (function (hsd) {
                var hsdData;
                (function (hsdData) {
                    'use strict';
                    var HsdController = (function () {
                        function HsdController(data) {
                            this.data = data;
                            this.onLoad();
                        }
                        HsdController.prototype.onLoad = function () {
                            this.test = this.data;
                        };
                        return HsdController;
                    })();
                    hsdData.HsdController = HsdController;
                    hsdController.$inject = [
                        'data'
                    ];
                    function hsdController(data) {
                        return new HsdController(data);
                    }
                    angular.module(hsr.Constants.Modules.HsdData)
                        .controller(hsr.Constants.Controllers.HsdController, hsdController);
                })(hsdData = hsd.hsdData || (hsd.hsdData = {}));
            })(hsd = listings.hsd || (listings.hsd = {}));
        })(listings = modules.listings || (modules.listings = {}));
    })(modules = hsr.modules || (hsr.modules = {}));
})(hsr || (hsr = {}));
