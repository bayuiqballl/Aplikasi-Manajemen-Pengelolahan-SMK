import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <a
          onClick={() => {
            props.history.push("/");
          }}
        >
          Home
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="">
          <Nav.Link
            onClick={() => {
              props.history.push("/Siswa");
            }}
          >
            Data Siswa
          </Nav.Link>
          <Nav.Link>
            <a
              onClick={() => {
                props.history.push("/Guru");
              }}
            >
              Data Guru
            </a>
          </Nav.Link>
          <Nav.Link>
            <a
              onClick={() => {
                props.history.push("/Staff");
              }}
            >
              Data Staff
            </a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
