import './App.css';
import { ApplicationViews } from "./components/ApplicationView"
// import { Login } from "./components/auth/Login";
// import { Register } from "./components/auth/Register";
// import { Route, Redirect } from "react-router-dom";

import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // use firebase dependency
import "firebase/compat/auth"; // use firebase auth package
import SignIn from "./components/auth/signIn";
// import Authenticated from "../views/authenticated";
import { api } from "../src/api/dataAccess";

function App() {
  const [user, setUser] = useState(null);

  const checkIfUserExists = (userAuth) => {
    const user = {
      fullName: userAuth.displayName,
      email: userAuth.email,
      uid: userAuth.uid,
      dateVisited: new Date(),
    };
    sessionStorage.setItem("homebreeze_user_email",userAuth.email)
     sessionStorage.setItem("homebreeze_user",userAuth.uid)
    api.getSingleRequest("users", "uid", user.uid).then((data) => {
      if (data === "Nope" || data === null) {
        api.postRequest("users", user).then((user) => {
          setUser(user);
        });
      } else {
        setUser(user);
      }
    });
  };

  useEffect(() => {
    console.log("use effect triggered");
    // You can use this function to watch to see if a user is authenticated
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        checkIfUserExists(authed);
      }
      setUser(null);
    });
  }, []);

  return <>{user ? <ApplicationViews /> : <SignIn />}</>;
}

// function App() {
//   return (
//     <>
//       <Route
//         render={() => {
//           if (sessionStorage.getItem("homebreeze_user")) {
//             return (
//               <>
                
//                 <ApplicationViews />
//               </>
//             );
//           } else {
//             return <Redirect to="/login" />;
//           }
//         }}
//       />

//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/register">
//         <Register />
//       </Route>
//     </>
//   );
// }


export default App;