// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
    "assertComputedStyleContent",
    (selector, expectedContent) => {
        cy.get(selector).then(($element) => {
            const computedStyle = window.getComputedStyle(
                $element[0],
                "::before"
            );

            const content = computedStyle.getPropertyValue("content");

            expect(content).to.contain(expectedContent);
        });
    }
);

Cypress.Commands.add("assertImageIsVisible", (num) => {
    cy.get(`img[src="emojis/emoji-${num}.png"]`).should("be.visible");
});
