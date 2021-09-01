import React from "react"
import "./Home.css"
import {Card,Button} from 'react-bootstrap';


// export const Home = () => (
//     <section className="home">
//         <h3 className="home__name">Beautiful 3b3b house</h3>
//         <div className="home__price">Price: $200,000</div>
//     </section>
// )
export const Home = () => (

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cottagesgardens.com/content/uploads/data-import/0cf36f3e/Judy-Garland-Malibu-Beach-House-Sells-Wizard-of-Oz-Fan-3-5M-living-room.jpg" />
  <Card.Body>
    <Card.Title href="#">Beautiful 3b3b house</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="secondary">Contact Agent</Button>
  </Card.Body>
</Card>
)