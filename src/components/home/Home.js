import React from "react"
import "./Home.css"
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


// export const Home = () => (
//     <section className="home">
//         <h3 className="home__name">Beautiful 3b3b house</h3>
//         <div className="home__price">Price: $200,000</div>
//     </section>
// )
export const Home = () => (

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" />
  <Card.Body>
    <Card.Title href="#">Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Contact Agent</Button>
  </Card.Body>
</Card>
)