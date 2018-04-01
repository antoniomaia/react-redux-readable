import axios from 'axios';
import { ROOT_URL, AUTH_HEADERS } from '../utils/constants';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_CATEGORY_POST = 'fetch_category_post';

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/*
Actions for posts
*/

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    axios.delete(`${ROOT_URL}/posts/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}

export function fetchCategoryPosts(category) {
    const request = axios.get(`${ROOT_URL}/${category}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}