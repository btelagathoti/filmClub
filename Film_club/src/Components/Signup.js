import { useState, useRef, React } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import "./commonStyle.css"

const Signup = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [error, setError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();
    const inputElement = useRef();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Validate profile picture is uploaded
        if (!profilePicture) {
            alert("Please upload a profile picture!");
            setError("Please upload a profile picture!");
            return;
        }

        // Validate password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            setError("Password must be at least 6 characters long!");
            return;
        }

        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            setError("Passwords do not match!");
            return;
        }

        // Create form data for file upload
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('password', password);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        try {
            const result = await axios.post('http://localhost:3001/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            // Store user email in localStorage
            localStorage.setItem('userEmail', email);
            
            // Show success message
            setShowSuccess(true);
            
            // Redirect after 2 seconds
            setTimeout(() => {
                navigate('/UserProfile');
            }, 2000);
            
        } catch (err) {
            console.log(err);
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Signup failed. Please try again.");
            }
        }
    };

    const inputFocus = () => {
        inputElement.current.focus();
        console.log("iam from inputfocus");
    }

    return (
        <div>
            {/* <Navbar /> */}

            <div className="container">
                <form className="signupForm" onSubmit={handleSubmit}>
                    <h1 className="heading">Signup</h1>
                    {error && <div className="error-message">{error}</div>}
                    {showSuccess && (
                        <div className="success-message">
                            <h3>Account Created Successfully!</h3>
                            <p>Redirecting to your profile...</p>
                        </div>
                    )}
                    
                    <div className="profile-picture-container">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Profile Preview" className="profile-preview" />
                        ) : (
                            <div className="profile-placeholder">
                                <i className="fas fa-user"></i>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="profile-upload"
                            id="profile-upload"
                        />
                        <label htmlFor="profile-upload" className="upload-label">
                            Upload Profile Picture
                        </label>
                    </div>

                    <label>Enter Full Name:</label>
                    <input 
                        className="fullname" 
                        type='text' 
                        ref={inputElement}
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />

                    <label>Enter Email:</label>
                    <input 
                        className="email" 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Enter Password:</label>
                    <input 
                        className="password" 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password:</label>
                    <input 
                        className="password" 
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button className="submit-btn" type="submit">Sign Up</button>
                </form>
                <p>Already Have an Account?</p>
                <Link to="/loginform" className="button">Login</Link>
            </div>
        </div>
    );
};

export default Signup;