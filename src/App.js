import React from 'react';
import './App.scss';

import { Route, Switch, HashRouter } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import Statistic from './views/StatisticPage/StatisticPage'
import Header from '../src/cmps/Header/Header'
import Contacts from './views/ContactPage/ContactPage'
import ContactDetails from './views/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './views/ContactEditPage/ContactEditPage'
import SignupPage from './views/SignupPage/SignupPage'
class App extends React.Component {
  state = {

  }

  render() {

    return (
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/statistic" component={Statistic} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/contact/edit/:id?" component={ContactEditPage} />
            <Route exact path="/contact/:id?" component={ContactDetails} />
          </Switch>
        </div>
    );
  }
}

export default App;
