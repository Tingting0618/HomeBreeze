import './App.css';
import {Button, InputGroup,FormControl} from 'react-bootstrap';
import React from "react"
import { Home } from "./components/home/Home"


function App() {
  return (
<>
<h2>Home Breeze</h2>
        <small>Find your next home, here.</small>
        
        <InputGroup className="mb-3">
    <FormControl
      placeholder="City, Neighborhood, Zipcode"
      aria-label="City, Neighborhood, Zipcode"
      aria-describedby="basic-addon2"
    />
    <Button variant="dark">Search</Button>
  </InputGroup>
        

  <Home />
  <Home />
</>
  );
}

export default App;
