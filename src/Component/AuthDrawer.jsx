import React, { useState } from 'react';
import { Offcanvas, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthDrawer = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

    const passValidation = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (passwordRegex.test(value)) {
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid password.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            alert(`Registered successfully as ${email}`);
        } else if (email === 'admin@gmail.com' && password === 'Pass@123') {
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
        handleClose();
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{isSignup ? 'Sign Up' : 'Login'}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    {isSignup && (
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" required />
                        </Form.Group>
                    )}
                    {isSignup && (
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" required />
                        </Form.Group>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
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
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={passValidation}
                            required
                        />
                        {errorMessage && <span className="text-danger">{errorMessage}</span>}
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        {isSignup ? 'Sign Up' : 'Login'}
                    </Button>
                </Form>
                <div className="text-center mt-3">
                    <span
                        onClick={() => setIsSignup(!isSignup)}
                        style={{ cursor: 'pointer', color: 'blue' }}
                    >
                        {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                    </span>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default AuthDrawer;
