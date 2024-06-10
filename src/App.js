import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import charDetails from './components/charDetails';
import Login from "./components/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path='/characters' component={Home} />
        <Route exact path="/character/:name" component={charDetails} />
      </Switch>
    </Router>
  );
}

export default App;
