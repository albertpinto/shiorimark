import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Saga from "./components/Saga";
import Registration from "./components/Registeration.js";


class App extends Component {
  constructor() {
    super()
    this.handleStateInApp=this.handleStateInApp.bind(this);
    this.state = {
      user: {},
      token: "",
    };
  }

  handleStateInApp(data) {
    this.setState({
      user: data.user,
      token: data.token,
    });
  }
  render() {
    return (
      <Fragment>       
        <BrowserRouter>
          <switch>
            <Route path="/"             
            exact={true}
            render = {props =>(
            <Bookmarks {...props} handleStateInApp={this.handleStateInApp} />  
            )} 
            />        

            <Route path="/login" 
            exact={true} render ={props =>(
              <Login {...props} handleStateInApp={this.handleStateInApp} />
            )}
            
            />
            <Route path="/register" 
            exact={true} render = {props => (
              <Registration {...props} handleStateInApp={this.handleStateInApp} />
            )}
            />
            <Route path="/saga" component={Saga} exact={true} />
          </switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
