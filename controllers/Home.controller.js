sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
   "use strict";

   /**
    * @class spinifex.strato.controller.widget.WidgetSettings Controller for Widget Settings view.
    */
   return Controller.extend("spinifex.webdemo.controllers.Home", {
      /** @lends spinifex.strato.controller.widget.WidgetSettings */

      model: null,

      /**
       * Called when a controller is instantiated and its View controls (if
       * available) are already created. Can be used to modify the View before it
       * is displayed, to bind event handlers and do other one-time
       * initialization.
       *
       * @constructs
       */
      onInit: function () {
         var model = new sap.ui.model.json.JSONModel({});
         var data = {
            Products: [
               {
                  ProductID: 1,
                  ProductName: "Chai",
                  QuantityPerUnit: "10 boxes x 20 bags",
                  UnitPrice: "",
                  Discontinued: false,
               },
               {
                  ProductID: 2,
                  ProductName: "Chang",
                  QuantityPerUnit: "24 - 12 oz bottles",
                  UnitPrice: "19.0000",
                  Discontinued: true,
               },
               {
                  ProductID: 3,
                  ProductName: "Aniseed Syrup",
                  QuantityPerUnit: "12 - 550 ml bottles",
                  UnitPrice: "10.0000",
                  Discontinued: false,
               },
               {
                  ProductID: 4,
                  ProductName: "Chef Anton's Cajun Seasoning",
                  QuantityPerUnit: "",
                  UnitPrice: "22.0000",
                  Discontinued: false,
               },
               {
                  ProductID: 5,
                  ProductName: "Chef Anton's Gumbo Mix",
                  QuantityPerUnit: "36 boxes",
                  UnitPrice: "21.3500",
                  Discontinued: true,
               },
            ],
            productName: "",
            price: 0,
            quantity: "",
            viewType: "table",
         };
         model.setData(data);

         this.getView().setModel(model);
      },

      /**
       * This function is called from the generate
       * button
       */
      onAddProduct: function () {
         var model = this.getView().getModel();
         var products = model.getProperty("/Products");
         var productName = model.getProperty("/productName");
         var price = +model.getProperty("/price");
         var quantity = model.getProperty("/quantity");
         // var error_message = model.getProperty("/error_message");

         // var errorMessage = new sap.m.Text({
         //    width: "100%",
         //    text: "Error message",
         //    textAlign: "Center",
         // }).addStyleClass("error-text");

         if (productName === undefined) {
            console.log("Input a name");
         } else {
            var newProduct = {
               ProductID: products.length + 1,
               ProductName: productName,
               QuantityPerUnit: quantity,
               UnitPrice: price,
               Discontinued: false,
            };
            products.push(newProduct);
         }
         model.setProperty("/Products", products);

         model.setProperty("/productName", "");
         model.setProperty("/price", 0);
         model.setProperty("/quantity", "");

         console.log(products);
      },
      onChangeView: function () {
         var model = this.getView().getModel();
         var viewType = model.getProperty("/viewType");
         var changedType;

         changedType =
            viewType === "table" ? model.setProperty("/viewType", "list") : model.setProperty("/viewType", "table");

         console.log(model.getProperty("/viewType", changedType));
      },
   });
});
