
//locator
    // css selector
    //xpath -> needs plugin
    import { describe, it } from 'mocha';

//const { beforeEach } = require("mocha")

    // get method
        // cy.get(locator)

    //css selector type
        // tag id
        // tag class
        // tag atribute
        // tag class atribute


    //id
        // #id
        // #oneC_searchAutoComplete
    //class
        // input.search_query
    //class atribute
        // input.search_query[name='search_query']
describe('launch google',() =>{
    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })

    it('open cypress document',()=>{
        cy.get('#APjFqb').type('cypress documentation{enter}');
        //cy.get('#yDmH0d > c-wiz > div > div > c-wiz > div > div > div > div.DRc6kd.bdn4dc > div.QlyBfb > button').click();
        cy.contains('Document');
    })
})