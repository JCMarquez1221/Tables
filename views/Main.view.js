sap.ui.define(["jquery.sap.global", "sap/m/App"], function (jQuery, App) {
   "use strict";

   var oView = sap.ui.jsview("spinifex.webdemo.views.Main", {
      /**
       * Specifies the Controller belonging to this View.
       * In the case that it is not implemented, or that "null" is
       * returned, this View does not have a Controller.
       */
      getControllerName: function () {
         // return "spinifex.webdemo.controllers.Main";
         return null;
      },

      createContent: function (oController) {
         return new App("spinApp", {
            pages: [],
         });
      },
   });

   return oView;
});
