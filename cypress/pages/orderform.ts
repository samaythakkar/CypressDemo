class OrderForm{

    enterName(name:string){
        cy.get("input[id=name]").type(name);
    }

    enterCountry(country:string){
        cy.get("input[id=country]").type(country);
    }

    enterCity(city:string){
        cy.get("input[id=city]").type(city);
    }

    enterCard(card:string){
        cy.get("input[id=card]").type(card);
    }

    enterMonth(month:string){
        cy.get("input[id=month]").type(month);
    }

    enterYear(year:string){
        cy.get("input[id=year]").type(year);
    }

    clickOnpurchaseBtn(){
        cy.get("button[onclick='purchaseOrder()']").click()
    }

    enterOrderDetails(name:string,country:string,city:string,card:string,month:string,year:string){

        this.enterName(name);
        this.enterCountry(country);
        this.enterCity(city);
        this.enterCard(card);
        this.enterMonth(month);
        this.enterYear(year);
        
    }

    verifyOrderCompletion(){
        cy.get("h2").should("contain","Thank you for your purchase!")
    }
}
export default OrderForm;
