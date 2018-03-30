import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';

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
        console.log(values);
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
                        name="content"
                        component={this.renderField}
                    />
                      <Field
                        label="Category"
                        name="category"
                        component={field => this.renderCategoryFields(field)}
                    />
                    <button type="submit" className="submit-button">Save</button>
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
    if (!values.content) {
        errors.content = "Enter some content";
    }
    if (!values.categories) {
        errors.category = "Choose a category";
    }
    // if errors is empty, the form is fine to submit
    return errors;
}

function mapStateToProps(state) {
    return { categories: state.categories }
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(mapStateToProps, {
        fetchCategories
    })(PostsNew)
);