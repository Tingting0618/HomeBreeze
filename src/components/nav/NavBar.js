import React from "react"
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { Route, Redirect } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";


export const NavBar_main = (props) => {
    const  logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
      }

    const  login = () => {
        return (
            <>
            <Route
                render={() => {
                    return <Redirect to="/login" />;
                }}
            />
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            </>
        );
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
                        <Button className="navbar__link" variant="light" onClick={login}>Log In</Button>
                        <Button className="navbar__link" variant="light" onClick={logout}>Log Out</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}