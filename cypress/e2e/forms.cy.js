const { Input } = require("@mui/material")

describe('Form tests', () => {
      beforeEach(() => {
        cy.visit('/forms')
      })
      it ('Test subscription form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest ('subscribe-form').find('input').type('roland@gmail.com')
        cy.contains(/Successfully subbed:roland@gmail.com!/i).should('not.exist')    
        cy.getDataTest ('subscribe-button').click() 
        cy.contains(/Successfully subbed: roland@gmail.com!/i).should('exist')
        cy.wait(3000)


      })  





})