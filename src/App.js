import './App.css';
import React from "react"
import { NavBar_main } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationView"
import { Route, Redirect } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Route
        render={() => {
          if (sessionStorage.getItem("homebreeze_user")) {
            return (
              <>
                <NavBar_main />
                <ApplicationViews />
              </>
            );
          } else {
          //  return (
          //     <>
          //       <NavBar_main />
          //       <ApplicationViews />
          //     </>
          //   );
            return <Redirect to="/login" />;
          }
        }} */}
      <Route
        render={() => {

          return (
            <>
              
              <ApplicationViews />
            </>
          );

        }}
      />

    </>
  );
}
export default App;