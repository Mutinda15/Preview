// fetchData.js
import supabase from './supabaseClient';

async function fetchCartItems() {
    const { data, error } = await supabase
        .from('cart_items')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Cart Items:', data);
    }
}

fetchCartItems();
