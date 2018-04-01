import axios from 'axios';
import { ROOT_URL, AUTH_HEADERS } from '../utils/constants';

export const FETCH_CATEGORIES = 'fetch_categories';

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