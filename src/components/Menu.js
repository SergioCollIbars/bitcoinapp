import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';



export default function SimpleMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <b>MENU</b>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 350, /* Menu width */
            height: 300, /* Menu height */
          },
        }}

      >
        <Link to='/coin/btc-bitcoin' style={{ textDecoration: 'none' }}>
          <MenuItem>Bitcoin</MenuItem>
        </Link>
        <Link to='/coin/eth-ethereum' style={{ textDecoration: 'none' }}>
          <MenuItem>Ethereum</MenuItem>
        </Link>
        <Link to='/coin/usdt-tether' style={{ textDecoration: 'none' }}>
          <MenuItem>Tether</MenuItem>
        </Link>
        <Link to='/coin/bnb-binance-coin' style={{ textDecoration: 'none' }}>
          <MenuItem>Binance Coin</MenuItem>
        </Link>
        <Link to='/coin/ada-cardano' style={{ textDecoration: 'none' }}>
          <MenuItem>Cardano</MenuItem>
        </Link>
        <Link to='/coin/dot-polkadot' style={{ textDecoration: 'none' }}>
          <MenuItem>Polkadot</MenuItem>
        </Link>
        <Link to='/coin/xrp-xrp' style={{ textDecoration: 'none' }}>
          <MenuItem>Ripple</MenuItem>
        </Link>
        <Link to='/statistics' style={{ textDecoration: 'none' }}>
          <MenuItem>Statistics</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
