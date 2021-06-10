import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CoinList.css";
import Loading from './images/Loading.png';

const Coin = (props) => {
    let iD = "Red"
    if (props.coin.price_24h_percentage_change > 0) {
        iD = "Green"
    }
    return (
        <Link to={`/coin/${props.coin.id}`}>
            <div className="coin">
                <img src={props.coin.image} />
                <div className="info">
                    <h3>{props.coin.name}</h3>
                    <h4>Price: {props.coin.price}</h4>
                    <h4 id={iD}>Rate: {props.coin.price_24h_percentage_change}</h4>
                </div>
            </div>
        </Link>
    );
};

function CoinList() {

    const [coinList, setCoinList] = useState(null);

    const loadCoin = async () => {
        const response = await fetch(
            `https://static.coinpaper.io/api/coins.json`
        );
        const json = await response.json();
        setCoinList(json);
    };



    useEffect(() => {
        loadCoin();
    }, []);

    if (coinList === null) {
        return <div className="Loading"> <img src={Loading} /></div>;
    }
    return (
        <div>
            <div className="Coinlist">
                {(coinList.slice(0, 10)).map((b) => ( /*  Muestra los primeros 10 elementos */
                    <Coin key={b.id} coin={b} />
                ))}
            </div>
        </div>
    );
}

export default CoinList;
