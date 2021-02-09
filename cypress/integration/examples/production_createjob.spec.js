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

describe("create a job", () => {
  const email = "client@google.com";
  const password = "password";
  const jobtitle = shortName;

  it("create job", () => {
    cy.visit("https://inspiration-homes.herokuapp.com/");
    cy.contains("Login").click();
    cy.url().should("include", "login");
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.contains("Log In!").click();
    cy.wait(5000);
    cy.contains("Contact").click();
    cy.url().should("include", "contact");
    cy.get("textarea[name=Description]").type("Big Description");
    cy.get("input[name=BuildAddress]").type(jobtitle);
    cy.get("input[name=DesignDocuments]")
      .click()
      .attachFile("matt_and_his_dog.png");
    cy.contains("Create Job!").click();
    cy.wait(10000);
    cy.contains(jobtitle).click();
    cy.get('[alt="design document"]').should("be.visible");
  });
});
