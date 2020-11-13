import React, { useState } from "react";
import resumeData from "../../Utility/resumeData.component";
import "./Portfolio.styles.css";

import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);


  return (
    <Grid container className="section pb-45 pt-45">
      {/*title*/}
      <Grid item className="section-title mb-20">
        <span></span>
        <h6 className="section-title-text">Portfolio</h6>
      </Grid>

      {/*tabs*/}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={(event, newValue) => {
            setTabValue(newValue);
          }}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "custom-tabs-item active" : "custom-tabs-item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => {
              return (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue == tag  ? "custom-tabs-item active" : "custom-tabs-item"
                  }
                />
              );
            }
          )}
        </Tabs>
      </Grid>
      {/*Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => {
            return (
              <>
                {tabValue == project.tag || tabValue == "All" ? (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grow in timeOut={1000}>
                      <Card
                        className="custom-card"
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className="custom-card-image"
                            image={project.image}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography variant={"body2"} className="custom-card-title">
                              {project.title}
                            </Typography>
                            <Typography
                              variant={"body2"}
                              className="custom-card-caption"
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            );
          })}
        </Grid>
        <Dialog className = "project-dialog" open={projectDialog} onClose={() => setProjectDialog(false)}>
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {projectDialog.title}
          </DialogTitle>
          <img src={projectDialog.image} alt="" className="project-dialog-image" />
          <DialogContent>
            <Typography className="project-dialog-description">{projectDialog.description}</Typography>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}; 

export default Portfolio;
