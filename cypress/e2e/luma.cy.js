/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("add_items",()=>{
  let randomitemtoselect=Math.floor(Math.random()*4);
    
    cy.get('.products-grid.grid').find('.product-item').eq(randomitemtoselect).click()
    
    let randomsize=Math.floor(Math.random()*3);
    let randomcolor=Math.floor(Math.random()*2);
   
    {
     cy.get('.swatch-attribute.size').find('.swatch-option').eq(randomsize).click();
     cy.get('.swatch-attribute.color').find('.swatch-option.color').eq(randomcolor).click();
     cy.get('#product-addtocart-button').click();

     cy.get(".stock > span")
     .invoke("text")
     .then((theText) => {
       if (theText == "In stock") {
         cy.get("#product-addtocart-button").click();
       } else {
         alert("sorry this item is not there ");
       }
     });
  }
  cy.wait(3000); 
})


describe('Add random item from certain category', () => {
  it('add random item from women category', () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get('#ui-id-4').click()
    cy.add_items();
    cy.wait(5000);
  
  })
});
it.skip('add random item from men category', () => {
  cy.visit("https://magento.softwaretestingboard.com/")
  cy.wait(3000);
  cy.get('#ui-id-5').click()
  cy.add_items();
  cy.wait(3000);
});


it('add random item from gear category', () => {
  cy.visit("https://magento.softwaretestingboard.com/")
  cy.wait(3000);
  cy.get('#ui-id-6').click()
  let RandomItemToSelect = Math.floor(Math.random() * 4);

    cy.get(".product-items")
      .find(".product-item")
      .eq(RandomItemToSelect)
      .click();

    cy.get(".stock > span")
      .invoke("text")
      .then((theText) => {
        if (theText == "In stock") {
          cy.get("#product-addtocart-button").click();
        } else {
          alert("sorry this item is not there ");
        }
      });
    cy.wait(5000);
  });
  
  
describe('login test case', () => {
  it('log in with correct username and password', () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type("idrandom701@gmail.com");
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Tas123456");
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();

  });
});