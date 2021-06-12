/* -----------------------------------------------
                      LIBRARIES
--------------------------------------------------*/
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/Logo_img.png';
import title from './images/Logo_title.png';
import Menu from "./components/Menu";
import WeekCoin from './images/CoinWeek.png';
import CoinList from './components/CoinList';
import CoinPage from './components/CoinPage';
import CoinOfWeek from './components/coinOfWeek';
import Statistic from "./components/statistics";
/*-----------------------------------------------*/


function App() {
  return (
    <Router>
      <div className="WeekMoney">
        <img id='WeekCoin' src={WeekCoin} />
        <CoinOfWeek />
      </div>
      <div className="Header">
        <img id='Titulo' src={title} />
        <img id='Logo' src={logo} />
      </div>
      <div className="subHeader">
        <h2>Crypto Info, Price, Review and Analysis </h2>
      </div>
      <div className="Menu">
        <Menu />
      </div>
      <div className="List">
        <Switch>
          <Route path="/coin/:id" component={CoinPage} />
          <Route path="/statistics" component={Statistic} />
          <Route path="/" component={CoinList} />
        </Switch>
      </div>
      
      <div className="Footer">
        <a href="home"> <img id='Logo' src={logo} /></a>
        <h2>Crypto Info, Price, Review and Analysis </h2>
      </div>
      <h3 className="Creators">© 2021 CryptoTrack by Sergio Coll & Pau Viñas </h3>
    </Router>
  );
}

export default App;
