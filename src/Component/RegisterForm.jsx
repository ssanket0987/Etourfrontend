import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

  const validatePassword = (value) => {
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    if (passwordError) return;

    const customer = { firstName, lastName, email, password };

    try {
      const response = await fetch("http://localhost:8086/api/customers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });

      if (!response.ok) throw new Error("Failed to register customer");

      alert("🎉 Account created successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      setPasswordError("");
    } catch (error) {
      console.error("❌ Error:", error.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ marginTop: "40px" }}>
      <Row className="shadow-lg p-4 rounded-3 w-75 bg-white">
        {/* Left Side - Image */}
        <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
          <img
            src=""
            alt="Register"
            className="img-fluid rounded"
            style={{ maxHeight: "450px" }}
          />
        </Col>

        {/* Right Side - Form */}
        <Col md={6} className="p-4">
          <h3 className="text-center mb-4 text-primary">Register</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                required
              />
              {passwordError && <span className="text-danger">{passwordError}</span>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (password !== e.target.value) {
                    setErrorMessage("Passwords do not match!");
                  } else {
                    setErrorMessage("");
                  }
                }}
                required
              />
              {errorMessage && <span className="text-danger">{errorMessage}</span>}
            </Form.Group>

            {/* Show Password Checkbox */}
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                label="Show Password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#3D8BFD", borderColor: "#3D8BFD" }}
              disabled={passwordError !== "" || errorMessage !== ""}
            >
              Register
            </Button>

            <div className="text-center mt-3">
              <span
                className="text-muted"
                style={{ fontSize: "0.9rem", cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/login")}
              >
                Already have an account? Login
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;






