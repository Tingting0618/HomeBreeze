import React, { useContext, useEffect, useState } from "react"
import { HomeContext } from "./HomeProvider"
import { Card, Button } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import "./Home.css"

export const MyHomeList = () => {
    // This state changes when `getHomes()` is invoked below
    const { homes, getHomes, deleteHome } = useContext(HomeContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getHomes()
    }, [])

    const history = useHistory()
    const currentUserId = parseInt(sessionStorage.getItem("homebreeze_user"))
    const currentUserEmail = sessionStorage.getItem("homebreeze_user_email")
    const myhomes = homes.filter(home => currentUserId == home.userId || currentUserEmail == home.aEmail)

    return (
        <>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-auto">
                    <button class="btn btn-dark pull-right"
                        style={{ margin: '0.8rem 3rem -0.8rem 0rem' ,fontWeight: "bold"}}
                        onClick={
                            () => history.push("/homes/create")}
                    > Sell New Homes</button>
                </div>
            </div>

            <div className="page" >
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
                                <Card style={{ width: '18rem', margin: '0.5rem' }}>
                                    <Card.Img variant="top" src={home.imageUrl} />
                                    <Card.Body>
                                        <Card.Title href="#">{home.address1}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Listed by: {home.user.name}</Card.Subtitle>
                                        <Card.Text>
                                            {home.desc.substring(0, 90)}...
                                        </Card.Text>
                                        <Link to={`/homes/detail/${home.id}`}> <Button variant="secondary" >See Details</Button></Link>
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
            </div>

        </>
    )
}

