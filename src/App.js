import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

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
      <Navbar appName ="Shirorimark" userName ="Albert Pinto" status={this.state.status} />       
      <button onClick={this.switchNameHandler}>SwitchName</button>
    </div>
    );
  }
}

export default App;
      // <Route path="/bookmarks" component={Bookmarks} />
            // <Route path="/categories" component={Categories} />
            // <Route path="/users" component={Users} />

