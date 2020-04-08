import React from "react";

const login = (props) => {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Account Login</h4>
              </div>
              <div className="card-body">
                <form action="index.html">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control"></input>
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
