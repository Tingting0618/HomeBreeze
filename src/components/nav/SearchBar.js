import React from "react"
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap'

export const SearchBar = () => {

    return (
        <>

            <Card className=" bg-dark text-white text-center align-middle">

                <Card.Img src="https://www.compass.com/ucfe-assets/homepage/homepage-v1.24.1/assets/hero_tablet2x_res.jpeg" 
                alt="Card image" 
                style={{hight: "90%"}}
                responsive />


                <Card.ImgOverlay>
                    <br />
                    <br />
                    
                    <div className="container" >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                        <Card.Title style={{ fontSize: "2.8rem" }} >Find your next home, here.</Card.Title>
                        <InputGroup className="mb-3" className="align-middle">
                            <FormControl
                                placeholder="City, Neighborhood, Address, ZIP, Agent, MLS #"
                                aria-label="City, Neighborhood, Address, ZIP, Agent, MLS #"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="dark" style={{fontWeight: "bold"}}>Search</Button>
                        </InputGroup>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </>
    )
}



