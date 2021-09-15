import React, { useContext, useEffect, useState } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, Badge, Dropdown, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Fuse from 'fuse.js'
import "./Home.css"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export const HomeList = () => {
  // This state changes when `getHomes()` is invoked below
  const { homes, getHomes } = useContext(HomeContext)
  const [homesDisplay, setHomesDisplay] = useState([])

  let query = useQuery();
  //useEffect - reach out to the world for something
  useEffect(() => {
    getHomes()
  }, [])

  useEffect(() => {
      const searchTerm = query.get("search")
      const fuse = new Fuse(homes, {
        includeScore: true,
        keys: ['city', 'address1', 'zipcode', 'aName', 'aEmail']
      })
      
      if (searchTerm === null || searchTerm === "" || searchTerm === " ") {
        setHomesDisplay(homes)
      } else {
        const filtered_homes = fuse.search(`${searchTerm}`)
        const formated_homes = filtered_homes.map(home => {
          return {
            id: home.item.id,
            userId: home.item.userId,
            aName: home.item.aName,
            aEmail: home.item.aEmail,
            aPhone: home.item.aPhone,
            price: home.item.price,
            bed: home.item.bed,
            sqft: home.item.sqft,
            sqft: home.item.sqft,
            land: home.item.land,
            address1: home.item.address1,
            city: home.item.city,
            state: home.item.state,
            zipcode: home.item.zipcode,
            desc: home.item.desc,
            imageUrl: home.item.imageUrl,
          }
        })
        setHomesDisplay(formated_homes)
      }
  }, [homes])


  const sortPrice = () => {
    const homesSort = [...homesDisplay]
    homesSort.sort(function (a, b) {
      return a.price - b.price
    })
    setHomesDisplay(homesSort)
  }

  const sortBeds = () => {
    const homesSort = [...homesDisplay]
    homesSort.sort(function (a, b) {
      return b.bed - a.bed
    })
    setHomesDisplay(homesSort)
  }

  const sortPopularity = () => {
    const homesSort = [...homesDisplay]
    homesSort.sort(function (a, b) {
      return b.popularity - a.popularity
    })
    setHomesDisplay(homesSort)
  }

  return (
    <>
      <div className="page" >
        <h3>
          Our Exclusive Listings <Badge bg="success">New</Badge>
        </h3>
        {/* style={{ marginLeft: "auto" }} */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <InputGroup >
            <Dropdown >
              <Dropdown.Toggle variant="grey" id="dropdown-basic">
                Beds
              </Dropdown.Toggle>
              {/* onClick={filterBed1} */}
              <Dropdown.Menu >
                <Dropdown.Item >1+</Dropdown.Item>
                <Dropdown.Item >2+</Dropdown.Item>
                <Dropdown.Item >3+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
              <Dropdown.Toggle variant="gery" id="dropdown-basic">
                Lot Size
              </Dropdown.Toggle>
              {/* onClick={filterBed1} */}
              <Dropdown.Menu >
                <Dropdown.Item >0.5 Acers+</Dropdown.Item>
                <Dropdown.Item >1 Acers+</Dropdown.Item>
                <Dropdown.Item >2 Acers+</Dropdown.Item>
                <Dropdown.Item >3 Acers+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>


          <InputGroup className="mb-3" style={{ width: "25%" }}>
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <FormControl
              placeholder="Max Price"
              aria-label="Min Price"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Dropdown >
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item onClick={sortPrice} >Price</Dropdown.Item>
              <Dropdown.Item onClick={sortBeds}>Bedrooms</Dropdown.Item>
              <Dropdown.Item onClick={sortPopularity}>Popularity</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

        <br />
        <section className="homes">
          {
            homesDisplay.map(home => {
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
}

