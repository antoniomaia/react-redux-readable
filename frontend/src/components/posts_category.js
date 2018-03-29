import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';

class PostsCategory extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
       return _.map(this.props.categories, category => {
            return (
                <div key={category.name}>
                {category.name}
                </div>
            );
       });
    }

    render() {
        return (
            <div>
              {this.renderCategories()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchCategories })(PostsCategory);