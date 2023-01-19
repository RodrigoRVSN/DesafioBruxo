/// <reference types="cypress" />

export {};

describe('<Home />', () => {
  const characterCard = '[data-testid=character-card__container]'
  const buttonLoadMore = '[data-testid=button__load-more]'
  const ancestryFilterSelect = '[data-testid=filter-by-ancestry__select-option]'
  const houseFilterSelect = '[data-testid=filter-by-house__select-option]'

  context('Characters List', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('should be able to load 10 characters and load more 10 when click in button', () => {
      cy.get(characterCard).should('have.length', 10)

      cy.get(buttonLoadMore).click()

      cy.get(characterCard).should('have.length', 20)
    });

    
    it('should be able to filter by ancestry', () => {
      cy.get(ancestryFilterSelect).select('pure-blood')

      cy.wait(100)

      cy.get(characterCard).each(character => {
        expect(Cypress.$(character).text()).to.contains('pure-blood')
      })
    });

    
    it('should be able to filter by house', () => {
      cy.get(houseFilterSelect).select('Gryffindor')

      cy.wait(100)

      cy.get(characterCard).each(character => {
        expect(Cypress.$(character).text()).to.contains('House: Gryffindor')
      })
    });

    
    it('should be able to filter by ancestry and house at the same time', () => {
      cy.get(ancestryFilterSelect).select('half-blood')
      cy.get(houseFilterSelect).select('Slytherin')

      cy.wait(100)

      cy.get(characterCard).each(character => {
        expect(Cypress.$(character).text()).to.contains('half-blood')
        expect(Cypress.$(character).text()).to.contains('House: Slytherin')
      })
    });
  });
});
