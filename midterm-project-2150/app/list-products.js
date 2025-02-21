document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-primary');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        alert('Product added to cart!');
      });
    });
  });
  