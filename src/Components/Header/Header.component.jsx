import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  FaceBook,
  Linkedin, 
  GitHub,
  Telegram,
  Whatsapp,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../Utility/resumeData.component"
import { Link, NavLink, withRouter } from "react-router-dom"
import CustomButton from "../Button/Button.component"
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import "../Header/Header.styles.css"


const Header = (props) => {
    const pathName =  props?.location?.pathname

  return (
    <Navbar expand="lg" className="header">

      <Nav.Link as={NavLink} to={"/"} className={"header-navlink"}>
         <Navbar.Brand className = "header-home"><HomeRounded/></Navbar.Brand>
      </Nav.Link>
      
        <Navbar.Toggle/>

        <Navbar.Collapse>
            <Nav className = "header-left">
                {/* Resume link*/}
                <Nav.Link as={NavLink} to="/" 
                className={pathName == "/" ? "header-link-active" : "header-link" }>
                Resume
                </Nav.Link>

                {/* Portfolio link*/}
                <Nav.Link as={NavLink} to="/portfolio" 
                className={pathName == "/portfolio" ? "header-link-active" : "header-link" }>
                Portfolio
                </Nav.Link>
            </Nav>

            <div className = "header-right">
                {Object.keys(resumeData.socials).map((key)=>{
                      return(
                        <a 
                        href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
                      )
                })}
                <CustomButton text={"Hire me"} icon={<PhoneRoundedIcon/>}/>
            </div>
        </Navbar.Collapse>    
    </Navbar>
  );
};

export default withRouter(Header);
