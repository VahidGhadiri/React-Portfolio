import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default {
    name: "Vahid Ghadiri",
    title: "Front-end developer", 
    birthday: "7th February 1990",
    email: "whydrf@gmail.com",
    address: "Iran, Tehran, Ekbatan Town",
    phone: "0933-6891141", 

    socials: {
            LinkedIn: {
                link: "https://www.linkedin.com/in/vahidghadiri/",
                text: "MyLinkedIn",
                icon: <LinkedInIcon/>
            }, 
            Github:{
                link: "https://github.com/VahidGhadiri",
                text: "MyGithub",
                icon: <GitHubIcon/>
                               
            }, 
            Phone:{
                link: "",
                text: " 0933-6891141"
            }
    }
} 