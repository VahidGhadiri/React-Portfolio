import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PaletteIcon from '@material-ui/icons/Palette';



export default {
    name: "Vahid  Ghadiri",
    title: "Front-end developer", 
    phone: "0933-6891141",
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
            title:"HTML", 
            data:"Data 1", 
            description: "Mastery",
        },{
            title:"CSS", 
            data:"Data 2", 
            description: "Mastery .",
        },{
            title:" SASS / SCSS", 
            data:"Data 3", 
            description: "Familiar",
        },{
            title:"Material-UI", 
            data:"Responsive Design", 
            description: "Fluent",
        }
        ]   ,

        
        
    programming:[
        {
            title:"Java Script", 
            data: "Fluent", 
            description: "Fluent"
        },{
            title:"ReactJs ", 
            data:"Familiar" , 
            description: "Fluent",
        },{
            title:"Redux", 
            data:"Responsive Design", 
            description: "Familiar",
        },{
            title:"ReactBootstrap", 
            data:"Responsive Design", 
            description: "Fluent",
        }
        ] ,
        
    axSkill:[
            {
                title: "UI/UX", 
                description: "I was trying to understand the process of building a program from the beginning of creating an idea to the end of the path. Of course, I am familiar with applications such as Adobe XD and have the ability to build wireframes and prototypes.",
                icon: <PaletteIcon/>
            }, 
            {
                title: "Git", 
                description: "The Git is very wide, but I know the ability to do routine tasks such as working with branches, Mergin them, pull, push so on. In fact, it's the routine that is required of any programmer.I will certainly add to my knowledge in this area.",
                icon: <GitHubIcon/>
            }, 
            {
                title: "Data Structure & Algorithm", 
                description: "Personally, I am very interested in this part of programming,I have implemented some structures, and I am familiar with others. Along with this content, I am trying to learn Design pattern. Patterns such as builder, strategy, observer, single ton etc",
                icon: <AccountTreeIcon/>
            },
        ],
} 

