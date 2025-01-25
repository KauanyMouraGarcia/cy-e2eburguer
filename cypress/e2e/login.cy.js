import loginData from "../fixtures/login.json"

describe('Login', () => {
  beforeEach(() => {
    cy.acessarHome()
  })

  it('Login realizado com sucesso', () => {
    const usuario = loginData.perfilGestao
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Login realizado com sucesso!')
    cy.verificarUsuarioLogado(usuario.name)


  });

  it('Login com senha inválida', () => {
    const usuario = { ...loginData.perfilGestao, password: "Teste123" }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Credenciais inválidas. Verifique seu e-mail e senha.')
  });

  it('Login com email inválido', () => {
    const usuario = { ...loginData.perfilGestao, email: "gestao@burguer.com.br" }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Credenciais inválidas. Verifique seu e-mail e senha.')

  });

  it('Login com dados em branco', () => {
    cy.submitBtn('Acessar')
    cy.verificarMsgErro('O campo de e-mail é obrigatório.')
    cy.verificarMsgErro('O campo de senha é obrigatório.')

  });

  it('Login perfil salão realizado com sucesso e redirecionado para a página com opção de usar o app', () => {
    const usuario = loginData.perfilSalao
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn('Acessar')
    cy.verificarMsgToast('Acesse através do app.')
    cy.verificarPagina('/app-info', 'Acesso pelo APP E2E Burguer')



  });

});

