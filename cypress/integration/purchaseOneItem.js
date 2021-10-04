describe('Purchase Two Items', () => {
  
    it('purchase two items', () => {
        //Add item 1 to cart
        cy.visit('http://automationpractice.com')

        cy.contains('Dresses').click({ force: true })
        cy.contains('.cat-name', 'Dresses').should('be.visible')

        cy.contains('Printed Chiffon Dress').click()
        cy.contains('.page-product-heading', 'Data sheet').should('be.visible')
        cy.contains('Printed Chiffon Dress').should('be.visible')

        cy.contains('Add to cart').click()
        cy.contains('Continue shopping').click()

        cy.get('[title="View my shopping cart"]').click()
        cy.contains('Shopping-cart summary').should('be.visible')
        cy.get('#center_column').get('.cart_product').should(item => {
            expect(item).to.have.length(2)
        })

        // Add second item to cart
        cy.contains('Women').click()
        cy.get('.product-name').contains('Blouse').parent().parent().contains('Add to cart').click()
        cy.contains('Proceed to checkout').click()

        cy.contains('Shopping-cart summary').should('be.visible')
        cy.get('#center_column').get('.cart_product').should(item => {
            expect(item).to.have.length(3)
        })

        //Log in
        cy.get('.columns-container').contains('Proceed to checkout').click()

        cy.get('#email').type('vlad.test@test.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin').click()

        // REGISTER ACCOUNT CODE
        // cy.get('#email_create').type('vlad2.test@test.com')
        // cy.contains('button', 'Create an account').click()
        // cy.wait(1000)
        // cy.contains('Your personal information').should('be.visible')

        // cy.get('#uniform-id_gender1').click()
        // cy.get('#customer_firstname').type('Vlad')
        // cy.get('#customer_lastname').type('Lu')
        // cy.get('#passwd').type('12345')

        // cy.get('#days').select(5)
        // cy.get('#months').select(5)
        // cy.get('#years').select('1995')

        // cy.get('#firstname').type('Vlad')
        // cy.get('#lastname').type('Lu')
        // cy.get('#address1').type('55 Vlad Lane')
        // cy.get('#city').type('Vancouver')
        // cy.get('#id_state').select('Kansas')
        // cy.get('#postcode').type('12345')
        // cy.get('#phone_mobile').type('4165551234')

        // cy.get('#submitAccount').click()

        cy.contains('Addresses').should('be.visible')

        //Complete checkout
        cy.get('.columns-container').contains('Proceed to checkout').click()
        cy.contains('.page-heading', 'Shipping').should('be.visible')

        cy.get('#uniform-cgv').click()
        cy.get('.columns-container').contains('Proceed to checkout').click()

        cy.contains('.page-heading', 'Please choose your payment method').should('be.visible')
        cy.get('.bankwire').click()

        cy.contains('.page-heading', 'Order summary').should('be.visible')
        cy.contains('button', 'I confirm my order').click()

        cy.contains('.page-heading', 'Order confirmation').should('be.visible')

        //Log out
        cy.contains('Sign out').click()
        cy.contains('.page-heading', 'Authentication').should('be.visible')














        








    })

})