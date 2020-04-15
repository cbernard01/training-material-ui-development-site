// PACKAGE IMPORTS //
import React from "react";
// MATERIAL UI COMPONENTS //
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const HeaderMenu = ({menuOpen, anchorEl, handleMenuClose, menuItems}) => {

  const renderMenuItems = () => {
    return menuItems.map((item, i) => {
      return (
        <MenuItem onClick={handleMenuClose} key={`${i}-${item.label}`}>
          {`${item.label}`}
        </MenuItem>
      );
    });
  }

  return (
    <Menu
      open={menuOpen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      MenuListProps={{onMouseLeave: handleMenuClose}}
    >
      {renderMenuItems()}
    </Menu>
  );
}

export default HeaderMenu;
