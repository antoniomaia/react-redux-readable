import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchCategoryPosts } from '../actions';
import PostsListItem from './posts_list_item';

class PostsList extends Component {
    componentWillMount() {
        if(this.props.match.params.category) {
            this.props.fetchCategoryPosts(this.props.match.params.category);
        } else {
            this.props.fetchPosts();
        }
    }

    renderPosts() {
        const { posts } = this.props;

        if (_.isEmpty(posts)) {
            return <div>No posts found!</div>
        }

        return _.map(posts, post => {
            return (
                <PostsListItem key={post.id} post={post} />
            );
        });    
    }

    render() {
        return (
            <div className="column posts-column">
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { 
    fetchPosts, 
    fetchCategoryPosts 
})(PostsList);