import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Actions from "./components/Actions"
import Bookmarks from "./components/Bookmarks"

class App extends Component {
  state = {
    status: "Login"
  };

  switchNameHandler = () => {
    console.log(this.state.status);
    if (this.state.status === "Logout") {
      console.log("Was clicked Logout..");
      this.setState({
        status: "Login"
      });
    } else {
      console.log("Was clicked login..");
      this.setState({
        status: "Logout"
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar
          appName="Shiorimark"
          userName="Albert Pinto"
          status={this.state.status}
        />
        <Header type="Home" colorName="py-2 bg-primary text-white"/>
        <Actions />


        <BrowserRouter>
          <switch>
            <Route path="/" component={Bookmarks} exact={true} />
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}
// <button onClick={this.switchNameHandler}>SwitchName</button>
// <div>
// <BrowserRouter>
//   <Navbar
//   appName="Shirorimark"
//   userName="Albert Pinto"
//   status={this.state.status}
// />
//   <switch>
//     <Route path="/" component={App} exact={true} />
//   </switch>
// </BrowserRouter>
// <button onClick={this.switchNameHandler}>SwitchName</button>
// </div>
export default App;
// <Route path="/bookmarks" component={Bookmarks} />
// <Route path="/categories" component={Categories} />
// <Route path="/users" component={Users} />
