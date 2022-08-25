describe('Change themes', () => {
  it('light theme when app starts', () => {
    cy.visit('/settings').contains('Settings')
    cy.contains('Light Theme')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('colorful theme is active', () => {
    cy.contains('Light Theme').click()
    cy.get('button').contains('Colorful Theme').should('be.visible')
    cy.get('button').contains('Dark Theme').should('be.visible')

    cy.get('button').contains('Colorful Theme').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(192, 108, 132)')
  })

  it('dark theme is active', () => {
    cy.contains('Colorful Theme').click()
    cy.get('button').contains('Light Theme').should('be.visible')
    cy.get('button').contains('Dark Theme').should('be.visible')

    cy.get('button').contains('Dark Theme').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(180, 180, 180)')
  })

  it('light theme is active', () => {
    cy.contains('Dark Theme').click()
    cy.get('button').contains('Light Theme').should('be.visible')
    cy.get('button').contains('Colorful Theme').should('be.visible')

    cy.get('button').contains('Light Theme').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
