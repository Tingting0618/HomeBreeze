import './App.css';
import React from "react"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationView"


function App() {
  return (
    <>
      <h2>Home Breeze</h2>
      <small>Find your next home, here.</small>
      <NavBar />
      <ApplicationViews />
    </>
  );
}
export default App;


{/* <article className="homes">
        <HomeProvider>
          <HomeList />
        </HomeProvider>
      </article> */}