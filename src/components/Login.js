import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'


//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required =value =>(value ?undefined:"Required")
const onSubmit = async values => {
  //await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const login = () => {
  return (
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
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

  


  export default login;