
// code executed after initialization
sap.ui.getCore().attachInit(function () {

    // initialize component
    jQuery.sap.registerModulePath('spinifex.webdemo', "./");

    var oCompCont = new sap.ui.core.ComponentContainer({
        name: "spinifex.webdemo",
        settings: {
            id: "demoComponent",
        }
    });

    oCompCont.placeAt("content");
});


