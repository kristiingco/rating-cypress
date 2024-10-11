/// <reference types = "cypress"/>

describe("Rating Functionality", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should load the page", () => {
        cy.get(".text").then(($element) => {
            const computedStyle = window.getComputedStyle(
                $element[0],
                "::before"
            );

            const content = computedStyle.getPropertyValue("content");

            expect(content).to.contain("Rate your experience");
        });
    });

    it("should rate one star", () => {
        cy.get(".star-1").click();

        cy.get(".text").then(($element) => {
            const computedStyle = window.getComputedStyle(
                $element[0],
                "::before"
            );

            const content = computedStyle.getPropertyValue("content");

            expect(content).to.contain("I just hate it");
        });

        cy.get(".numb").then(($element) => {
            const computedStyle = window.getComputedStyle(
                $element[0],
                "::before"
            );

            const content = computedStyle.getPropertyValue("content");

            expect(content).to.contain("1 out of 5");
        });
    });
});
