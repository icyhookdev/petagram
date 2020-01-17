describe('petgram', () => {
  it('it works?', () => {
    cy.visit('/');
  });

  it('navigate to a category', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });
});
