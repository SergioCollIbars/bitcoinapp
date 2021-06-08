/* -----------------------------------------------
                      LIBRARIES
--------------------------------------------------*/
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/Logo_img.png'
import title from './images/Logo_title.png'
import Menu from "./components/Menu";
import CoinList from './components/CoinList';
import CoinPage from './components/CoinPage';
/*-----------------------------------------------*/


function App() {
  return (
    <Router>
      <div className="Header">
        <img id='Titulo' src={title} />
        <img id='Logo' src={logo} />
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
