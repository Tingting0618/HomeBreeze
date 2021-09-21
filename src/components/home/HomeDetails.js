import React, { useContext, useEffect, useState } from "react"
import { HomeContext } from "./HomeProvider"
import "./Home.css"
import { useParams } from "react-router-dom"
import { ListGroup } from 'react-bootstrap'


export const HomeDetail = () => {
    const { homes,getHomes } = useContext(HomeContext)
    const [home, setHome] = useState({})
    const { homeId } = useParams();
    const thehomeId = parseInt(homeId)

    const phoneFormat = (input) => {
        if(!input || isNaN(input)) return `input must be a number was sent ${input}`
        if(typeof(input) !== 'string') input = input.toString()
        if(input.length === 10){
          return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        } else if(input.length < 10) {
          return input+ ' was not supplied enough numbers please pass a 10 digit number'
        } else if(input.length > 10) {
          return input +' was supplied too many numbers please pass a 10 digit number'
        }else{
          return input + ' something went wrong'
        }
      }

    useEffect(() => {
        getHomes().then(() => {
            const thisHome = homes.find(a => a.id === thehomeId ) || {}
            setHome(thisHome)
        })
    }, [homes])

    return (
        <section className="container" style={{ margin: "2rem 0rem 1rem 2rem" }}>
            <h4 >Home</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>Price: $ {Intl.NumberFormat().format(home.price)}</ListGroup.Item>
                <ListGroup.Item>Beds/Baths: {home.bed}b{home.bath}b </ListGroup.Item>
                <ListGroup.Item>Sqft: {Intl.NumberFormat().format(home.sqft)} Sqft</ListGroup.Item>
                <ListGroup.Item>Land: {home.land} Acer</ListGroup.Item>
            </ListGroup>
            <br />
            <h4 >Agent</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>{home.aName}</ListGroup.Item>
                <ListGroup.Item>Email: {home.aEmail}</ListGroup.Item>
                <ListGroup.Item>Tel: {phoneFormat(home.aPhone)}</ListGroup.Item>
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
