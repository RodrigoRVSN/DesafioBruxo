/// <reference types="cypress" />

export {};

describe('<Home />', () => {
  context('Home Feature', () => {
    it('should be able to go to home', () => {
      cy.visit('/');
    });
  });
});
