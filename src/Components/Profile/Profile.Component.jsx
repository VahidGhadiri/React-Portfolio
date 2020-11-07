import React from "react"
import "./Profile.styles.css"
import CustomTimeline, {CustomTimelineSeparator} from "../Timeline/Timeline.component"
import { Typography } from "@material-ui/core"
import logo from "../../assets/images/vg.jpg"
import resumeData from "../../Utility/resumeData.component"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineContent from "@material-ui/lab/TimelineContent"
import CustomButton from "../Button/Button.component"
import GetAppIcon from '@material-ui/icons/GetApp';


const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className = "timeline-content">
             {link ? (
                <Typography className = "timeline-text">
                      <span>{title}:</span> {" "}
                        <a href={link} target="_blank">
                          {text}
                         </a>
                </Typography>
                ): (
                 <Typography className = "timeline-text">
                        <span>{title}:</span> 
                             {text}
                 </Typography>
             )}
             </TimelineContent>
    </TimelineItem>
)

const Profile = ()=> {
    return(
        <div className="profile container-shadow">

            <div className="profile-name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className = "title">{resumeData.title}</Typography>
            </div>

            <figure className="profile-image">
                <img src={logo} alt="profile-image"/>
            </figure>

            <div className="profile-information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
                    <CustomTimelineItem title="Name" text={resumeData.name}/>
                    <CustomTimelineItem title="Title" text={resumeData.title}/>
                    <CustomTimelineItem title="Phone" text={resumeData.phone}/>
                    <CustomTimelineItem title="Email" text={resumeData.email}/>


                    {Object.keys(resumeData.socials).map(key =>{
                            return(
                                <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>  
                        )
                    })}
                </CustomTimeline>
                <div className = "btn-container">
                    <CustomButton text = {"Donwload Cv"} icon={<GetAppIcon/>}/>
                </div>
            </div>

        </div>
    )
}

export default Profile