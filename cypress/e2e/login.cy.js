describe('Login', () => {
  beforeEach(() => {
    cy.acessarHome()
  })

  it('Login realizado com sucesso', () => {
    const usuario = {
      email: 'teste.qa@gmail.com',
      password: 'Teste@123!'
    }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Login realizado com sucesso!')



  });

  it('Login com senha inválida', () => {
    const usuario = {
      email: 'teste.qa@gmail.com',
      password: 'Teste123!'
    }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Credenciais inválidas. Verifique seu e-mail e senha.')
  });

  it('Login com email inválido', () => {
    const usuario = {
      email: 'teste@gmail.com',
      password: 'Teste@123!'
    }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Credenciais inválidas. Verifique seu e-mail e senha.')

  });

  it('Login com dados em branco', () => {
    cy.submitBtn('Acessar')
    cy.verificarMsgErro('O campo de e-mail é obrigatório.')
    cy.verificarMsgErro('O campo de senha é obrigatório.')

  });

});

