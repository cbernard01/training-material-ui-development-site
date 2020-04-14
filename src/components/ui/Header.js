// PACKAGE IMPORTS //
import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
// MATERIAL UI COMPONENTS //
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {makeStyles} from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
// PROJECT COMPONENTS //
import logo from "../../assets/logo.svg";

const ALL_TABS = [
  {route: "/", label: "Home"},
  {route: "/services", label: "Services"},
  {route: "/revolution", label: "The Revolution"},
  {route: "/about", label: "About Us"},
  {route: "/contact", label: "Contact Us"},
];


const ElevationScroll = (props) => {
  const {children} = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles(theme => ({
  toolbarMargin: {...theme.mixins.toolbar, marginBottom: "3em"},
  logo: {height: "7em"},
  tabContainer: {marginLeft: "auto"},
  tab: {...theme.typography.tab, minWidth: 10, marginLeft: "25px"},
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  }
}));

const Header = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (e, value) => {
    setTabValue(value);
  };

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} alt={"company logo"}/>
            <Tabs
              className={classes.tabContainer}
              value={tabValue}
              onChange={handleChangeTab}
              indicatorColor={"primary"}
            >
              {ALL_TABS.map((tab, i) => (
                <Tab key={i} className={classes.tab} component={Link} to={`${tab.route}`} label={`${tab.label}`}/>
              ))};
            </Tabs>
            <Button variant={"contained"} color={"secondary"} className={classes.button}>Free Estimate</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </Fragment>
  );
}

export default Header;
