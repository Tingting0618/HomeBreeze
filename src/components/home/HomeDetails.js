import React, { useContext, useEffect, useState } from "react"
import { HomeContext } from "./HomeProvider"
import "./Home.css"
import { useParams } from "react-router-dom"
import { ListGroup } from 'react-bootstrap'


export const HomeDetail = () => {
    const { homes } = useContext(HomeContext)
    const [home, setHome] = useState({})
    const { homeId } = useParams();
    const thehomeId = parseInt(homeId)

    useEffect(() => {
        const thisHome = homes.find(a => a.id === thehomeId)
        setHome(thisHome)
    }, [])

    return (
        <section className="container" style={{ margin: "2rem 0rem 1rem 2rem" }}>
            <h4 >Home</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>Price: {home.price}</ListGroup.Item>
                <ListGroup.Item>Beds/Baths: {home.bed}b{home.bath}b </ListGroup.Item>
                <ListGroup.Item>Sqft: {home.sqft} Sqft</ListGroup.Item>
                <ListGroup.Item>Land: {home.land} Acer</ListGroup.Item>
            </ListGroup>
            <br />
            <h4 >Agent</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>{home.aName}</ListGroup.Item>
                <ListGroup.Item>Email: {home.aEmail}</ListGroup.Item>
                <ListGroup.Item>Tel: {home.aPhone}</ListGroup.Item>
            </ListGroup>
            <br />
            <h4 >Location</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>{home.address1}, {home.city}, {home.state} </ListGroup.Item>
                <ListGroup.Item>{home.desc}</ListGroup.Item>
            </ListGroup>


        </section>
    )
}
