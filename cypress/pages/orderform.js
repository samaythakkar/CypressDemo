"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderForm {
    enterName(name) {
        cy.get("input[id=name]").type(name);
    }
    enterCountry(country) {
        cy.get("input[id=country]").type(country);
    }
    enterCity(city) {
        cy.get("input[id=city]").type(city);
    }
    enterCard(card) {
        cy.get("input[id=card]").type(card);
    }
    enterMonth(month) {
        cy.get("input[id=month]").type(month);
    }
    enterYear(year) {
        cy.get("input[id=year]").type(year);
    }
    clickOnpurchaseBtn() {
        cy.get("button[onclick='purchaseOrder()']").click();
    }
    enterOrderDetails(name, country, city, card, month, year) {
        this.enterName(name);
        this.enterCountry(country);
        this.enterCity(city);
        this.enterCard(card);
        this.enterMonth(month);
        this.enterYear(year);
    }
    verifyOrderCompletion() {
        cy.get("h2").should("contain", "Thank you for your purchase!");
    }
}
exports.default = OrderForm;
