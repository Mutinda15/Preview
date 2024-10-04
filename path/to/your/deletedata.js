// deleteItem.js
import supabase from './supabaseClient';

async function deleteCartItem(id) {
    const { data, error } = await supabase
        .from('cart_items')
        .delete()
        .match({ id: id });

    if (error) {
        console.error('Error deleting data:', error);
    } else {
        console.log('Item deleted:', data);
    }
}

deleteCartItem('some-id');
