import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import {Card,Button} from 'react-bootstrap';
import "./Home.css"

export const HomeList = () => {
    // This state changes when `getHomes()` is invoked below
    const { homes, getHomes } = useContext(HomeContext)
  
    //useEffect - reach out to the world for something
    useEffect(() => {
      getHomes()
    }, [])

    return (
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
      )
    }

