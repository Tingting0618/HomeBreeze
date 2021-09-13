import React from "react";
import { googleAuth } from "../helpers/googleAuth";
import { Button, Header, Grid } from "semantic-ui-react";
import GoogleButton from 'react-google-button';


function SignInGoogle() {

  const onSubmitLogin = () => {
    googleAuth.signIn();
  };

  return (
    <>
      <Grid>
        <Grid.Row centered columns={3}>

          <Grid.Column>

            <Header as="h2" textAlign="center">
            OR
            </Header>

            <GoogleButton label='Connect With Google' basic color="grey" onClick={onSubmitLogin}>
              {/* <i class="google icon"></i>Connect With Google */}
            </GoogleButton>

        
          </Grid.Column>

        </Grid.Row>

      </Grid>
    </>
  );
}

export default SignInGoogle;