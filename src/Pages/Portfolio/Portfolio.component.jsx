import React, { useState } from "react";
import "./Portfolio.styles.css";
import { Grid, Tabs } from "@material-ui/core";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  return (
    <div>
      <Grid container className="section pb-45 pt-45">
        {/*title*/}
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">Portfolio</h6>
        </Grid>

        {/*tabs*/}
        <Grid item>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => {
              setTabValue(newValue);
            }}
          ></Tabs>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
