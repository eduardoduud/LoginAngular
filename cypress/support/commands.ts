Cypress.Commands.add('clickOn', (...paths: Array<string>) => {
  let elementPath = '';
  for (const path of paths) {
    elementPath = `${elementPath} [data-testid="${path}"]`;
  }
  cy.get(elementPath).click();
});
