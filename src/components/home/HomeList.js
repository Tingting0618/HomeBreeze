import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, Badge, Dropdown, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Fuse from 'fuse.js'
import "./Home.css"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export const HomeList = () => {
  // This state changes when `getHomes()` is invoked below
  const { homes, getHomes } = useContext(HomeContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    getHomes()
  }, [])

  let query = useQuery();
  const searchTerm = query.get("search")
  // 2. Set up the Fuse instance
  const fuse = new Fuse(homes, {
    includeScore: true,
    keys: ['city', 'address1', 'zipcode', 'aName', 'aEmail']
  })

  // 3. Now search!{keywords}
  if (searchTerm === null | searchTerm === "") {
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
                    <Card key={home.id} style={{ width: '18rem', margin: '0.3rem' }}>
                      <Card.Img variant="top" src={home.imageUrl} />
                      <Card.Body>
                        <Card.Title href="#">{home.address1}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${home.price}, {home.bed} beds, {home.bath} baths</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{home.sqft} sqft, {home.land} Acers</Card.Subtitle>

                        <Card.Text>
                          {home.desc.substring(0, 90)}...
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
  } else {
    const filtered_homes = fuse.search(`${searchTerm}`)
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
              filtered_homes.map(home => {
                if (parseFloat(home.score) >= 0.0) {
                  return (
                    <>
                      <Card key={home.item.id} style={{ width: '18rem', margin: '0.3rem' }}>
                        <Card.Img variant="top" src={home.item.imageUrl} />
                        <Card.Body>
                          <Card.Title href="#">{home.item.address1}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">${home.item.price}, {home.item.bed} beds, {home.item.bath} baths</Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted">{home.item.sqft} sqft, {home.item.land} Acers</Card.Subtitle>

                          <Card.Text>
                            {home.item.desc.substring(0, 90)}...
                          </Card.Text>
                          <Link to={`/homes/detail/${home.item.id}`}> <Button variant="secondary" >See Details</Button></Link>
                        </Card.Body>
                      </Card>

                    </>
                  )
                }

              })
            }
          </section>
        </div>
      </>
    )
  }

}

