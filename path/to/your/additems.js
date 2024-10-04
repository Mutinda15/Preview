// addItem.js
import supabase from './supabaseClient';

async function addCartItem(productId, quantity, price) {
    const { data, error } = await supabase
        .from('cart_items')
        .insert([{ product_id: productId, quantity: quantity, price: price }]);

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Item added:', data);
    }
}

addCartItem('product123', 2, 2000);
