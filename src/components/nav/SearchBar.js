import React,{useState} from "react"
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory} from 'react-router-dom'


export const SearchBar = () => {
    const [searchKey, setsearchKey] = useState(" ")

    const handleSearchControlledInputChange = (event) => {
        setsearchKey(event.target.value)
    }
    const history = useHistory()
    const handleClickSubmitSearch = () => {
        console.log(searchKey)
        history.push(`/buy?search=${searchKey}`)
    }


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
                                onChange={handleSearchControlledInputChange}
                            />
                            <Button variant="dark" 
                            style={{fontWeight: "bold"}}
                            onClick={event => {
                                event.preventDefault()
                                handleClickSubmitSearch()
                            }}>Search</Button>
                        </InputGroup>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </>
    )
}