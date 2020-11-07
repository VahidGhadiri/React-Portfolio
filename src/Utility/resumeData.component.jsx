import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';


export default {
    name: "Vahid Ghadiri",
    title: "Front-end developer", 
    phone: "0933-6891141",
    birthday: "7th February 1990",
    email: "whydrf@gmail.com",
    address: "Iran, Tehran, Ekbatan Town",

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
            Instagram:{
                link:"https://www.instagram.com/_whyd_rf/", 
                text:"MyInstagram", 
                icon: <InstagramIcon/>
            }
    }
} 

