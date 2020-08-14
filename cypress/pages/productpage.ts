class productPage{

    clickAddToCartBtn(){

        cy.get("a[onclick='addToCart(1)']").click()

    }
}
export default productPage;