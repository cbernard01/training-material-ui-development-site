import React, {Fragment} from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {makeStyles} from "@material-ui/styles";

import Header from "./ui/Header";
import theme from "./ui/theme";



function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        Why?
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
