import HomePage from "../pages/homepage";
import ProductPage from "../pages/productpage";
import CartPage from "../pages/cartpage";
import OrderPage from "../pages/orderform";


describe("Shop For Product",()=>{
    var data = null;

    before(()=>{
        cy.fixture("signupform").then(function(data){
            this.data = data;
        })
    })
    
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    it("Add product to cart",function(){
        var itemName = "Samsung galaxy s6";
        homePage.visitIndexPage()
        homePage.selectProduct(itemName);
        productPage.clickAddToCartBtn();
        cartPage.navigateToCartPage();
        cartPage.validateItemInCart(itemName);
        cartPage.clickOnPlaceOrderBtn();
        orderPage.enterOrderDetails(this.data.name,this.data.country,this.data.city,this.data.card,this.data.month,this.data.year)
        orderPage.clickOnpurchaseBtn();
        orderPage.verifyOrderCompletion();
    })
})