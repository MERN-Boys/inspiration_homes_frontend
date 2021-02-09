///<reference types='cypress'/>

describe('login', () => {
    // const email = "admin@admin.com";
    // const password = 'password';

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('has a title', () => {
        cy.contains('NEW HOMES | RENOVATIONS | DECKS | BATHROOMS')
    })

})
