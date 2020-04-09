import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


const login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-header">
                    <h4>Account Login</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>First Name</label>
                      <Field
                        name="firstName"
                        component="input"
                        placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <Field
                        name="lastName"
                        component="input"
                        placeholder="Last Name"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
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