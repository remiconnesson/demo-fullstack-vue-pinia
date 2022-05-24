// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('increments when clicked', () => {
    cy.visit('/')

    cy.get('h1:first').should('have.text', 'Compteur REF 1');
    cy.get('button:first').click();
    cy.get('h1:first').should('have.text', 'Compteur REF 2');
  })

  it('increments when clicked', () => {
    cy.visit('/')
    cy.get('[data-testid="demo-ref-first-h1"]').should('have.text', 'Compteur REF 1');
    cy.get('[data-testid="demo-ref-first-input"]').click();
    cy.get('[data-testid="demo-ref-first-h1"]').should('have.text', 'Compteur REF 2');
  })

})
