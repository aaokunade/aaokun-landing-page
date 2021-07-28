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
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href = "https://cyf-knowledge-checklists.herokuapp.com/" target="_blank">See App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {baby} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-baby-names.netlify.app/" target="_blank">Baby-App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {countries} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-countries-react.netlify.app/" target="_blank">View App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {videos} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href= "https://videos-recommendation.herokuapp.com/" target="_blank">View App</Button>
					</Card.Body>
					</Card>

					<Card>
					<Card.Img variant="top" src= {image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary" href= "https://cyf-aaokunade-baby-names.netlify.app/" target="_blank">Go somewhere</Button>
					</Card.Body>
					</Card>
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