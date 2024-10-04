document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productPrice = button.getAttribute('data-product-price');
            const quantity = 1; // Example quantity

            const cartItem = {
                product_id: productId,
                quantity: quantity,
                price: productPrice
            };

            fetch('http://localhost:3000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item added to cart successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    });
});
