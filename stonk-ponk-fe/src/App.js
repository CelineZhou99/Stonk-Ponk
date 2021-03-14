import './App.css';

import {
  Route,
  Router,
  // BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { history } from './helpers/history';

import { PrivateRoute } from './components/PrivateRoute';

import Login from './components/Login';
import Summary from './components/Summary';
import Signup from './components/SignUp';
import SignupSuccess from './components/SignUpSuccess';
import PasswordReset from './components/PasswordReset';
import Market from './components/Market';
import Settings from './settings-page/Settings';
import Education from './education/Education';
import WhatIsTheStockMarket from './education/WhatIsTheStockMarket';
import InterpretingTheNews from './education/InterpretingTheNews';
import WhyInvest from './education/WhyInvest';
import FinancialInstruments from './education/FinancialInstruments';
import StatisticsAndGraphs from './education/StatisticsAndGraphs';
import PassiveVSActive from './education/PassiveVSActive';

function App() {
  // Check whether the user is logged in
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Summary} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/sign-up-success" component={SignupSuccess} />
          <Route exact path="/forgot-password" component={PasswordReset} />
          <Route exact path="/market" component={Market} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/education' component={Education} />
          <Route exact path='/education/what-is-the-stock-market' component={WhatIsTheStockMarket} />
          <Route exact path='/education/interpreting-the-news-page' component={InterpretingTheNews} />
          <Route exact path='/education/why-invest' component={WhyInvest} />
          <Route exact path='/education/financial-instruments-101' component={FinancialInstruments} />
          <Route exact path='/education/statistics-and-graphs-101' component={StatisticsAndGraphs} />
          <Route exact path='/education/passive-vs-active-investing' component={PassiveVSActive} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
