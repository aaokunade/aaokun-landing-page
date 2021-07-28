import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import contImg from "./images/contact-img.jpg";
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaMailBulk} from "react-icons/fa"



function Contact () {
    return (
		<div>
			<div>
				<div className="header">
				<div className="home-buttons">
                <Link className="link" to="/">
              Home
					</Link>
					<Link className="link" to="/project">
              Projects
					</Link>
					<Link className="link" to="/contacts">
              Contact Me
					</Link>
				</div>
				</div>
				<div className="contact-main">
					<div className="contact-image">						
							<img className="image" src={contImg} alt="logo" />
					</div>
					<div className="home-image">
					</div>
				</div>
			</div>
			<div className="home-footer">
				<div className="contact-home-links">
					<p>Connect With Me</p>
					<a className="contact-icons-home" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
					<a className="contact-icons-home" href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
					<a className="contact-icons-home" href="https://www.linkedin.com//" target="_blank" rel="noreferrer"><FaLinkedin /></a>
					<a className="contact-icons-home" href="mailto:" target="_blank" rel="noreferrer"><FaMailBulk /></a>
				</div>
				<p>Copyright &copy; 2021 Just Me</p>
			</div>

		</div>
	); 
}

export default Contact;