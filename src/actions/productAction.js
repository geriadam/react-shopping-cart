import { FETCH_PRODUCTS } from '../types';

export const fetchProducts = () => async (dispatch) => {
    const products = await fetch("/api/products");
    const data = await products.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    })
}
