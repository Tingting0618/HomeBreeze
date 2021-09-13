import React, { useState } from "react";
import { emailAuth } from "../helpers/emailAuth";
import { Button, Form, Header, Grid } from "semantic-ui-react";

function SignInEmail() {
  const [register, setRegister] = useState(false);
  // Set your user object
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const onFieldChange = (event) => {
    const newUser = { ...userObject };
    newUser[event.target.id] = event.target.value;
    setUserObject(newUser);
  };

  // Here! Here! Here's your signIn!
  const onSubmitLogin = () => {
    emailAuth.signIn(userObject);
  };

  // Here! Here! Here's your Register!
  const onSubmitRegister = () => {
    emailAuth.register(userObject);
  };

  // Don't forget you can also use the emailAuth.signOut() function

  return (
    <>
        <div class="ui right aligned segment">
            <Grid.Row centered columns={3}>
                    <Grid.Column>
                        <Button basic color="white" disabled={!register} 
                        onClick={() => setRegister(false)}>
                        Sign In
                        </Button>
                        <Button basic color="teal" disabled={register}
                        onClick={() => setRegister(true)}>
                        Sign Up
                        </Button>
                    </Grid.Column>
                    </Grid.Row>
        </div>
    
      <Grid>
        {!register && (
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Sign In
              </Header>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={onFieldChange}
                    placeholder="example@email.com"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={onFieldChange}
                    placeholder="1234@@ at least 6 characters"
                  />
                </Form.Field>

                <Button  color="black"  onClick={onSubmitLogin}>
                  Continue
                </Button>

              </Form>
            </Grid.Column>
          </Grid.Row>
        )}
        {register && (
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register
              </Header>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    id="displayName"
                    onChange={onFieldChange}
                    placeholder="Jane Doe"
                  />
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={onFieldChange}
                    placeholder="example@email.com"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={onFieldChange}
                    placeholder="1234@@ at least 6 characters"
                  />
                </Form.Field>
                <Button  color="black"  onClick={onSubmitRegister}>
                  Register
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </>
  );
}

export default SignInEmail;