import React, { useState } from "react"
import {Form, Button,InputGroup,Navbar,Container,Card} from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key homebreeze_user in session Storage. Change below if needed!
                    sessionStorage.setItem("homebreeze_user", exists.id)
                    sessionStorage.setItem("homebreeze_user_email", exists.email)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <>

        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>

                    
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">HomeBreeze</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <br />
            <section >
                <Form className="signin" onSubmit={handleLogin}>
                    
                    <Card.Title style={{textAlign:"center"}}>Sign In</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="email" 
                                type="email" 
                                placeholder="name@example.com"
                                required autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                        {/* <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} /> */}
                            <Button type="submit" variant="dark">
                                Sign in
                            </Button>
                    
                    <Form.Group >
                        <br />
                        <Form.Label style={{padding:"0em 1rem 0rem 0rem"}} >
                            New to us?  
                        </Form.Label>
                        
                        <Link to="/register" >Register Here</Link>
                    </Form.Group>      
                </Form>                
            </section>
        </main>
        </>
    )
}
