import React from "react";
import SignInEmail from "./signInEmail";
import SignInGoogle from "./signInGoogle";

function SignIn() {
  return (
    <>
      <SignInEmail />
      
      <SignInGoogle />
    </>
  );
}

export default SignIn;