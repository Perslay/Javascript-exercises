describe("Check title", () => {
  it("Check if title includes 'Kitchen Sink'", () => {
    cy.visit("https://example.cypress.io");
    cy.title().should("include", "Kitchen Sink");
  });
});

describe("Get on commands/querying page and query for the button", () => {
  it("Clicking 'get' navigates to a new url and the button has the correct text", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("get").click();
    cy.url().should("include", "/commands/querying");
    cy.get("#query-btn").should("contain", "Button");
  });
});

describe("Get on commands/actions page and type in the input field", () => {
  it("Clicking 'type' navigates to a new url and the input field has the correct value", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email").type("my@email.com");
    cy.get(".action-email").should("have.value", "my@email.com");
  });
});

/*------------*/

describe("Filling the form and logging in", () => {
  it("Fills the form with correct input and submits it", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });
  it("Fails to log in with empty fields", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  it("Fails to log in with wrong username and correct password", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("wronguser");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  it("Fails to log in with correct username and wrong password", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("wrongpassword");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your password is invalid!");
  });
  it("Fails to log in with incorrect credentials", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("wronguser");
    cy.get("#password").type("wrongpassword");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  it("Logs out successfully after logging in", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("a[href='/logout']").click();
    cy.get("#flash").should("contain", "You logged out of the secure area!");
    cy.url().should("include", "/login");
  });
});
