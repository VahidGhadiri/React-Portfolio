import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import RouterIcon from '@material-ui/icons/Router';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PaletteIcon from '@material-ui/icons/Palette';



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
    },

    about: " I am a self-taught developer; I consider myself a motivated person, a lover of learning and a lover of teamwork; I am always indescribably eager to learn new contents, I am already fluent in HTML and CSS and familiar with JavaScript as well as React, also as a web developer I had a look at UI/UX  And I have read many books and articles in this regard. Certainly as a programmer, I pay special attention to things like data structure, algorithms, design pattern, and oop. Accurate learning of these things is one of my priorities...\n\n If I want to name one of the most important personality traits, I can point to a lot of perseverance, I will never stop trying and searching until I reach my goal. I do not hesitate to ask questions and I willingly teach others everything I know. The best way to learn is to teach. Hope to see",

    design:[
        {
            title:" work 1", 
            data:"Data 1", 
            description: "Description 1",
        },{
            title:"work2", 
            data:"Data 2", 
            description: "Description 2 .",
        },{
            title:" work 3", 
            data:"Data 3", 
            description: "description 3",
        },{
            title:" work 4", 
            data:"Data 4", 
            description: "description 4",
        },
        ]   ,

        
        
    programming:[
        {
            title:"title 1", 
            data:"data 1", 
            description: "description 1"
        },{
            title:"title 2 ", 
            data:"data2", 
            description: "decription 2",
        },{
            title:"title 3", 
            data:"data 3", 
            description: "description 3",
        },
        {
            title:"title 4", 
            data:"data 4", 
            description: "description 4",
        },
        ] ,
        
    axSkill:[
            {
                title: "UI/UX", 
                description: "i have been a bad ass developer for 10 month",
                icon: <PaletteIcon/>
            }, 
            {
                title: "Git", 
                description: "i have been a bad ass developer for 10 month",
                icon: <GitHubIcon/>
            }, 
            {
                title: "Data Structure & Algorithm", 
                description: "i have been a bad ass developer for 10 month",
                icon: <AccountTreeIcon/>
            },
        ],

        softSkills:[
                {
                    title: "Accountability",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a officiis maxime tempora doloremque iure."
                },
                {
                    title: "Teamwork And Collaboration",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a officiis maxime tempora doloremque iure."
                },
                {
                    title: "Open-Mindedness And Adaptability",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a officiis maxime tempora doloremque iure."
                },
                
        ]
} 

