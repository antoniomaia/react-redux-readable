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
import PostsNew from './components/posts_new';
import PostsIndex from './components/posts_index';
import PostsDetail from './components/posts_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>        
            <div>
                <Header />
                <Switch>
                    <Route path="/:category" exact component={ props => <PostsIndex {...props} />} />
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/posts/:id" component={PostsDetail} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();