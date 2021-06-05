import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CoinList.css";

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
    const [search, setSearch] = useState("black");

    const loadCoin = async () => {
        let search_params = (search ? `?coin_name=${search}` : "");
        const response = await fetch(`https://static.coinpaper.io/api/coins.json`);
        const json = await response.json();
        setCoinList(json);
    };


    const submit = (event) => {
        event.preventDefault(); // prevent page reloading
    };


    const onChange = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        loadCoin();
    }, [search]);

    if (coinList === null) {
        return <div id="Load">Loading...</div>;
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" value={search} onChange={onChange} />
                <button>Search</button>
            </form>
            <div className="Coinlist">
                {(coinList.slice(0, 10)).map((b) => ( /*  Muestra los primeros 10 elementos */
                    <Coin key={b.id} coin={b} />
                ))}
            </div>
        </div>
    );
}

export default CoinList;
