describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/').contains('Home')
  })

  it('<Display', () => {
    cy.get('.display')
      .should('be.visible')
  })

  it('<Keypad>', () => {
    cy.get('div>button')
      .should('have.length', 23)

    cy.get('.equal')
      .should('be.visible')
  })

  it('<History>', () => {
    cy.get('.history')
      .should('be.visible')
      .should('have.length', 1)

    cy.get('.title')
      .should('be.visible')
  })
})

it('visits the settings page', () => {
  cy.visit('/settings').contains('Settings')
})

describe('Settings page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  it('it check welcome title', () => {
    cy.get('#title')
      .should('be.visible')
      .contains('Settings')
  })
})

describe('HeaderComponent', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check header', () => {
    cy.get('#header')
      .should('be.visible')
  })

  it('it check logo', () => {
    cy.get('#logo')
      .should('be.visible')
      .contains('Calculator App')
  })

  it('it check unordered-list', () => {
    cy.get('#unordered_list')
      .children()
      .children('.list_item')
      .should('be.visible')
  })
})
