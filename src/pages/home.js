import React from "react";
import { Link } from "react-router-dom";
import image from "./images/home-image.png";
import "./home.css";
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaMailBulk} from "react-icons/fa"



function Home () {
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
              Contact Us
					</Link>
				</div>
				</div>				
				<div className="main">
				<div className="home-image">
						<img className="image" src={image} alt="img" />
					</div>
					<div className="welcome-text">
						<p>Welcome to My World.</p>
						<p>
						Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut 
						labore et dolore magna aliqua. 
						Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco 
						laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in 
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, 
						sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
			<div className="home-footer">
				<div className="home-links">
					<a className="icons-home" href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
					<a className="icons-home" href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
					<a className="icons-home" href="https://www.linkedin.com//" target="_blank" rel="noreferrer"><FaLinkedin /></a>
					<a className="icons-home" href="mailto:" target="_blank" rel="noreferrer"><FaMailBulk /></a>
				</div>
				<p>Copyright &copy; 2021 Just Me</p>
			</div>

		</div>
	); 
}

export default Home;