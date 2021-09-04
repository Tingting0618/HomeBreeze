import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
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
      <InputGroup className="mb-3">
        <FormControl
          placeholder="City, Neighborhood, Address, ZIP, Agent, MLS #"
          aria-label="City, Neighborhood, Address, ZIP, Agent, MLS #"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark">Search</Button>
      </InputGroup>

      <button onClick={
        () => history.push("/homes/create")
      }>
        Sell My Home
      </button>

      <section className="homes">
        {
          homes.map(home => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={home.imageUrl} />
                <Card.Body>
                  <Card.Title href="#">{home.address}</Card.Title>
                  <Card.Text>
                    {home.desc}
                  </Card.Text>
                  <Button variant="secondary">Contact Agent</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </section>

    </>
  )
}

