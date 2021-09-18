import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Container, Button, Form, Card } from 'react-bootstrap'


import "./Login.css"

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                                sessionStorage.setItem("homebreeze_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <>


            <Container>

                <dialog className="dialog dialog--password" open={conflictDialog}>
                    <div>Account with that email address already exists</div>
                    <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
                </dialog>


                <main style={{ textAlign: "center", display: "flex" }} className="justify-content-md-center">

                    <Form onSubmit={handleRegister}>
                        <br/>
                        <br/>
                        <br/>
                      
                        <Card.Title style={{ textAlign: "center" }}>Please Register for HomeBreeze</Card.Title>
                        <br />
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree terms and conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </main>

            </Container>
        </>
    )
}