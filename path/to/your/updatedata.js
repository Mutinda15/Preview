// updateItem.js
import supabase from './supabaseClient';

async function updateCartItem(id, quantity) {
    const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity: quantity })
        .match({ id: id });

    if (error) {
        console.error('Error updating data:', error);
    } else {
        console.log('Item updated:', data);
    }
}

updateCartItem('some-id', 5);
