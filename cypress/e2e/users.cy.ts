/// <reference types="cypress" />


describe('get all users', () => {
  it('test get user api',()=>{
    cy.intercept('https://reqres.in/api/users')
    cy.intercept('GET', '/users')
    cy.intercept({
      method: 'GET',
      url: '/users',
      hostname: 'localhost',
    })

  })
})

// describe('TODO api testing', () => {
//   it('fetches Todo items - GET', () => {
//       cy.request('https://reqres.in/api/users').as('todoRequest');
//       cy.get('@userRequest').then(users => {
//         cy.should("")
//           expect(users.status).to.eq(200);
//           assert.isArray(users.body, 'Todos Response is an array')
//       });
//   });
// });

////////////////////////////////////////////////////
