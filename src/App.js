import './App.css';
import React from "react"
import { NavBar_main } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationView"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Route, Redirect } from "react-router-dom";


function App() {
  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("homebreeze_user")) {
            return (
              <>
                <h2>Home Breeze</h2>
                <small>Find your next home, here.</small>
                <NavBar_main />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
}
export default App;


{/* <article className="homes">
        <HomeProvider>
          <HomeList />
        </HomeProvider>
      </article> */}