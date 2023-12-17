sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("riskmanagementfreestyle.controller.ListReport", {

            /**
             * Event handler when a table item gets pressed
             * @param {sap.ui.base.Event} oEvent the table selectionChange event
             * @public
             */
            onPress: function (oEvent) {
                this.getOwnerComponent().getRouter().navTo("ObjectPage", {
					ID: oEvent.getSource().getBindingContext().getObject("ID")
				});
            },
        });
    });
