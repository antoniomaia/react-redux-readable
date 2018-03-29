import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://localhost:3001';
const AUTH_HEADERS = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json' };

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