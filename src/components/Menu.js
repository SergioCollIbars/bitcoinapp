import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
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
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Bitcoin</MenuItem>
        <MenuItem onClick={handleClose}>Ethereum</MenuItem>
        <MenuItem onClick={handleClose}>Wallet</MenuItem>
        <MenuItem onClick={handleClose}>Bitcoin1</MenuItem>
        <MenuItem onClick={handleClose}>Bitcoin2</MenuItem>
        <MenuItem onClick={handleClose}>Bitcoin3</MenuItem>
        <MenuItem onClick={handleClose}>Bitcoin4</MenuItem>
      </Menu>
    </div>
  );
}
