describe('Home Page Test', () => {
  it('should load and display product cards correctly', () => {
    cy.visit('http://localhost:3000');

    // Check if the title is visible
    cy.get('h2').contains('Products').should('be.visible');

    cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts');
    cy.wait('@getProducts');

    cy.get('[data-testid^="product-card-"]').should('have.length.greaterThan', 0);

    cy.get('[data-testid^="product-card-"]').each(($product) => {
      cy.wrap($product).find('[data-testid^="product-name-"]').should('be.visible');

      cy.wrap($product).find('[data-testid^="product-price-"]').should('be.visible');

      cy.wrap($product).find('[data-testid^="product-image-"]').should('be.visible');

      cy.wrap($product).find('[data-testid^="view-details-button-"]').should('be.visible');
    });
  });
});
