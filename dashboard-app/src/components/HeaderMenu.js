import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        aria-controls="header-menu"
        aria-haspopup="true"
        edge="start"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} onClick={handleClose} to="/">
          Orders
        </MenuItem>
        <MenuItem component={Link} onClick={handleClose} to="/users">
          Users
        </MenuItem>
      </Menu>
    </div>
  );
}
