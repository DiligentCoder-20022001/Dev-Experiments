import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import Home from './components/Home';
import Nav from './components/Nav';
import CP from './components/CP';
import DSA from './components/DSA';
import Create from './components/CreateAccount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = '/' component = {Login}></Route>
      <Route exact path = "/register" component = {Create}></Route>
      <Route exact path = "/users/:id" component = {Home}></Route>
      <Route exact path = "/users/:id/DSA" component = {DSA}></Route>
      <Route exact path = "/users/:id/CP" component = {CP}></Route>
    </div>
    </Router>
  );
}

export default App;
