import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import moment from 'moment';

class PostsShow extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <article className="post" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                    <section>
                        <p>
                            By <strong>{post.author}</strong> in {post.category},
                                posted on
                                <time> {moment(post.timestamp).format("dddd, MMMM Do YYYY")} </time>
                        </p>
                    </section>
                    <section>
                        <p>{post.body}</p>
                    </section>
                </article>
            );
        });
    }

    render() {
        return (
            <div className="posts-column">
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsShow);