import React from 'react'
import Login from './Login'

describe('<Login />', () => {
  beforeEach(()=>{
    cy.mount(<Login />)
  })

  it('form input',()=>{
    const formInputEmail = cy.get('form input#email');
    formInputEmail.should('have.value', '');
    formInputEmail.type('eve.holt@reqres.in')
      .should('have.value', 'eve.holt@reqres.in');

      const formInputPassword = cy.get('form input#password');
      formInputPassword.should('have.value', '');
      formInputPassword.type('cityslicka')
        .should('have.value', 'cityslicka');
  })
})