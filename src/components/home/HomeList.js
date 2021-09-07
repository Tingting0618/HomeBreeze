import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, Badge, Dropdown, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import "./Home.css"


export const HomeList = () => {
  // This state changes when `getHomes()` is invoked below
  const { homes, getHomes } = useContext(HomeContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    getHomes()
  }, [])

  const history = useHistory()

  return (
    <>
      <div className="page" >
        <h3>
          Our Exclusive Listings <Badge bg="success">New</Badge>
        </h3>
        <div style={{ display: "flex" }}>
          <Dropdown style={{ marginLeft: "auto" }}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Listing Date</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Popularity</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        <br />
        <section className="homes">
          {
            homes.map(home => {
              return (
                <>
                  <Card style={{ width: '18rem' , margin:'0.3rem'}}>
                    <Card.Img variant="top" src={home.imageUrl} />
                    <Card.Body>
                      <Card.Title href="#">{home.address1}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${home.price}, {home.bed} beds, {home.bath} baths</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">{home.sqft} sqft, {home.land} Acers</Card.Subtitle>

                      <Card.Text>
                        {home.desc.substring(0,90)}...
                      </Card.Text>
                      <Link to={`/homes/detail/${home.id}`}> <Button variant="secondary" >See Details</Button></Link>
                    </Card.Body>
                  </Card>

                </>
              )
            })
          }
        </section>
      </div>
    </>
  )
}

