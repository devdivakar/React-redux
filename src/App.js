import React from 'react';
import './App.css';
import List from "./components/List";
import Detail from "./components/Details";
import {
  Switch,
  Route,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
     <Switch>
          <Route exact path="/">
            <List/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
      </Switch>
    </BrowserRouter>
      </div>
    );
  }
}
export default connect()(App);

