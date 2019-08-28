import React from "react";

import SignInUp from "./components/SignInUp";
import Logo from "./components/Logo";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Logo></Logo>
        <SignInUp />
      </Grid>
    </div>
  );
}

export default App;
