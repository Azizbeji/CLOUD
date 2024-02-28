import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <div>
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/WatchOS_Apple_Maps_logo.png"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <Navbar.Brand href="/" className="text-light fs-3">
          GPS Companion
        </Navbar.Brand>
        <div className="options-Container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Contact Us</NavLink>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
