import React, { Component } from 'react';
import PostsShow from './posts_show';
import PostsSidebar from './posts_sidebar';

class PostsIndex extends Component {
    render() {
        return (
            <div className="main-content">
                <PostsSidebar />
                <PostsShow />
            </div>
        );
    }
}

export default PostsIndex;