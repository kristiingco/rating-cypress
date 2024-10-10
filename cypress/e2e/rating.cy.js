/// <reference types = "cypress"/>

describe("Rating Functionality", () => {
    it("should load the page", () => {
        cy.visit("/");
        cy.get(".text").then(($element) => {
            const computedStyle = window.getComputedStyle(
                $element[0],
                "::before"
            );

            const content = computedStyle.getPropertyValue("content");

            expect(content).to.contain("Rate your experience");
        });
    });
});
