import React, { useContext, useEffect } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "./Home.css"

export const MyHomeList = () => {
    // This state changes when `getHomes()` is invoked below
    const { homes, getHomes, deleteHome } = useContext(HomeContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getHomes()
    }, [])

    const history = useHistory()
    const myhomes = homes.filter(home => home.userId == parseInt(sessionStorage.getItem("homebreeze_user")))


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


                    myhomes.map(home => {
                        const handleDelete = () => {
                            deleteHome(home.id)
                                .then(() => {
                                    history.push("/mylistings")
                                })
                        }
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={home.imageUrl} />
                                <Card.Body>
                                    <Card.Title href="#">{home.address1}</Card.Title>
                                    <Card.Text>
                                        {home.desc}
                                    </Card.Text>
                                    <Button variant="secondary"
                                        onClick={() => {
                                            history.push(`/homes/edit/${home.id}`)
                                        }}>Edit</Button>
                                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </section>

        </>
    )
}

