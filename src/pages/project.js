import React from "react";
import { Link } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import "./home.css";
import image from "./images/knowledge-app.png";
import baby from "./images/baby-app.png";
import countries from "./images/countries-app.PNG";
import videos from "./images/video-recom.png";
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaMailBulk} from "react-icons/fa"



function Project () {
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
				<div className="project-main">
					<Card>
					<Card.Img variant="top" src= {image} />
					<Card.Body>
						<Card.Title>CYF-Knowledge-Checklist</Card.Title>
						<Card.Text>
						CYF knowledge checklist is an app built for Code Your Future
						to help trainees track their abilities 
						in various objectives of different lessons being taught.
						</Card.Text>
						<Button variant="primary" href = "https://cyf-knowledge-checklists.herokuapp.com/" target="_blank">See App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {baby} />
					<Card.Body>
						<Card.Title>Baby-names-App</Card.Title>
						<Card.Text>
						This app displays names of both gender in different color for male and female names,
						there is also a button to switch to only one gender type. 
						You can also select some names into the favorite field
						and also search for names.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-baby-names.netlify.app/" target="_blank">Baby-App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {countries} />
					<Card.Body>
						<Card.Title>World-Countries-App</Card.Title>
						<Card.Text>
						Countries app displays names of different countries,
						 countries can also be grouped based on their regions.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-countries-react.netlify.app/" target="_blank">View App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {videos} />
					<Card.Body>
						<Card.Title>Videos-Recommendation-App</Card.Title>
						<Card.Text>
						Videos recommendation app allows you to add and search for a video from the list of available 
						videos on the page and to also add a video of choice from youtube into the app.
						</Card.Text>
						<Button variant="primary" href= "https://videos-recommendation.herokuapp.com/" target="_blank">View App</Button>
					</Card.Body>
					</Card>

					{/* <Card>
					<Card.Img variant="top" src= {image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-baby-names.netlify.app/" target="_blank">Go somewhere</Button>
					</Card.Body>
					</Card> */}
				</div>
			</div>
			<div className="home-footer">
				<div className="home-links">
					<a className="icons-home" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
					<a className="icons-home" href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
					<a className="icons-home" href="https://www.linkedin.com//" target="_blank" rel="noreferrer"><FaLinkedin /></a>
					<a className="icons-home" href="mailto:" target="_blank" rel="noreferrer"><FaMailBulk /></a>
				</div>
				<p>Copyright &copy; 2021 Just Me</p>
			</div>

		</div>
	); 
}

export default Project;