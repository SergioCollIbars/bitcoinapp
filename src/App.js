/* -----------------------------------------------
                      LIBRARIES
--------------------------------------------------*/
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/interrogante.png'
import Menu from "./components/Menu";
import CoinList from './components/CoinList';
import CoinPage from './components/CoinPage';
/*-----------------------------------------------*/


function App() {
  return (
    <Router>
      <div className="Header">
        <h1>CRYPTO TRACK</h1>
        <img src={logo} />
      </div>
      <div className="SearchBar">
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="Menu">
        <Menu />
      </div>
      <Switch>
        <Route path="/coin/:id" component={CoinPage} />
        <Route path="/" component={CoinList} />
      </Switch>
    </Router>
  );
}

export default App;
