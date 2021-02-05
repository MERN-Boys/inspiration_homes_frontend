///<reference types='cypress'/>

describe("login", () => {
    const name = "Eric Chan"
   const email = "hello@cypress.io"
  const password = "password"

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Can Sign up", () => {
    cy.get('#signup').click();
    cy.url().should('include', 'register')
    cy.get('input[name=email]').type(email)
    cy.get('input[name=name]').type(name)
    cy.get('input[name=password]').type(password)
    cy.get('input[name=confirm]').type(password)
    cy.contains("Register!").click();
  });
});
