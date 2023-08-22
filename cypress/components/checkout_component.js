export const firstNameField = () => cy.get('[data-test="firstName"]')
export const lastNameField = () => cy.get('[data-test="lastName"]')
export const postalCodeField = () => cy.get('[data-test="postalCode"]')
export const continueBtn = () => cy.get('[data-test="continue"]')


export const performCheckout = (firstName, lastName, postalCode) =>{
    firstNameField().type(firstName)
    lastNameField().type(lastName)
    postalCodeField().type(postalCode)
    continueBtn().click()
}