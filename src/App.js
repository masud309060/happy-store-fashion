import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
