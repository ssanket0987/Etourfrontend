import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import user icon

function NavBarComponent() {
    const [loggedIn, setLoggedIn] = useState(false); // Assume login state (Update with real auth logic)

    return (
        <Navbar
            expand="lg"
            data-bs-theme="dark"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                height: "5rem",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "100%",
                padding: "0 2rem",
            }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand
                    as={Link}
                    to="/dashboard"
                    className="fw-bold text-white d-flex align-items-center"
                >
                    <span style={{ color: "#3D8BFD" }}>TRAVEL</span> VISTA
                </Navbar.Brand>

                {/* Navbar Items */}
                <Nav className="mx-auto d-flex gap-4">
                    <Nav.Link as={Link} to="/dashboard" className="text-white">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/tour-list" className="text-white">
                        Tour List
                    </Nav.Link>
                    
                    <Nav.Link as={Link} to="/blog" className="text-white">
                        Blog
                    </Nav.Link>
                    <Nav.Link as={Link} to="/popularPackage" className="text-white">
                        Package
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link as={Link} to={loggedIn ? "/profile" : "/login"} className="text-white">
                        <FaUserCircle size={24} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;


