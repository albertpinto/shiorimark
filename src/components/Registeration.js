import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header"

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      token: "",
    };

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handlestate = this.handlestate.bind(this);
  }

  handleRegistration(values) {
    const { name, email, password } = values;
    axios
      .post("http://localhost:4000/users/", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          this.handlestate(response.data);
          console.log("state:", this.state);
          this.props.handleStateInApp(response.data);
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        console.log("Registration error", error);
      });
    //event.preventDefault();
  }
  handlestate(data) {
    this.setState({
      user: data.user,
      token: data.token,
    });
  }
  render() {
    const required = (value) => (value ? undefined : "Required");
    const onSubmit = (values) => {
      //window.alert (values);
      const { name, email, password, confirmpassword } = values;
      window.alert(
        `Name:${name}\nEmail:${email}\nPassword:${password}\nConfirmPassword:${confirmpassword}`
      );
      this.handleRegistration(values);
    };
    return (
      <React.Fragment>
        <Header
          type="Registration"
          category="fas fa-user"
          colorName="py-2 bg-primary text-white"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <Form onSubmit={onSubmit}>
                {({ handleSubmit, submitting, values }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-header">
                        <h4>Account Registration</h4>
                      </div>
                      <div className="card-body">
                        <Field
                          name="name"
                          component="input"
                          placeholder="First Name Last Name"
                          className="form-control"
                          validate={required}
                        >
                          {({ input, meta, placeholder }) => (
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                {...input}
                                className="form-control"
                                type="text"
                                placeholder={placeholder}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field
                          name="email"
                          component="input"
                          placeholder="Email"
                          className="form-control"
                          validate={required}
                        >
                          {({ input, meta, placeholder }) => (
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                {...input}
                                className="form-control"
                                type="text"
                                placeholder={placeholder}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field
                          name="password"
                          component="input"
                          placeholder="Password"
                          className="form-control"
                          validate={required}
                        >
                          {({ input, meta, placeholder }) => (
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                {...input}
                                type="password"
                                className="form-control"
                                placeholder={placeholder}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field
                          name="confirmpassword"
                          component="input"
                          placeholder="Confirm Password"
                          className="form-control"
                          validate={required}
                        >
                          {({ input, meta, placeholder }) => (
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input
                                {...input}
                                type="password"
                                className="form-control"
                                placeholder={placeholder}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Registration;
