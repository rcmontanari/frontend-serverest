describe('Testes da tela de login do site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, {log: false})
  })

  it('Validar que a senha é obrigatória ao realizar login', () => {
      cy.get('[data-testid="email"]').type(Cypress.env('email'))
      cy.get('[data-testid="entrar"]').click()

    cy.contains('.alert > :nth-child(2)', 'Password é obrigatório')
      .should('be.visible')
  })

  it('Validar o login com sucesso de um usuário', () => {
    cy.login(Cypress.env('email'), Cypress.env('senha'))

    cy.contains('button', 'Logout').should('be.visible')
  })
})