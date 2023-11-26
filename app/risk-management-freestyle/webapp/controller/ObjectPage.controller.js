sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("riskmanagementfreestyle.controller.ObjectPage", {

            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("ObjectPage").attachPatternMatched(this._onPatternMatched, this);
            },


            _onPatternMatched: function (oEvent) {
                let sRiskId =  oEvent.getParameter("arguments").ID;

                this.getView().bindElement({
                    path: "/Risks(ID=" + sRiskId + ",IsActiveEntity=true)"
                });
            },

            handleRisksLinkPress: function () {
                this.getOwnerComponent().getRouter().navTo("ListReport");
            }
        });
    });
