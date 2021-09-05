import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'
import React, { useContext, useState, useEffect } from "react"
import { HomeContext } from "../home/HomeProvider"
import { useHistory, useParams } from 'react-router-dom'

export const HomeForm = () => {
    const { addHome, getHomeById, updateHome } = useContext(HomeContext)

    const [home, setHome] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const { homeId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newHome = { ...home }
        newHome[event.target.id] = event.target.value
        setHome(newHome)
    }



    const handleClickSubmitForm = () => {
        setIsLoading(true);
        if (homeId) {
            updateHome({
                id: home.id,
                userId: parseInt(sessionStorage.getItem("homebreeze_user")),
                aName: home.aName,
                aEmail: home.aEmail,
                aPhone: home.aPhone,
                price: home.price,
                bed: home.bed,
                bath: home.bath,
                sqft: home.sqft,
                land: home.land,
                address1: home.address1,
                address2: home.address2,
                city: home.city,
                state: home.state,
                zipcode: home.zipcode,
                desc: home.desc,
                imageUrl: home.imageUrl
            }).then(() => history.push(`/mylistings`))
        } else {
            addHome({
                userId: parseInt(sessionStorage.getItem("homebreeze_user")),
                aName: home.aName,
                aEmail: home.aEmail,
                aPhone: home.aPhone,
                price: home.price,
                bed: home.bed,
                bath: home.bath,
                sqft: home.sqft,
                land: home.land,
                address1: home.address1,
                address2: home.address2,
                city: home.city,
                state: home.state,
                zipcode: home.zipcode,
                desc: home.desc,
                imageUrl: home.imageUrl
            })
                .then(() => history.push("/mylistings"))
        }
    }

    useEffect(() => {

        if (homeId) {
            getHomeById(homeId)
                .then(home => {
                    setHome(home)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    return (
        <>
            <h3>List My Home</h3>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>My Agent Name</Form.Label>
                        <Form.Control id="aName" type="aName" defaultValue={home.aName} placeholder="Your agent's name" onChange={handleControlledInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>My Agent Email</Form.Label>
                        <Form.Control id="aEmail" type="aEmail" defaultValue={home.aEmail} placeholder="Your agent's email" onChange={handleControlledInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>My Agent Phone</Form.Label>
                        <Form.Control id="aPhone" type="aPhone" defaultValue={home.aPhone} placeholder="Your agent's phone#" onChange={handleControlledInputChange} />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control id="price" type="price" defaultValue={home.price} placeholder="Price" onChange={handleControlledInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridBed">
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control id="bed" type="bed" defaultValue={home.bed} placeholder="Number of bedrooms" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBath">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control id="bath" type="bath" defaultValue={home.bath} placeholder="Number of bathrooms" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSqft">
                        <Form.Label>Total Sqft</Form.Label>
                        <Form.Control id="sqft" type="sqft" defaultValue={home.sqft} placeholder="Total Sqft" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLand">
                        <Form.Label>Land</Form.Label>
                        <Form.Control id="land" type="land" defaultValue={home.land} placeholder="Total Acers" onChange={handleControlledInputChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control id="address1" defaultValue={home.address1} placeholder="1234 Main St" onChange={handleControlledInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control id="address2" defaultValue={home.address2} placeholder="Apartment, studio, or floor" onChange={handleControlledInputChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control id="city" type="text" defaultValue={home.city} placeholder="City" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control id="state" type="text" defaultValue={home.state} placeholder="State" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control id="zipcode" type="text" defaultValue={home.zipcode} placeholder="Zip" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <FloatingLabel id="desc" controlId="floatingTextarea2" label="Description">
                    <Form.Control
                        id="desc"
                        as="textarea"
                        defaultValue={home.desc}
                        placeholder="Describe the home here"
                        style={{ height: '100px' }}
                        onChange={handleControlledInputChange}
                    />
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Cover Photos</Form.Label>
                    <Form.Control id="imageUrl" defaultValue={home.imageUrl} placeholder="URL" onChange={handleControlledInputChange} />
                </Form.Group>

                <Form.Group className="position-relative mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        onChange={handleControlledInputChange}
                        id="validationFormik106"
                        feedbackTooltip
                    />
                </Form.Group>

                <Button
                    variant="success"
                    type="submit"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault()
                        handleClickSubmitForm()
                    }}>
                    {homeId ? <>Update Home</> : <>List New Home</>}</Button>
            </Form>
        </>
    )
}