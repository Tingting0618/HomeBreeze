import React from "react"
import { Button, Navbar, Container, Nav } from 'react-bootstrap'


export const NavBar_main = (props) => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">HomeBreeze</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Buy</Nav.Link>
                        <Nav.Link href="/sell" >Sell</Nav.Link>
                        <Nav.Link href="/rent">Rent</Nav.Link>
                        <Nav.Link href="/service">Service</Nav.Link>
                        <Nav.Link href="/mylistings">My Listings</Nav.Link>
                        <Button className="navbar__link" variant="light">Log Out</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

// import "./NavBar.css"
//import { Link } from "react-router-dom"

        // <ul className="navbar">

        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/buy">Buy</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/sell">Sell</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/rent">Rent</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/service">Service</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/mylistings">My Listings</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Button className="navbar__link" variant="light">Log out</Button>
        //     </li>
        //     </ul>