import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import './CoinPage.css';
import Plot from './Line';



function CoinPage() {
    const { id } = useParams();

    const [coinList, setCoin] = useState(null);

    const loadCoin = async () => {
        const response = await fetch(`https://static.coinpaper.io/api/coins/${id}.json`);
        const json = await response.json();
        setCoin(json);
    }

    useEffect(() => {
        loadCoin();
    }, []);

    if (coinList === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="coin-page">
            <div id="Back">
                <Link to="/">
                    Go back to list
                </Link>
            </div>
            <div className="HeaderCoin">
                <h1>{coinList.name}</h1>
                <h1>{coinList.symbol}</h1>
            </div>
            <div className="Info">
                <img src={coinList.image.original} />
                <p>{coinList.description.introduction}</p>
            </div>
            <div>
                <Plot data={coinList.market.ticker_price_24h} />
            </div>
        </div> /* Añadir más cosas!*/
    )
}

export default CoinPage