describe('Testes do endpoint /usuarios', () => {

    const API_URL = Cypress.env('API_BASE_URL')
    const ID_USER = Cypress.env('ID_USER')

    it('Validar a busca dos produtos pelo id', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}/usuarios/${ID_USER}`
        }).should(({ status, body }) => {
            const { nome, email, password, administrador } = body
            
            expect(status).to.eq(200)
            expect(nome).to.eq('Ricardo Montanari')
            expect(email).to.eq('montanari.rc@gmail.com')
            expect(password).to.eq('teste123')
            expect(administrador).to.eq('true')
        })
    })

    it('Validar que um usuário não pode ser cadastrado com um email existente', () => {
        cy.request({
            method: 'POST',
            url: `${API_URL}/usuarios`,
            body: {
                "nome": "Fulano da Silva",
                "email": "montanari.rc@gmail.com",
                "password": "teste",
                "administrador": "true"
              },
              failOnStatusCode: false
        }).should(({ body }) => {
            const { status, message } = body

            expect(message).to.eq('Este email já está sendo usado')
        })
    })

})