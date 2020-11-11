import React from "react";
import "./Resume.styles.css";
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../Utility/resumeData.component";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../Components/Timeline/Timeline.component";
import "./Resume.styles.css";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import BrushRoundedIcon from "@material-ui/icons/BrushRounded";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="section p-45">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text">About me</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme-text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/*Education and experience me*/}
      <Grid container className="section p-45 ">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text extra-padding">Hard Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resumeTimeline">
            <Grid item xs={12} md={6}>
              <CustomTimeline icon={<BrushRoundedIcon />}>
                {resumeData.design.map((exp) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline-content">
                        <Typography className="timeline-title">
                          {exp.title}
                        </Typography>
                        <Typography
                          className="timeline-date"
                          variant="caption"
                        ></Typography>
                        <Typography
                          className="timeline-description"
                          variant="body"
                        >
                          {exp.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTimeline icon={<CodeRoundedIcon />}>
                {resumeData.programming.map((exp) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline-content">
                        <Typography className="timeline-title">
                          {exp.title}
                        </Typography>
                        <Typography
                          className="timeline-date"
                          variant="caption"
                        ></Typography>
                        <Typography
                          className="timeline-description"
                          variant="body"
                        >
                          {exp.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*services me*/}
      <Grid container className="section ">
        <Grid item className="section-title mb-30">
          <span></span>
          <h6 className="section-title-text extra-padding">Auxilary Skills</h6>
        </Grid>

        <Grid items xs={12}>
          <Grid container justify={"space-around"} className="pb-45 centering">
            {resumeData.axSkill.map((skill) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="skill">
                    <div className="skill-icon">{skill.icon}</div>
                    <Typography variant="h6" className="skill-title">
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" className="skill-description">
                      {skill.description}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/*Skills me*/}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
