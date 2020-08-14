"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomePage {
    visitIndexPage() {
        cy.visit("https://www.demoblaze.com/index.html");
    }
    selectProduct(prouductName) {
        cy.get('.hrefch').contains(prouductName).click();
    }
    selectCategory(categoryName) {
        cy.get('.list-group').contains(categoryName).click();
    }
}
exports.default = HomePage;
