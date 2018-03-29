import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
    categories: CategoriesReducer
});

export default rootReducer;