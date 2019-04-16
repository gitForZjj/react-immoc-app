import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, Link } from  'react-router-dom';
import Home from './views/Home.jsx';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {}
  }

  render() {
    return (
        <div>
          <HashRouter>
            <Link to="/hell">hh</Link>

            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/hell" component={H} exact></Route>
            </Switch>
          </HashRouter>
        </div>
    );
  }
  gouwenjie () {
    console.log(this)
  }
}
function H() {
    return (
        <h1>jj</h1>
    )
}
export default App;
