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
        cy.assertImageIsVisible(1);
    });

    it("should rate two stars", () => {
        cy.get(".star-2").click();

        cy.assertComputedStyleContent(".text", "I don't like it");
        cy.assertComputedStyleContent(".numb", "2 out of 5");
        cy.assertImageIsVisible(2);
    });

    it("should rate three stars", () => {
        cy.get(".star-3").click();

        cy.assertComputedStyleContent(".text", "This is awesome");
        cy.assertComputedStyleContent(".numb", "3 out of 5");
        cy.assertImageIsVisible(3);
    });
});
