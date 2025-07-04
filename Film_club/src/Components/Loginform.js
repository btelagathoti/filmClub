import { useState, React, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import "./Loginform.css"
import "./Signup.css"
import "./commonStyle.css"

const Loginform = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const inputElement = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        
        axios.post('http://localhost:3001/loginform', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    // Store user email in localStorage
                    localStorage.setItem('userEmail', email);
                    setIsLoggedIn(true);
                    navigate('/UserProfile');
                } else {
                    setError(result.data);
                }
            })
            .catch(err => {
                console.log(err);
                setError("Login failed. Please try again.");
            });
    }

    const inputFocus = () => {
        inputElement.current.focus();
    }

    return (
        <div>
            {/* <Navbar /> */}

            <div className="container">
                <form className="signupForm" onSubmit={handleSubmit}>
                    <h1 className="heading">Login</h1>
                    {error && <div className="error-message">{error}</div>}
                    <label>Enter Email:</label>
                    <input 
                        className="email" 
                        type='email' 
                        ref={inputElement}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Enter Password:</label>
                    <input 
                        className="password" 
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="submit-btn" type="submit" onClick={inputFocus}>
                        Submit
                    </button>

                    {isLoggedIn && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>Login Successful!</p>
                                <button onClick={() => setIsLoggedIn(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </form>
                
                <p>Create an Account?</p>
                <Link to="/Signup" className="button">Create Account</Link>
            </div>
        </div>
    )
}

export default Loginform;