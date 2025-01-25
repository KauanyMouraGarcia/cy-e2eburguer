Cypress.Commands.add('acessarHome', () => {
    cy.visit('/');
    //checkpoint
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')
})

Cypress.Commands.add('preencherFormLogin', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})

Cypress.Commands.add('submitBtn', (textoBtn) => {
    cy.contains('button[type=submit]', textoBtn).click();
})

Cypress.Commands.add('verificarMsgToast', (msgEsperada) => {
    cy.get('.Toastify__toast-body')
        .should('be.visible')
        .and('have.text', msgEsperada);
})

Cypress.Commands.add('verificarMsgErro', (msgEsperada) => {
    cy.get('[class^="home_errorText"]')
        .should('be.visible')
        .and('contain.text', msgEsperada)
        .and('have.css', 'color', 'rgb(230, 57, 70)')
})

Cypress.Commands.add('verificarPagina', (rota, tituloPagina) => {
    cy.url().should('include', `${rota}`)
    cy.contains('h1', tituloPagina)

})

Cypress.Commands.add('verificarUsuarioLogado', (nome) => {
    const nomeUsuario = nome.split(' ')[0]
    cy.get('[data-testid="user-greeting"]')
        .should('be.visible')
        .and('contain.text', `Olá, ${nomeUsuario}!`)
})


