import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './views/Main'
import Building from './views/Building';
import Devices from './views/Devices';
import Calendar from './views/Calendar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={ Main } />
          <Route path="/building" component={ Building } />
          <Route path="/devices" component={ Devices } />
          <Route path="/calendar" component={ Calendar } />
        </Layout>
      </Switch>
	  );
  }
}

export default App;
