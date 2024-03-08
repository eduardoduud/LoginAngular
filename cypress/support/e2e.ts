import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      clickOn(...paths: Array<string>): Chainable<Element>;
    }
  }
}
