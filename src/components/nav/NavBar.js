import React from "react"
import { Button, Navbar, Container, Nav } from 'react-bootstrap'



export const NavBar_main = (props) => {
    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    const login = () => {
        window.location.href = '/login';
    }
    const isLoggedIn = sessionStorage.getItem('homebreeze_user') ? true : false
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
                        {isLoggedIn ? <Button className="navbar__link" variant="light" onClick={logout}>Log Out</Button> : <Button className="navbar__link" variant="light" onClick={login}>Log In</Button>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}