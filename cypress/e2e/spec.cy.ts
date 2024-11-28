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

describe('Product Details Page Test', () => {
  it('should load and display product details correctly', () => {
    const productId = 1; // Use a valid product ID for the test
    cy.visit(`http://localhost:3000/product/${productId}`);

    // Wait for the API call to fetch product details
    cy.intercept('GET', `https://fakestoreapi.com/products/${productId}`).as('getProduct');
    cy.wait('@getProduct');

    // Check if the product title is displayed
    cy.get('h2').contains('Product details page').should('be.visible');

    // Check if the product image, name, category, price, and description are displayed
    cy.get('[data-testid="product-image"]').should('be.visible');
    cy.get('[data-testid="product-name"]').should('be.visible');
    cy.get('[data-testid="product-category"]').should('be.visible');
    cy.get('[data-testid="product-price"]').should('be.visible');
    cy.get('[data-testid="product-description"]').should('be.visible');


    cy.get('[data-testid="add-to-cart-button"]').should('be.visible').click();

    cy.get('.Toastify__toast').contains('has been added to your cart!').should('be.visible');
  });
});

describe('Cart Items Display', () => {
  it('should display cart items when cart is not empty', () => {

    cy.visit(`http://localhost:3000/cart`);
    cy.get('[data-testid="cart-container"]').should('exist').and('be.visible');

    cy.get('[data-testid^="cart-title"]').contains('Cart').should('be.visible');

    cy.get('[data-testid^="cart-ship"]').should('exist');
    cy.get('[ data-testid="cart-total-amount"]').should('exist');





  });
});


