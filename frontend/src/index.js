import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Header from './components/Header';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsCategory from './components/posts_category';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>        
            <div>
                <Header />
                <div className="main-content">
                    <PostsCategory />
                    <Switch>
                        <Route path="/posts/new" component={PostsNew} />
                        <Route path="/" component={PostsIndex} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
