// PACKAGE IMPORTS //
import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
// MATERIAL UI COMPONENTS //
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {makeStyles} from "@material-ui/styles";
// PROJECT COMPONENTS //
import {headerStyles} from "./headerStyles";

const useStyles = makeStyles(theme => (headerStyles(theme)));


const HeaderMenu = ({menuOpen, anchorEl, handleMenuClose, menuRoute, menuItems}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuClick = (e, value, index) => {
    e.preventDefault();
    setSelectedIndex(index);
    handleMenuClose();
    history.push(value);
  }

  useEffect(() => {
    let menuItemCheck = false;

    menuItems.forEach((item, i) => {
      if (item.route === location.pathname) {
        setSelectedIndex(i);
        menuItemCheck = true;
      }
    });

    if (!menuItemCheck && location.pathname !== menuRoute) setSelectedIndex(null);
  }, [menuItems, menuRoute, location])

  const renderMenuItems = () => {
    return menuItems.map((item, i) => {
      return (
        <MenuItem
          classes={{root: classes.menuItem}}
          onClick={(e) => handleMenuClick(e, item.route, i)}
          selected={i === selectedIndex}
          key={`${i}-${item.label}`}
        >
          {`${item.label}`}
        </MenuItem>
      );
    });
  }

  return (
    <Menu
      classes={{paper: classes.menu}}
      open={menuOpen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      MenuListProps={{onMouseLeave: handleMenuClose}}
      elevation={0}
    >
      {renderMenuItems()}
    </Menu>
  );
}

export default HeaderMenu;
