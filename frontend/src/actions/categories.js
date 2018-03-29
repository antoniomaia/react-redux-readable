import axios from 'axios';

export const FETCH_CATEGORIES = 'fetch_categories';

const ROOT_URL = 'http://localhost:3001';
const AUTH_HEADERS = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json' };

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/*
Actions for category
*/

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}