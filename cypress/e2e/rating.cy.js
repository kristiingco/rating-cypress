/// <reference types = "cypress"/>

describe("Rating Functionality", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should load the page", () => {
        cy.assertComputedStyleContent(".text", "Rate your experience");
    });

    it("should rate one star", () => {
        cy.get(".star-1").click();

        cy.assertComputedStyleContent(".text", "I just hate it");

        cy.assertComputedStyleContent(".numb", "1 out of 5");
    });
});
