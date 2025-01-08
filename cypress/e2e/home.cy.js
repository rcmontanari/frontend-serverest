describe('Testes da homepage do site', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, {log: false})
    })

    it('Validar que um produto já está cadastrado com o mesmo nome', () => {
        cy.get('[data-testid="cadastrarProdutos"]').click()
        cy.get('[data-testid="nome"]').type('Calça jeans')
        cy.get('[data-testid="preco"]').type('189')
        cy.get('[data-testid="descricao"]').type('Calça jeans marca Hering tamanho M')
        cy.get('[data-testid="quantity"]').type('2')
        cy.get('[data-testid="imagem"]').selectFile('./cypress/fixtures/calça jeans.jpg')
        cy.get('[data-testid="cadastarProdutos"]').click()

        cy.contains('.alert > :nth-child(2)', 'Já existe produto com esse nome')
            .should('be.visible')
    })

})