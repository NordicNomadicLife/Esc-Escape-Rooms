describe('Hacker Escape Rooms - UI Test', () => {
  it('Kontrollerar att webbsidan är uppe och har rätt textinnehåll', () => {
    
    cy.visit('http://localhost:5500');

    cy.get('h1').should('be.visible');

    cy.get('h1').should('contain.text', 'Hacker Escape Rooms');
  });
});
