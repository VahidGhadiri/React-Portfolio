import { Typography } from "@material-ui/core"
import React from "react"
import "./Footer.styles.css"
import "../../Utility/resumeData.component"
import resumeData from "../../Utility/resumeData.component"

const Footer = () =>{
    return(
        <div className = "footer">
            <div className="footer-left">
                <Typography className = "footer-name">
                    {resumeData.name}
                </Typography>                
            </div>
            <div className="footer-right">
                <Typography className = "Footer-copywrite">
                    Designed and Developed by <a href="/" target="_blank">Vahid Ghadiri</a>
                    <br/>
                    Clone idea from <a href="https://themeforest.net/user/tavonline" target="_blank">Tavonline.</a>
                 </Typography>
            </div>
        </div>
    )
}

export default Footer