export const userNameField = () => cy.get('[data-test="username"]')
export const passwordField = () => cy.get('[data-test="password"]')
export const loginBtn = () => cy.get('[data-test="login-button"]')


export const performLogin = (userName, password) =>{
    userNameField().type(userName)
    passwordField().type(password)
    loginBtn().click()
}