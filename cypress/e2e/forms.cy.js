const { Input } = require("@mui/material")

describe('Form tests', () => {
      beforeEach(() => {
        cy.visit('/forms')
      })
      it ('Test subscription form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest ('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('roland@gmail.com')
        cy.contains(/Successfully subbed:roland@gmail.com!/i).should('not.exist')    
        cy.getDataTest ('subscribe-button').click() 
        cy.contains(/Successfully subbed: roland@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: roland@gmail.com!/i).should('not.exist')


        cy.get('@subscribe-input').type('roland@gmail.io')
        cy.getDataTest ('subscribe-button').click()   
        cy.contains(/Invalid email: roland@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: roland@gmail.io!/i).should('not.exist')
        cy.contains(/fail!/i).should('not.exist')

        cy.getDataTest ('subscribe-button').click()  
        cy.contains(/fail!/i).should('exist')


      })  





})