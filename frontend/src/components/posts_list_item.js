import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { formatTimestamp } from '../utils/helpers';

class PostsListItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <article className="post" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <section>
                <p>{post.body}</p>
                </section>
                <section>                    
                    <p className="post-info">
                        <small> By <strong>{post.author}</strong> in {post.category},
                                posted on
                            {formatTimestamp(post.timestamp)}
                        </small>
                    </p>
                </section>
            </article>
        );
    }
}

export default connect(null, { fetchPost })(PostsListItem);