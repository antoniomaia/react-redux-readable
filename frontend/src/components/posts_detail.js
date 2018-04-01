import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import PostsListItem from './posts_list_item';

class PostsDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);         
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="form-buttons">
                    <Link to="/" className="button back-button">Back</Link>
                    <button
                        className="button danger delete-button"
                        onClick={this.onDeleteClick.bind(this)}
                    >Delete
                </button>
                </div>
                <div className="post-item">
                    <PostsListItem key={post.id} post={post} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsDetail);