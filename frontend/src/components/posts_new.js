import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="">
            <label>{field.label}</label>
                <input
                    className=""
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
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
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);