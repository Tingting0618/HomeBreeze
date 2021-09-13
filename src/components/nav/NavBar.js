import React from "react"
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { googleAuth} from "../helpers/googleAuth";
// import {
//     signOut
//   } from "firebase/auth";

export const NavBar_main = (props) => {
    const  logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
      }
  
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">HomeBreeze</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/buy">Buy</Nav.Link>
                        <Nav.Link href="/sell" >Sell</Nav.Link>
                        {/* <Nav.Link href="/rent">Rent</Nav.Link>
                        <Nav.Link href="/service">Service</Nav.Link> */}
                        <Nav.Link href="/mylistings">My Listings</Nav.Link>
                        <Button className="navbar__link" variant="light" onClick={() => googleAuth.signOut()}>Log Out</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}