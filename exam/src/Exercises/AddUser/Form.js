import React, { Component } from 'react';

const FormContext = React.createContext();
export const ErrorMessage = ({ name }) => {
  const { errors, touched } = React.useContext(FormContext);
  return errors[name] && touched[name] ? (
    <p style={{ color: 'red', margin: 0 }}>{errors[name]}</p>
  ) : null;
};
export const Field = ({ name, type, ...props }) => {
  const { values, handleChange, handleBlur } = React.useContext(FormContext);
  if (type === 'radio') {
    return (
      <input
        {...props}
        checked={values[name] === props.value}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  } else {
    return (
      <input
        {...props}
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  }
};
class Form extends Component {
  state = {
    submitting: false,
    values: this.props.initialValues || {},
    errors: {},
    touched: {}
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => {
      const newValues = {
        ...prevState.values,
        [name]: value
      };
      const errors = this.props.validate(newValues);
      return {
        values: newValues,
        errors,
        touched: {
          [name]: true
        }
      };
    });
  };

  setSubmitting = s => {
    this.setState({
      submitting: s
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.props.validate(this.state.values);
    if (Object.keys(errors).length === 0) {
      this.setSubmitting(true);
      this.props.onSubmit(this.state.values, {
        setSubmitting: this.setSubmitting
      });
    } else {
      this.setState({ errors });
    }
  };

  handleBlur = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      touched: {
        ...prevState.touched,
        [name]: true
      }
    }));
  };

  render() {
    const value = {
      values: this.state.values,
      errors: this.state.errors,
      touched: this.state.touched,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleBlur: this.handleBlur,
      submitting: this.state.submitting
    };
    return (
      <FormContext.Provider value={value}>
        {this.props.children(value)}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </FormContext.Provider>
    );
  }
}

export default Form;
