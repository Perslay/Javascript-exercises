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
