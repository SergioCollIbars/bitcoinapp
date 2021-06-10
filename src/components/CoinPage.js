import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import './CoinPage.css';
import Loading from './images/Loading.png';
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
        return <div className="Loading"> <img src={Loading} /></div>;
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
            <div className="nextinfo">
                <div id='otherinfo'>
                    <div id="price">
                        <h2>PRICE: {coinList.market.price} $</h2>
                    </div>
                    <div id="volume">
                        <h2>TOTAL VOLUME (24h): {coinList.market.overview.total_volume_24h} ud</h2>
                    </div>
                    <div id="rank">
                        <h2>RANK POSITION: {coinList.market.rank} </h2>
                    </div>
                </div>
                <div id='video'>
                    <ReactPlayer
                        url={coinList.video.url}
                        className='react-player'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            <div>
                <Plot data={coinList.market.ticker_price_24h} />
            </div>
        </div>
    )
}

export default CoinPage