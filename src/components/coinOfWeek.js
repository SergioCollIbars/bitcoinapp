import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./coinOfWeekcss.css";

const Coin = (props) => {
    return (
        <Link to={`/coin/${props.coin.id}`}>
            <div className="content">
                <img src={props.coin.image} />
                <div className="Coin">
                    <h1>{props.coin.name}</h1>
                </div>
                <div className="info">
                    <h2>Price: {props.coin.price} $</h2>
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
        return <div id="Load">Loading...</div>;
    }

    function name(coinList) {
        let pos = 0;
        let init = coinList[0];
        coinList.map(function (b) {
            if (b.is_coin_of_the_week === true) {
                pos = b
            }
        })
        if (pos != 0) {
            console.log("found")
            return (<Coin key={pos} coin={pos} />);
        } else {
            console.log("Not found")
            console.log(init)
            return (<Coin key={init} coin={init} />);
        }
    }
    return (
        <div>
            <div className="Coinlist">
                {name(coinList)}
            </div>
        </div>
    );
}

export default CoinList;
