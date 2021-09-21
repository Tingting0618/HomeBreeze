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
  const [selectedBed, setSelectedBed] = useState("")
  const [selectedLand, setSelectedLand] = useState("")

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


  const filterBed2 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.bed >= 2)
    setHomesDisplay(homesFilterResults)
    const selectedBed = "2+"
    setSelectedBed(selectedBed)
  }
  const filterBed3 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.bed >= 3)
    setHomesDisplay(homesFilterResults)
    const selectedBed = "3+"
    setSelectedBed(selectedBed)
  }
  const filterBed4 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.bed >= 4)
    setHomesDisplay(homesFilterResults)
    const selectedBed = "4+"
    setSelectedBed(selectedBed)
  }

  const filterLot05 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.land >= 0.5)
    setHomesDisplay(homesFilterResults)
    const selectedLand = "0.5+"
    setSelectedLand(selectedLand)
  }
  const filterLot1 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.land >= 1)
    setHomesDisplay(homesFilterResults)
    const selectedLand = "1+"
    setSelectedLand(selectedLand)
  }
  const filterLot2 = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => home.land >= 2)
    setHomesDisplay(homesFilterResults)
    const selectedLand = "2+"
    setSelectedLand(selectedLand)
  }

  const [searchPrice, setsearchPrice] = useState(990000000)
  const handleSearchPriceInputChange = (event) => {
    setsearchPrice(event.target.value)
  }
  const filterPrice = () => {
    const homesFilter = [...homesDisplay]
    const homesFilterResults = homesFilter.filter(home => parseInt(home.price) <= parseInt(searchPrice))
    setHomesDisplay(homesFilterResults)
  }

  const rerender = () => {
    window.location.href = '/buy'
  }


  return (
    <>
      <div className="page" >
        <h3>
        Our Exclusive Listings <Badge bg="success">New</Badge> 
        </h3>
        <br/>
        {/* style={{ marginLeft: "auto" }} */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <InputGroup > */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Dropdown >
              <Dropdown.Toggle variant="grey" id="dropdown-basic">
              {selectedBed ? selectedBed : ""}
                Beds
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item onClick={filterBed2}>2+</Dropdown.Item>
                <Dropdown.Item onClick={filterBed3}>3+</Dropdown.Item>
                <Dropdown.Item onClick={filterBed4}>4+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
              <Dropdown.Toggle variant="gery" id="dropdown-basic">
              {selectedLand ? selectedLand : ""}
                Lot Size
              </Dropdown.Toggle>
              {/* onClick={filterBed1} */}
              <Dropdown.Menu >
                <Dropdown.Item onClick={filterLot05}>0.5 Acers+</Dropdown.Item>
                <Dropdown.Item onClick={filterLot1}>1 Acers+</Dropdown.Item>
                <Dropdown.Item onClick={filterLot2}>2 Acers+</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <InputGroup className="mb-3" style={{ width: "50%" }}> */}
            <InputGroup style={{ width: "35%",margin: "0.2rem" }}>
              <InputGroup.Text id="basic-addon1" >$</InputGroup.Text>
              <FormControl
                placeholder="Max Price"
                aria-label="Max Price"
                aria-describedby="basic-addon1"
                onChange={handleSearchPriceInputChange}
              />
              <Button onClick={filterPrice} variant="secondary">Apply</Button>
            </InputGroup>

            <Button onClick={rerender} 
            variant="dark" 
            style={{  margin: "0.2rem" }}>Clear All Filters</Button>
          {/* </InputGroup> */}
          </div>



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
                      <Card.Subtitle className="mb-2 text-muted">${Intl.NumberFormat().format(home.price)} {home.bed} beds, {home.bath} baths</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">{Intl.NumberFormat().format(home.sqft)} sqft, {home.land} Acers</Card.Subtitle>

                      <Card.Text>
                        {home.desc.substring(0, 60)}...
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

