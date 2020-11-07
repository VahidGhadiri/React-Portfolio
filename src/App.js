import React from "react";
import "./app.styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Profile from "./Components/Profile/Profile.Component";
import Header from "./Components/Header/Header.component";
import Footer from "./Components/Footer/Footer.component";

import Portfolio from "./Pages/Portfolio/Portfolio.component";
import Resume from "./Pages/Resume/Resume.component";

function App() {
  return (
    <Container className={"top-60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
        
        <BrowserRouter>
        <Header />
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </BrowserRouter>
          
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
