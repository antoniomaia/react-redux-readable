import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShowItem extends Component {
    componentDidMount() {
        // if(!this.props.post)
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

        if(!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/" className="button">Back</Link>
                <button
                className="button"
                onClick={this.onDeleteClick.bind(this)} 
                >Delete
                </button>
                <h3>{post.title}</h3>
                <h4>{post.author}</h4>
                <h6>{post.category}</h6>
                <p>{post.body}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShowItem);