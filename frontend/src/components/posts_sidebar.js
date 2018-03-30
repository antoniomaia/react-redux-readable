import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';

class PostsSidebar extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
       return _.map(this.props.categories, category => {
            return (
                <li key={category.name} className="category-section">
                    <p>{category.name}</p>
                </li>  
            );
       });
    }

    render() {
        return (
            <div className="sidebar-column">
                <Link className="new-post-button" to="/posts/new">
                    New Post
                    </Link>
                <ul>
                    <li>SHOW ALL</li>
                    {this.renderCategories()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchCategories })(PostsSidebar);