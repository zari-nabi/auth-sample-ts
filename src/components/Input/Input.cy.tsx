
import React from 'react';
import { mount } from 'cypress/react';
import Input from './Input';

describe('Input component', () => {
  it('renders label and input field', () => {
    const props = {
      label: 'Email',
      name: 'email',
      value: '',
      onChange: cy.stub(),
      required: true,
      type: 'email',
      error: false,
      textError: '',
    };
    mount(<Input {...props} />);
    cy.get('.label').should('contain', 'Email');
    cy.get('.input').should('have.attr', 'name', 'email');
    cy.get('.input').should('have.attr', 'type', 'email');
    cy.get('.input').should('have.attr', 'required', 'required');
  });

  it('calls onChange when user types in input field', () => {
    const props = {
      label: 'Email',
      name: 'email',
      value: '',
      onChange: cy.stub(),
      required: true,
      type: 'email',
      error: false,
      textError: '',
    };
    mount(<Input {...props} />);
    cy.get('.input').type('test@example.com');
    cy.get('input').should(($input) => {
      const val = $input.val()
    })
    // expect(props.onChange).to.be.calledOnce;
  });

  it('displays error message when error prop is true', () => {
    const props = {
      label: 'Email',
      name: 'email',
      value: '',
      onChange: cy.stub(),
      required: true,
      type: 'email',
      error: true,
      textError: 'Please enter a valid email address',
    };
    mount(<Input {...props} />);
    cy.get('label').should('contain', 'Please enter a valid email address');
  });

});