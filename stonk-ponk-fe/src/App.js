import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Login from './login-page/Login';
import Summary from './summary-page/Summary';
import Signup from './signup-page/SignUp';
import SignupSuccess from './signup-page/SignUpSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Summary} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/sign-up-success" component={SignupSuccess} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
