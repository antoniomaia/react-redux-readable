import React, { Component } from 'react';
import PostsList from './posts_list';
import PostsSidebar from './posts_sidebar';

class PostsIndex extends Component {
    render() {
        return (
            <div className="main-content">
                <PostsSidebar />
                <PostsList {...this.props} />
            </div>
        );
    }
}

export default PostsIndex;