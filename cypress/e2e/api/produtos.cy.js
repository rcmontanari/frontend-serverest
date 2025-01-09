describe('Testes do endpoint /usuarios', () => {

    const API_URL = Cypress.env('API_BASE_URL')
    const ID_PRODUTO = Cypress.env('ID_PRODUTO')

    it.only('Validar a busca de um produto pelo id', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}/produtos/${ID_PRODUTO}`
        }).should(({ status, body }) => {
            const { nome, preco, descricao, quantidade } = body
            
            expect(status).to.eq(200)
            expect(nome).to.eq('TekPix 1736284288067')
            expect(preco).to.eq(580)
            expect(descricao).to.eq('Tekpix 2008')
            expect(quantidade).to.eq(5)
        })
    })
})