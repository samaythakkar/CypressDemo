
class HomePage{

    visitIndexPage(){
        cy.visit("https://www.demoblaze.com/index.html")
    }

    selectProduct(prouductName:string){
        cy.get('.hrefch').contains(prouductName).click()
    }

    selectCategory(categoryName:string){
        cy.get('.list-group').contains(categoryName).click()
    }


    // clickHeader(headerName:string){

    // }
    
}

export default HomePage;