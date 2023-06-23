import Button from "./Button";

describe('Button', () => {
  beforeEach(() => {
    cy.mount(<Button handleClick={()=>{}}> </Button>)
  })

  it('renders without errors', () => {
    cy.get('.button').should('exist')
  })

  it('calls handleClick when clicked', () => {
    const handleClick = cy.stub().as('clicker')
    cy.mount(<Button handleClick={handleClick} >Click me</Button>)

    cy.get('button').click()
    cy.get('@clicker').should('have.been.calledOnce')
  })
})

