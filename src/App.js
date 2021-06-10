/* -----------------------------------------------
                      LIBRARIES
--------------------------------------------------*/
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/Logo_img.png'
import title from './images/Logo_title.png'
import Menu from "./components/Menu";
import WeekCoin from './images/CoinWeek.png'
import CoinList from './components/CoinList';
import CoinPage from './components/CoinPage';
import CoinOfWeek from './components/coinOfWeek';
import Statistic from "./components/statistics";
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
      <div className="WeekMoney">
        <img id='WeekCoin' src={WeekCoin} />
        <CoinOfWeek />
      </div>
      <Switch>
        <Route path="/coin/:id" component={CoinPage} />
        <Route path="/statistics" component={Statistic} />
        <Route path="/" component={CoinList} />
      </Switch>
    </Router>
  );
}

export default App;
