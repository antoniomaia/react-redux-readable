import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchCategories } from '../actions';
import { guuid } from '../utils/helpers';

class PostsNew extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-input ${touched && error ? 'invalid' : ''}`;

        return (
            <div className="form-row">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <p>{touched ? error : ''}</p>
            </div>
        );
    }

    renderCategoryFields(field) {
        const { categories } = this.props;
        const { meta: { touched, error } } = field;
        const className = `form-input ${touched && error ? 'invalid' : ''}`;

        return (
            <div className="form-row">
                <label>{field.label}</label>
                <select {...field.input} className={className}>
                    <option value="" disabled>-- Select Category --</option>
                    {_.map(categories, category => (
                        <option key={category.name} value={category.name} >
                            {category.name}
                        </option>
                    ))}
                </select>
                <p>{touched ? error : ''}</p>
            </div>

        );
    }

    onSubmit(values) {
        values['id'] = guuid();
        values['timestamp'] = Date.now();

        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-wrapper">
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Author"
                        name="author"
                        component={this.renderField}
                    />                
                    <Field
                        label="Message"
                        name="body"
                        component={this.renderField}
                    />
                      <Field
                        label="Category"
                        name="category"
                        component={field => this.renderCategoryFields(field)}
                    />
                    <div className="form-buttons">
                        <button type="submit" className="button submit-button">Save</button>
                        <Link to="/" className="button cancel-button danger">Cancel</Link>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.author) {
        errors.author = "Enter a name";
    }
    if (!values.body) {
        errors.body = "Enter some content";
    }
    if (!values.category) {
        errors.category = "Choose a category";
    }
    // if errors is empty, the form is fine to submit
    return errors;
}

function mapStateToProps(state) {
    return { categories: state.categories }
}

export default reduxForm({
    validate,  // validation function given to redux-form
    form: 'PostsNewForm'  // a unique identifier for this form
})(
    connect(mapStateToProps, {
        fetchCategories,
        createPost
    })(PostsNew)
);