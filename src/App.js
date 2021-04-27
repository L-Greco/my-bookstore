import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Form, NavDropdown, Button, FormControl } from "react-bootstrap"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <div className="App">
      <MyNav />
      <Welcome h1="Welcome to Book Mania" p="“A room without books is like a body without a soul.”
Marcus Tullius Cicero" btn="there is really no meaning for this button" />


    </div>

  );
}

export default App;
