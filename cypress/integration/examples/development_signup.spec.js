///<reference types='cypress'/>


const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 1,
});


describe("sign up", () => {
  const name = shortName;
  const email = `${shortName}@google.com`;
  const password = "password";

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
