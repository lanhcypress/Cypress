describe('Elements-Check checkbox, radiobutton, dropdown', () => {
  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com');

    cy.get('#dropdown-checkboxes-radiobuttons')
      .scrollIntoView({
        duration: 1000,
        easing: 'linear'
      })
      .invoke('removeAttr', 'target') // Bẻ gãy tính năng mở tab mới của thẻ <a>
      .click();
    cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons');
  })
  /** * afterEach(() => {
     cy.go('back'); // Quay trở lại trang trước đó
   }); */
  it('Process dropdown menu', () => {
    cy.get('#dropdowm-menu-1').select('c#');
    cy.get('#dropdowm-menu-1').should('have.value', 'c#');
  });
  it('Process checkbox', () => {
    cy.get('#checkboxes > label:nth-child(5) > input[type=checkbox]').check().should('be.checked');
    cy.get('#checkboxes > label:nth-child(5) > input[type=checkbox]').uncheck().should('not.be.checked');
  });

  it('Process radiobutton', () => {
    cy.get('#radio-buttons').find('input[value="blue"]').check().should('be.checked');
  })
  it('Process selected and disabled', () => {
    cy.get('[value="cabbage"]').should('be.disabled');
    cy.get('#fruit-selects').select('apple').should('have.value', 'apple');
  });
})