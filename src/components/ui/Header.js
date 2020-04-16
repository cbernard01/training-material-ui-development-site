// PACKAGE IMPORTS //
import React, {cloneElement, Fragment, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
// MATERIAL UI COMPONENTS //
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {makeStyles} from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// PROJECT COMPONENTS //
import logo from "../../assets/logo.svg";
import {headerStyles} from "./components/headerStyles";
import HeaderTabs from "./components/HeaderTabs";
import HeaderMenu from "./components/headerMenu";

const TAB_CONTENT = [
  {route: "/", label: "Home"},
  {
    route: "/services", label: "Services", menuItems:
      [
        {route: "/services", label: "Services"},
        {route: "/custom-software", label: "Custom Software Development"},
        {route: "/mobile-apps", label: "Mobile App Development"},
        {route: "/websites", label: "Website Development"}
      ]
  },
  {route: "/revolution", label: "The Revolution"},
  {route: "/about", label: "About Us"},
  {route: "/contact", label: "Contact Us"}
];

const ElevationScroll = ({children}) => {
  const trigger = useScrollTrigger({disableHysteresis: true, threshold: 0});
  return cloneElement(children, {elevation: trigger ? 4 : 0});
};

const useStyles = makeStyles(theme => (headerStyles(theme)));

const Header = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("/");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const handleClickButton = (e, value) => {
    e.preventDefault();
    setTabValue(value);
    history.push(value);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  }

  useEffect(() => {
    let path = location.pathname;
    TAB_CONTENT.forEach(tab => {
      if (tab.route && tab.route === path) setTabValue(path);
      if (tab.menuItems && tab.menuItems.some(item => item.route === path)) setTabValue(tab.route);
    });
  }, [location]);

  const renderHeaderMenu = () => {
    return TAB_CONTENT.map((tab, i) => {
      if (tab.menuItems) {
        return (
          <HeaderMenu
            key={`${i}-${tab.label}`}
            anchorEl={anchorEl}
            menuOpen={menuOpen}
            handleMenuClose={handleMenuClose}
            menuItems={tab.menuItems}
            menuRoute={tab.route}
          />
        );
      }
      return null;
    });
  }


  return (
    <Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              onClick={(e) => handleClickButton(e, "/")}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt={"company logo"}/>
            </Button>
            <HeaderTabs
              tabValue={tabValue}
              setTabValue={setTabValue}
              handleMenuClick={handleMenuClick}
              TAB_CONTENT={TAB_CONTENT}
            />
            <Button variant={"contained"} color={"secondary"} className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
      {renderHeaderMenu()}
    </Fragment>
  );
}

export default Header;
