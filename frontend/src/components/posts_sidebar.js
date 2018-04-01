import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchCategoryPosts, fetchPosts } from '../actions';

class PostsSidebar extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        const { categories, fetchCategoryPosts } = this.props;
        if (categories) {
            return _.map(categories, category => {
                return (
                    <li key={category.name} className="category-section">
                        <Link
                            to={`/${category.path}`}
                            onClick={() => fetchCategoryPosts(category.path)}
                        >
                            {category.name}
                        </Link>
                    </li>
                );
            });
        }
        return (
            <div>Loading...</div>
        );
    }

    render() {
        return (
            <div className="sidebar-column">
                <Link className="new-post-button" to="/posts/new">
                    New Post
                    </Link>
                <ul>
                    <li className="category-section">
                        <Link to="/" >All</Link>
                    </li>
                    
                    {this.renderCategories()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categories: state.categories }
}

export default connect(mapStateToProps, { 
    fetchCategories,
    fetchCategoryPosts,
    fetchPosts
 })(PostsSidebar);