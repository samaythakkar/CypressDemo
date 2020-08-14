class CartPage{


    navigateToCartPage(){
        cy.get("#cartur").click();
    }

    
    validateItemInCart(itemName:string){
        cy.get('td').should('contain',itemName)

    }
    clickOnPlaceOrderBtn(){
        cy.get("button[data-target='#orderModal']").click()
    }
    
}
export default CartPage;