export const headerStyles = (theme) => {
  return {
    toolbarMargin: {...theme.mixins.toolbar, marginBottom: "3em"},
    logo: {height: "7em"},
    logoContainer: {padding: 0, "&:hover": {backgroundColor: "transparent"}},
    tabContainer: {marginLeft: "auto"},
    tab: {...theme.typography.tab, minWidth: 10, marginLeft: "25px"},
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px"
    }
  };
};
