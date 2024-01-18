import { describe, it } from 'mocha';

describe('xpath test',()=>{
    beforeEach(()=>{
       
    })

    it('open cypress document',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress documentation{enter}');
        cy.wait(50000);
        
        cy.get('a').filter(':contains("Document")');
    })
})