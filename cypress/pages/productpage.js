"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class productPage {
    clickAddToCartBtn() {
        cy.get("a[onclick='addToCart(1)']").click();
    }
}
exports.default = productPage;
