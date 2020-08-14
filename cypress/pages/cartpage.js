"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartPage {
    navigateToCartPage() {
        cy.get("#cartur").click();
    }
    validateItemInCart(itemName) {
        cy.get('td').should('contain', itemName);
    }
    clickOnPlaceOrderBtn() {
        cy.get("button[data-target='#orderModal']").click();
    }
}
exports.default = CartPage;
