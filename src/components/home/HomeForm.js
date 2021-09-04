import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'
import React, { useContext, useState } from "react"
import { HomeContext } from "../home/HomeProvider"
import { useHistory } from 'react-router-dom'

export const HomeForm = () => {
    const { addHome } = useContext(HomeContext)

    const [home, setHome] = useState({
        address: "",
        desc: "",
        zipcode: "",
        price: 0,
        imageUrl:"" ,
        file: null,
        terms: false,
        userId: 1
    });

    const handleControlledInputChange = (event) => {
        const newHome = { ...home }
        newHome[event.target.id] = event.target.value
        setHome(newHome)
    }


    const history = useHistory()
    const handleClickSubmitForm = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        const newHome = {
            address: home.address1,
            desc: home.desc,
            zipcode: home.zipcode,
            price: home.price,
            imageUrl: home.imageUrl,
            userId: 1
        }
        addHome(newHome)
            .then(() => history.push("/buy"))
    }


    return (
        <>
            <h3>List My Home</h3>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Enter email" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control id="price" type="price" placeholder="Price" onChange={handleControlledInputChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBed">
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control id="bed" type="bed" placeholder="Number of bedrooms" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBath">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control id="bath" type="bath" placeholder="Number of bathrooms" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSqft">
                        <Form.Label>Total Sqft</Form.Label>
                        <Form.Control id="sqft" type="sqft" placeholder="Total Sqft" onChange={handleControlledInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLand">
                        <Form.Label>Land</Form.Label>
                        <Form.Control id="land" type="land" placeholder="Total Acers" onChange={handleControlledInputChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control id="address1" placeholder="1234 Main St" onChange={handleControlledInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control id="address2" placeholder="Apartment, studio, or floor" onChange={handleControlledInputChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control id="city" type="text" placeholder="City" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control id="state" type="text" placeholder="State" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control id="zipcode" type="text" placeholder="Zip" required onChange={handleControlledInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <FloatingLabel id="desc" controlId="floatingTextarea2" label="Description">
                    <Form.Control
                        id="desc"
                        as="textarea"
                        placeholder="Describe the home here"
                        style={{ height: '100px' }}
                        onChange={handleControlledInputChange}
                    />
                </FloatingLabel>

                {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Upload Photos</Form.Label>
                    <Form.Control id="file" type="file" multiple onChange={handleControlledInputChange} />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Cover Photos</Form.Label>
                    <Form.Control id="imageUrl" placeholder="URL" onChange={handleControlledInputChange} />
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

                <Button type="submit" onClick={handleClickSubmitForm}>Submit Form</Button>
            </Form>
        </>
    )
}