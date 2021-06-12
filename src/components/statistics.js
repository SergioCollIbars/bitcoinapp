import React, { useEffect, useState } from "react";
import Loading from './images/Loading.gif';
import Plot from './Line';

function Statistic() {

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
                    <div>
                        <h2>{b.name}</h2>
                        <Plot data={b.ticker_price_24h} />
                    </div >
                ))}
            </div>
        </div>
    );
}

export default Statistic;
