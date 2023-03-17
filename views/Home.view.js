sap.ui.define(
   [
      "sap/m/Page",
      "sap/m/Label",
      "sap/m/Input",
      "sap/m/Button",
      "sap/ui/core/CustomData",
      "sap/m/FlexBox",
      "sap/m/Table",
   ],
   function (Page, Label, Input, Button, CustomData, FlexBox, Table) {
      "use strict";

      var oView = sap.ui.jsview("spinifex.webdemo.views.Home", {
         /**
          * Specifies the Controller belonging to this View.
          * In the case that it is not implemented, or that "null" is
          * returned, this View does not have a Controller.
          */
         getControllerName: function () {
            return "spinifex.webdemo.controllers.Home";
         },

         createContent: function (oController) {
            return new Page({
               title: "Products",
               class: "sapUiContentPadding",
               content: [
                  new FlexBox({
                     direction: "Row",
                     justifyContent: "Center",
                     alignItems: "Center",
                     width: "100%",
                     items: [
                        new Label({ text: "Product Name" }),
                        new Input({ value: "{/productName}", width: "200px" }),
                     ],
                  }),
                  new FlexBox({
                     direction: "Row",
                     justifyContent: "Center",
                     alignItems: "Center",
                     width: "100%",
                     items: [
                        new Label({ text: "Price" }),
                        new Input({ value: "{/price}", width: "60px" }),

                        new Label({ text: "Quantity" }),
                        new Input({ value: "{/quantity}", width: "60px" }),
                     ],
                  }),
                  new FlexBox({
                     direction: "Row",
                     justifyContent: "Center",
                     alignItems: "Center",
                     width: "100%",
                     items: [
                        new Button({
                           width: "250px",
                           text: "Add Product",
                           type: "Accept",
                           press: [oController.onAddProduct, oController],
                        }),
                     ],
                  }),
                  new FlexBox({
                     direction: "Column",
                     justifyContent: "Center",
                     alignItems: "Center",
                     width: "100%",
                     items: [
                        new Button({
                           width: "250px",
                           text: "Change Content",
                           press: [oController.onChangeView, oController],
                        }),
                        new Table({
                           visible: {
                              path: "/viewType",
                              formatter: function (viewType) {
                                 return viewType === "table" ? true : false;
                              },
                           },
                           TextAlign: "Center",
                           columns: [
                              new sap.m.Column({
                                 hAlign: sap.ui.core.TextAlign.Center,
                                 width: "15%",
                                 header: new Label({
                                    text: "Product ID",
                                 }),
                              }),
                              new sap.m.Column({
                                 hAlign: sap.ui.core.TextAlign.Center,
                                 width: "25%",
                                 header: new Label({
                                    text: "Product Name",
                                 }),
                              }),
                              new sap.m.Column({
                                 hAlign: sap.ui.core.TextAlign.Center,
                                 width: "20%",
                                 header: new Label({
                                    text: "Quantity Per Unit",
                                 }),
                              }),
                              new sap.m.Column({
                                 hAlign: sap.ui.core.TextAlign.Center,
                                 width: "20%",
                                 header: new Label({
                                    text: "Unit Price",
                                 }),
                              }),
                              new sap.m.Column({
                                 hAlign: sap.ui.core.TextAlign.Center,
                                 width: "20%",
                                 header: new Label({
                                    text: "Discontinued",
                                 }),
                              }),
                           ],
                           items: {
                              path: "/Products",
                              // template: new sap.m.ColumnListItem({
                              //    cells: [
                              //       new sap.m.Text({
                              //          text: "{ProductID}",
                              //       }),
                              //       new sap.m.Text({
                              //          text: "{ProductName}",
                              //       }),
                              //       new sap.m.Text({
                              //          text: "{QuantityPerUnit}",
                              //       }),
                              //       new sap.m.Text({
                              //          text: "{UnitPrice}",
                              //       }),
                              //       new sap.m.Text({
                              //          text: "{Discontinued}",
                              //       }),
                              //    ],
                              // }),
                              factory: function (idx, oContext) {
                                 var products = oContext.getObject();
                                 // console.log(oContext);

                                 var nQuantityPerUnit = products.QuantityPerUnit;
                                 var oQuantityPerUnit;

                                 oQuantityPerUnit =
                                    nQuantityPerUnit !== ""
                                       ? new sap.m.Text({
                                            text: nQuantityPerUnit,
                                         })
                                       : new Input({
                                            text: nQuantityPerUnit,
                                         });

                                 var nUnitPrice = products.UnitPrice;
                                 var oUnitPrice;

                                 oUnitPrice =
                                    nUnitPrice > 0
                                       ? new sap.m.Text({
                                            text: nUnitPrice,
                                         })
                                       : new Input({});

                                 return new sap.m.ColumnListItem({
                                    highlight: {
                                       parts: [{ path: "Discontinued" }],
                                       formatter: function (discontinued) {
                                          return discontinued
                                             ? sap.ui.core.MessageType.Error
                                             : sap.ui.core.MessageType.Success;
                                       },
                                    },
                                    cells: [
                                       new sap.m.Text({
                                          type: "Rejected",
                                          text: "{ProductID}",
                                       }),
                                       new sap.m.Text({
                                          text: "{ProductName}",
                                       }),
                                       oQuantityPerUnit,
                                       oUnitPrice,
                                       new sap.m.Select({
                                          selectedKey: "{Discontinued}",
                                          items: [
                                             new sap.ui.core.Item({
                                                key: false,
                                                text: "False",
                                             }),
                                             new sap.ui.core.Item({
                                                key: true,
                                                text: "True",
                                             }),
                                          ],
                                       }),
                                    ],
                                 });
                              },
                           },
                        }),
                        new sap.m.List({
                           visible: {
                              path: "/viewType",
                              formatter: function (viewType) {
                                 return viewType === "list" ? true : false;
                              },
                           },
                           items: {
                              path: "/Products",
                              template: new sap.m.StandardListItem({
                                 title: {
                                    parts: [
                                       { path: "ProductID" },
                                       { path: "ProductName" },
                                       { path: "QuantityPerUnit" },
                                       { path: "UnitPrice" },
                                       { path: "Discontinued" },
                                    ],
                                    formatter: function (productID, productName, quantity, unitPrice, discontinued) {
                                       if (discontinued) {
                                          return `${productID}:${productName} per ${unitPrice} is for P${quantity} (Unavailable)`;
                                       } else {
                                          return `${productID}: ${productName} per ${unitPrice} is for P${quantity} (Available)`;
                                       }
                                    },
                                 },
                              }),
                           },
                        }),
                     ],
                  }),
               ],
            });
         },
      });

      // var myclass = new oView();

      return oView;
   }
);
