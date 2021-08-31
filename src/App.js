import './App.css';
import {Button} from 'react-bootstrap';
import React from "react"
import { Home } from "./components/home/Home"


function App() {
  return (
<>
<h2>Home Breeze</h2>
        <small>Find your next home, here.</small>
        <div>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
  </div>
  <Home />
  <Home />
</>
  );
}

export default App;
