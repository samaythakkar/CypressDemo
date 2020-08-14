"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homepage_1 = __importDefault(require("../pages/homepage"));
const productpage_1 = __importDefault(require("../pages/productpage"));
const cartpage_1 = __importDefault(require("../pages/cartpage"));
const orderform_1 = __importDefault(require("../pages/orderform"));
describe("Shop For Product", () => {
    var data = null;
    before(() => {
        cy.fixture("signupform").then(function (data) {
            this.data = data;
        });
    });
    const homePage = new homepage_1.default();
    const productPage = new productpage_1.default();
    const cartPage = new cartpage_1.default();
    const orderPage = new orderform_1.default();
    it("Add product to cart", function () {
        var itemName = "Samsung galaxy s6";
        homePage.visitIndexPage();
        homePage.selectProduct(itemName);
        productPage.clickAddToCartBtn();
        cartPage.navigateToCartPage();
        cartPage.validateItemInCart(itemName);
        cartPage.clickOnPlaceOrderBtn();
        orderPage.enterOrderDetails(this.data.name, this.data.country, this.data.city, this.data.card, this.data.month, this.data.year);
        orderPage.clickOnpurchaseBtn();
        orderPage.verifyOrderCompletion();
    });
});
