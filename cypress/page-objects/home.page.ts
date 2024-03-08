export class HomePage {
  visit(): void {
    cy.visit(`${Cypress.config().baseUrl}`);
  }
}
