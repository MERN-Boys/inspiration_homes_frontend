///<reference types='cypress'/>

describe('login', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('has a title', () => {
        cy.get('[alt="placeholder"]').should("be.visible");
    })

})
