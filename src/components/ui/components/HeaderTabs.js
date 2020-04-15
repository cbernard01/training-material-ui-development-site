// PACKAGE IMPORTS //
import React from "react";
// MATERIAL UI COMPONENTS //
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// PROJECT COMPONENTS //
import {makeStyles} from "@material-ui/styles";
import {headerStyles} from "./headerStyles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => (headerStyles(theme)));

const HeaderTabs = ({tabValue, setTabValue, handleMenuClick, TAB_CONTENT}) => {
  const classes = useStyles();
  const history = useHistory();


  const handleChangeTab = (e, value) => {
    e.preventDefault();
    setTabValue(value);
    history.push(value);
  };

  return (
    <Tabs className={classes.tabContainer} value={tabValue} onChange={handleChangeTab} indicatorColor={"primary"}>
      {TAB_CONTENT.map((tab, i) => {
          if (tab.menuItems) {
            return (
              <Tab
                key={i}
                className={classes.tab}
                value={`${tab.route}`}
                label={`${tab.label}`}
                aria-controls={`${tab.label.toLowerCase()}-menu`}
                aria-haspopup={true}
                onMouseOver={handleMenuClick}
                disableRipple
              />
            );
          } else {
            return (
              <Tab
                key={i}
                className={classes.tab}
                value={`${tab.route}`}
                label={`${tab.label}`}
                disableRipple
              />
            );
          }
        }
      )}
    </Tabs>
  );
}

export default HeaderTabs;
