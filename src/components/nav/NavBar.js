import React from "react"
import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">

            <li className="navbar__item">
                <Link className="navbar__link" to="/buy">Buy</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/sell">Sell</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rent">Rent</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/service">Service</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/mylistings">My Listings</Link>
            </li>
            <li className="navbar__item">
                <Button className="navbar__link" variant="light">Log out</Button>
            </li>
        </ul>
    )
}