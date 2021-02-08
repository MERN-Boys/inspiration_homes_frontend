///<reference types='cypress'/>

describe("login", () => {
  const email = "admin@admin.com";
  const password = "password";

  beforeEach(() => {
    cy.visit("https://inspiration-homes.herokuapp.com/");
  });

  it("has a title", () => {
    cy.contains("NEW HOMES | RENOVATIONS | DECKS | BATHROOMS");
  });
});
