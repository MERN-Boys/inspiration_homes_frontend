///<reference types='cypress'/>

describe("login", () => {
  const name = "Eric Chan";
  const email = "hello@cypress.io";
  const password = "password";
  const jobtitle = "Job titlleee6eeeee"

  //   beforeEach(() => {
  //     cy.visit("http://localhost:3000");
  //   });

  it("Log In", () => {
    cy.visit("https://inspiration-homes.herokuapp.com/");
    cy.contains("Login").click();
    cy.url().should("include", "login");
    cy.get("input[name=email]").type(email);

    cy.get("input[name=password]").type(password);

    

    cy.contains("Log In!").click();
    cy.wait(1500);

    cy.contains("Contact").click();
    cy.url().should("include", "contact");
    cy.get("textarea[name=Description]").type("Big Description");
    cy.get("input[name=BuildAddress]").type(jobtitle);
    cy.get("input[name=DesignDocuments]").click().attachFile("logo.png");
    cy.contains("Create Job!").click();
    cy.wait(2000);
    cy.wait(2000)
    cy.contains(jobtitle);
  });
});
