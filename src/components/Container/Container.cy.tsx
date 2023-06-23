import React from 'react'
import Container from './Container'

describe('Container', () => {
  it('renders children correctly', () => {
    const childText = 'Hello, world!';
    cy.mount(<Container><p>{childText}</p></Container>);
    cy.get('.container > p').should('have.text', childText);
  });
});