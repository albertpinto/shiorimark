import React, { Component } from "react";
import axios from 'axios';

class Navbar extends Component {
  state = {
    user: "please login",
    status: "Login",
    url: this.props.url
  };
  componentWillMount() {
    const userURL = this.state.url + "users/login";
    console.log(userURL);
    axios({
      method: 'post',
      url: userURL,
      data: {
        "email":"EriGardiner@gmail.com",
        "password":"Changme"
      }
    }).then(response => {
      console.log (response.data.user.name)
          this.setState({
          user: response.data.user.name,
          status: "Logout"
        });
      })
      .catch(Error => {
        console.log (Error)
        this.setState({
          user: "Could not Logon, please check user/password"
        });
      });
    }

  // axios({
  //     method: "get",
  //     url: "http://localhost:4000/users" 
  //   })
  //     .then(response => {  
  //       console.log(response);
  //     })
  //     .catch(Error => {
  //       console.log(Error)
  //     });
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            {this.props.appName}
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
                  <i className="fas fa-user"></i> Welcome {this.state.user}
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
                  <i className="fas fa-user-times"></i> {this.state.status}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
//Working solution
// componentWillMount() {
//   const userURL = this.state.url + "users/login";
//   //console.log(userURL);
//   axios
//     .post("https://jsonplaceholder.typicode.com/users", {
//       name: "Albert Pinto"
//     }).then(response => {
//         const data= response.data;
//         console.log(data.name);       
//       this.setState({
//         user: data.name,
//         status: "Logout",
//       });
//       console.log(this.state.user);    
//     });   
// }