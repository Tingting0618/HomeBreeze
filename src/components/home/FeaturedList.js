import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"

export const FeaturedList = () => {
  // This state changes when `getHomes()` is invoked below
  const { homes, getHomes } = useContext(HomeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getHomes()
  }, [])


    const homesSort = [...homes]
    const sortByPopularity= homesSort.sort(function (a, b) {
      return b.popularity - a.popularity
    })
    const topTen = sortByPopularity.slice(0,3);

  return (
    <>
      <div className="page" >
        <h3>
          Our Exclusive Listings <Badge bg="dark">Featured</Badge>
        </h3>

        <br />
        <section className="homes">
          {
            topTen.map(home => {
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

