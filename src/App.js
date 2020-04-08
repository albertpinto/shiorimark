import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Bookmarks from "./components/Bookmarks";
import Footer from "./components/Footer";
import Login from "./components/Login";

const url ="http://localhost:4000/"

class App extends Component {
  state = {
    status: "Login"
  };

 
  render() {
    return (
      <div>
        <Navbar
          appName="Shiorimark"
          userName="Albert Pinto"
          status={this.state.status}
          url={url}
        />
        <Header type="Home" colorName="py-2 bg-primary text-white"/>
        <Actions />
        <BrowserRouter>
          <switch>
            <Route path="/" component={Bookmarks} exact={true} />
            <Route path="/login" component={Login} exact={true} />
          </switch>
        </BrowserRouter>
        <Footer appName="Shiorimark"/>
      </div>
      
    );
  }
}

export default App;

// switchNameHandler = () => {
//   console.log(this.state.status);
//   if (this.state.status === "Logout") {
//     console.log("Was clicked Logout..");
//     this.setState({
//       status: "Login"
//     });
//   } else {
//     console.log("Was clicked login..");
//     this.setState({
//       status: "Logout"
//     });
//   }
// };

