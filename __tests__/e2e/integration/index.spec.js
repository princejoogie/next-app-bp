/// <reference types="cypress" />

describe("Home", () => {
  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=heading-text]").contains("NextJS Boilerplate");
  });
});
