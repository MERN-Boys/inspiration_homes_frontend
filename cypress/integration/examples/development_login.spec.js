///<reference types='cypress'/>

describe("login", () => {
  const email = "builder@google.com";
  const password = "password";

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Log In", () => {
    cy.contains("Login").click();
    cy.url().should("include", "login");
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.contains("Log In!").click();
  });
});
