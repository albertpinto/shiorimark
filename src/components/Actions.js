import React from "react";

const actions = props => {
  return (
    <section id="actions" className="py-4 mb-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a
              href="#"
              className="btn btn-success btn-block"
              data-toggle="modal"
              data-target="#addCategoryModal"
            >
              <i className="fas fa-plus"></i> Add Category
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="#"
              className="btn btn-primary btn-block"
              data-toggle="modal"
              data-target="#addPostModal"
            >
              <i className="fas fa-plus"></i> Add Bookmark
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="#"
              className="btn btn-warning btn-block"
              data-toggle="modal"
              data-target="#addUserModal"
            >
              <i className="fas fa-plus"></i> Add User
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default actions;
