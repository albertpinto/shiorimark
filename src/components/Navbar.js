import React from "react";
const navbar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          {props.appName}
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="Bookmarks.html" className="nav-link">
                Bookmarks
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="categories.html" className="nav-link">
                Categories
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="users.html" className="nav-link">
                Users
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown mr-3">
              <a
                href="users.html"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fas fa-user"></i> Welcome {props.userName}
              </a>
              <div className="dropdown-menu">
                <a href="profile.html" className="dropdown-item">
                  <i className="fas fa-user-circle"></i> Profile
                </a>
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-cog"></i> Settings
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="login.html" className="nav-link">
                <i className="fas fa-user-times"></i> {props.status}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
