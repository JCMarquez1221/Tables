sap.ui.define([
    "jquery.sap.global", "sap/ui/core/UIComponent"
], function( jQuery, UIComponent ) {
    "use strict";

    return UIComponent.extend("spinifex.webdemo.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * Initializes the component.
         */
        init: function () {
            // call the init function of the parent class
            UIComponent.prototype.init.apply(this, arguments);

            // -- do init stuff here -------------------


            // -- initialize router --------------------
            var oRouter = this.getRouter();
            oRouter.initialize();

        }
    });

});
