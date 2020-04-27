import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import Header from './Header'
import Footer from '../components/Footer'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handlestate = this.handlestate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    //this.handleRegister =this.handleRegister(this);
    this.state = {
      user: {},
      token: "",
    };
  }
  handlestate(data) {
    this.setState({
      user: data.user,
      token: data.token,
    });
  }

  handleLogin(values) {
    const { email, password } = values;

    axios
      .post("http://localhost:4000/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          this.handlestate(response.data);
          this.props.handleStateInApp(response.data)
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        console.log("Login error", error);
      });
    //event.preventDefault();
  }

  handleRegister() {
    //window.alert ('register')
    this.props.history.push("/register");
  }

  render() {
    const required = (value) => (value ? undefined : "Required");
    const onSubmit = (values) => {
      this.handleLogin(values);
    };
    return (
      <React.Fragment>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div class="container">
        <a href="/" class="navbar-brand">Shiorimark</a>
      </div>
     </nav>
      <Header type='Login' category="fas fa-user" colorName ='py-2 bg-primary text-white'/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Form onSubmit={onSubmit}>
              {({ handleSubmit, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className="card">
                    <div className="card-header">
                      <h4>Account Login</h4>
                    </div>
                    <div className="card-body">
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
                      <div class="row">
                        <div class="col-md-6">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="btn btn-primary btn-block"
                          >
                            Login
                          </button>
                        </div>
                        <div class="col-md-6">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick= {this.handleRegister.bind(this)}                          >
                            Register
                          </button>
                        </div>
                      </div>
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

export default Login;
