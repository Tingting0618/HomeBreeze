import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faGem ,faCalendar} from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Company</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/buy">About Us</Nav.Link>
                        <Nav.Link href="/buy">Team</Nav.Link>
                        <Nav.Link href="/buy">Investors</Nav.Link>
                    </Nav>
                    <FontAwesomeIcon icon={faCalendar}/>
                </Container>
            </Navbar>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Explore</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/buy">Buy</Nav.Link>
                        <Nav.Link href="/buy">Sell</Nav.Link>
                        <Nav.Link href="/buy">Rent</Nav.Link>
                    </Nav>
                    <FontAwesomeIcon icon={faGem}/>
                </Container>
            </Navbar>
        </>
    )
}