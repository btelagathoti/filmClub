import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./UserProfile.css"
import "./commonStyle.css"

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [activeSection, setActiveSection] = useState('profile');
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        // Profile Section
        firstName: '',
        lastName: '',
        address1: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        languages: '',
        roles: [],
        onScreenRolesSelected: [],
        offScreenRolesSelected: [],
        dob: '',
        contactNumber: '',
        
        // Experience Section
        experience: '',
        
        // Qualification Section
        degree: '',
        university: '',
        eduCity: '',
        eduState: '',
        eduZipCode: '',
        
        // Audition Videos Section
        auditionVideos: {
            Shringara: null,
            Hasya: null,
            Karuna: null,
            Raudra: null,
            Veera: null,
            Bhayanaka: null,
            Bibhatsa: null,
            Adbutha: null,
            Shantha: null
        }
    });

    // Role options
    const onScreenRoles = [
        'Lead Actor / Actress',
        'Supporting Actor / Actress',
        'Antagonist (Villain)',
        'Cameo Appearance',
        'Extra (Background Artist)',
        'Stunt Double',
        'Child Actor',
        'Voice Actor',
        'Stand-in'
    ];
    const offScreenRoles = [
        'Director',
        'Assistant Director (AD)',
        'Producer',
        'Executive Producer',
        'Screenwriter',
        'Script Supervisor',
        'Casting Director',
        'Cinematographer (Director of Photography)',
        'Camera Operator',
        'Editor',
        'Visual Effects (VFX) Artist',
        'Sound Designer',
        'Boom Operator',
        'Composer / Music Director',
        'Art Director',
        'Production Designer',
        'Set Designer',
        'Costume Designer',
        'Makeup Artist',
        'Hair Stylist',
        'Lighting Technician',
        'Gaffer',
        'Best Boy',
        'Grip',
        'Location Manager',
        'Production Assistant (PA)'
    ];

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        
        if (!userEmail) {
            navigate('/loginform');
            return;
        }

        axios.get(`http://localhost:3001/getActors?email=${userEmail}`)
            .then(response => {
                console.log('Loaded user data:', response.data);
                setUserData(response.data);
                // Pre-fill form data if available
                if (response.data) {
                    // Split roles into on/off screen for UI
                    const allRoles = response.data.roles || [];
                    const onScreen = allRoles.filter(r => onScreenRoles.includes(r));
                    const offScreen = allRoles.filter(r => offScreenRoles.includes(r));
                    setFormData(prev => ({
                        ...prev,
                        firstName: response.data.firstName || '',
                        lastName: response.data.lastName || '',
                        address1: response.data.address1 || '',
                        city: response.data.city || '',
                        state: response.data.state || '',
                        country: response.data.country || '',
                        zipCode: response.data.zipCode || '',
                        languages: response.data.languages || '',
                        roles: allRoles,
                        onScreenRolesSelected: onScreen,
                        offScreenRolesSelected: offScreen,
                        experience: response.data.experience || '',
                        degree: response.data.degree || '',
                        university: response.data.university || '',
                        eduCity: response.data.eduCity || '',
                        eduState: response.data.eduState || '',
                        eduZipCode: response.data.eduZipCode || '',
                        dob: response.data.dob || '',
                        contactNumber: response.data.contactNumber || '',
                        auditionVideos: {
                            Shringara: response.data.auditionVideos?.Shringara || null,
                            Hasya: response.data.auditionVideos?.Hasya || null,
                            Karuna: response.data.auditionVideos?.Karuna || null,
                            Raudra: response.data.auditionVideos?.Raudra || null,
                            Veera: response.data.auditionVideos?.Veera || null,
                            Bhayanaka: response.data.auditionVideos?.Bhayanaka || null,
                            Bibhatsa: response.data.auditionVideos?.Bibhatsa || null,
                            Adbutha: response.data.auditionVideos?.Adbutha || null,
                            Shantha: response.data.auditionVideos?.Shantha || null
                        }
                    }));
                }
                setLoading(false);
            })
            .catch(err => {
                console.log('Error loading user data:', err);
                setLoading(false);
            });
    }, [navigate]);

    // Function to reload user data
    const reloadUserData = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) return;

        try {
            const response = await axios.get(`http://localhost:3001/getActors?email=${userEmail}`);
            console.log('Reloaded user data:', response.data);
            setUserData(response.data);
            
            if (response.data) {
                // Split roles into on/off screen for UI
                const allRoles = response.data.roles || [];
                const onScreen = allRoles.filter(r => onScreenRoles.includes(r));
                const offScreen = allRoles.filter(r => offScreenRoles.includes(r));
                setFormData(prev => ({
                    ...prev,
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || '',
                    address1: response.data.address1 || '',
                    city: response.data.city || '',
                    state: response.data.state || '',
                    country: response.data.country || '',
                    zipCode: response.data.zipCode || '',
                    languages: response.data.languages || '',
                    roles: allRoles,
                    onScreenRolesSelected: onScreen,
                    offScreenRolesSelected: offScreen,
                    experience: response.data.experience || '',
                    degree: response.data.degree || '',
                    university: response.data.university || '',
                    eduCity: response.data.eduCity || '',
                    eduState: response.data.eduState || '',
                    eduZipCode: response.data.eduZipCode || '',
                    dob: response.data.dob || '',
                    contactNumber: response.data.contactNumber || '',
                    auditionVideos: {
                        Shringara: response.data.auditionVideos?.Shringara || null,
                        Hasya: response.data.auditionVideos?.Hasya || null,
                        Karuna: response.data.auditionVideos?.Karuna || null,
                        Raudra: response.data.auditionVideos?.Raudra || null,
                        Veera: response.data.auditionVideos?.Veera || null,
                        Bhayanaka: response.data.auditionVideos?.Bhayanaka || null,
                        Bibhatsa: response.data.auditionVideos?.Bibhatsa || null,
                        Adbutha: response.data.auditionVideos?.Adbutha || null,
                        Shantha: response.data.auditionVideos?.Shantha || null
                    }
                }));
            }
        } catch (error) {
            console.error('Error reloading user data:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/loginform');
    };

    const handleInputChange = (e) => {
        const { name, value, type, multiple, options } = e.target;
        if (name === 'roles') {
            // Multi-select: collect selected options
            const selected = Array.from(options).filter(o => o.selected).map(o => o.value);
            if (selected.length > 2) {
                alert('You can select up to 2 roles only.');
                return;
            }
            setFormData(prev => ({
                ...prev,
                roles: selected
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleVideoUpload = (e, rasaType) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (500MB limit)
            const maxSize = 500 * 1024 * 1024; // 500MB in bytes
            if (file.size > maxSize) {
                alert(`File "${file.name}" is too large. Maximum size is 500MB.`);
                e.target.value = ''; // Clear the file input
                return;
            }
            
            setFormData(prev => ({
                ...prev,
                auditionVideos: {
                    ...prev.auditionVideos,
                    [rasaType]: file
                }
            }));
        }
    };

    const handleRoleCheckbox = (role, group) => {
        setFormData(prev => {
            let newOnScreen = [...prev.onScreenRolesSelected];
            let newOffScreen = [...prev.offScreenRolesSelected];
            if (group === 'on') {
                if (newOnScreen.includes(role)) {
                    newOnScreen = newOnScreen.filter(r => r !== role);
                } else {
                    if (newOnScreen.length >= 3) {
                        alert('You can select up to 3 On-Screen roles only.');
                        return prev;
                    }
                    newOnScreen.push(role);
                }
            } else {
                if (newOffScreen.includes(role)) {
                    newOffScreen = newOffScreen.filter(r => r !== role);
                } else {
                    if (newOffScreen.length >= 3) {
                        alert('You can select up to 3 Off-Screen roles only.');
                        return prev;
                    }
                    newOffScreen.push(role);
                }
            }
            return {
                ...prev,
                onScreenRolesSelected: newOnScreen,
                offScreenRolesSelected: newOffScreen,
                roles: [...newOnScreen, ...newOffScreen]
            };
        });
    };

    const handleSave = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            const formDataToSend = new FormData();
            
            // Add profile data
            Object.keys(formData).forEach(key => {
                if (key !== 'auditionVideos') {
                    if (key === 'roles') {
                        formDataToSend.append('roles', JSON.stringify(formData.roles));
                    } else if (key === 'dob') {
                        formDataToSend.append('dob', formData.dob);
                    } else {
                        formDataToSend.append(key, formData[key]);
                    }
                }
            });
            
            // Add videos
            Object.keys(formData.auditionVideos).forEach(rasaType => {
                if (formData.auditionVideos[rasaType]) {
                    formDataToSend.append(`video_${rasaType}`, formData.auditionVideos[rasaType]);
                }
            });
            
            formDataToSend.append('email', userEmail);
            
            console.log('Saving form data:', formData);
            console.log('FormData entries:');
            for (let [key, value] of formDataToSend.entries()) {
                console.log(`${key}:`, value);
            }
            
            const response = await axios.post('http://localhost:3001/updateProfile', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log('Save response:', response.data);
            
            setIsEditing(false);
            alert('Profile updated successfully!');
            
            // Reload the data to show the updated information
            await reloadUserData();
        } catch (error) {
            console.error('Error updating profile:', error);
            console.error('Error response:', error.response?.data);
            console.error('Error status:', error.response?.status);
            alert('Error updating profile. Please try again.');
        }
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // Calculate the max number of rows for the table layout
    const maxRoleRows = Math.max(onScreenRoles.length, offScreenRoles.length);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="user-profile-container">
            {/* Welcome Header - Top Left */}
            <div className="welcome-header">
                <div className="welcome-content">
                    <div className="profile-image-container">
                        {userData?.profilePicture ? (
                            <img 
                                src={`http://localhost:3001${userData.profilePicture}`} 
                                alt="Profile" 
                                className="profile-image"
                            />
                        ) : (
                            <div className="profile-placeholder">
                                <i className="fas fa-user"></i>
                            </div>
                        )}
                    </div>
                    <div className="welcome-info">
                        <h2>Welcome, {userData?.fullname}!</h2>
                        <p className="user-email">{userData?.email}</p>
                        {userData?.contactNumber && (
                            <p className="user-contact">{userData.contactNumber}</p>
                        )}
                    </div>
                    <div className="profile-actions">
                        <button 
                            className="button"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                        {isEditing && (
                            <button className="button" onClick={handleSave}>
                                Save Changes
                            </button>
                        )}
                        <button className="button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Sections - Full Width */}
            <div className="profile-sections">
                {/* Profile Section */}
                <div className="section-card">
                    <div 
                        className="section-header" 
                        onClick={() => toggleSection('profile')}
                    >
                        <h3>Profile Section</h3>
                        <i className={`fas fa-chevron-${activeSection === 'profile' ? 'up' : 'down'}`}></i>
                    </div>
                    {activeSection === 'profile' && (
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Date of Birth</label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <div className="form-control" style={{ background: '#f8f9fa' }}>
                                            {formData.dob ? formData.dob : 'Not set'}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Contact Number (with country code, optional)</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleInputChange}
                                        placeholder="e.g. +91 9876543210"
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Languages (separate with commas)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="languages"
                                        value={formData.languages}
                                        onChange={handleInputChange}
                                        placeholder="Enter languages with comma (e.g., English, Hindi, Telugu)"
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Role (Select up to 3 from each group)</label>
                                {isEditing ? (
                                    <div className="role-checkbox-table-wrapper">
                                        <table className="role-checkbox-table">
                                            <thead>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>On-Screen Roles</th>
                                                    <th style={{textAlign: 'center'}}>Off-Screen Roles</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Array.from({ length: maxRoleRows }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        <td>
                                                            {onScreenRoles[idx] ? (
                                                                <label className="role-checkbox-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.onScreenRolesSelected.includes(onScreenRoles[idx])}
                                                                        onChange={() => handleRoleCheckbox(onScreenRoles[idx], 'on')}
                                                                        disabled={
                                                                            !formData.onScreenRolesSelected.includes(onScreenRoles[idx]) && formData.onScreenRolesSelected.length >= 3
                                                                        }
                                                                    />
                                                                    {onScreenRoles[idx]}
                                                                </label>
                                                            ) : null}
                                                        </td>
                                                        <td>
                                                            {offScreenRoles[idx] ? (
                                                                <label className="role-checkbox-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.offScreenRolesSelected.includes(offScreenRoles[idx])}
                                                                        onChange={() => handleRoleCheckbox(offScreenRoles[idx], 'off')}
                                                                        disabled={
                                                                            !formData.offScreenRolesSelected.includes(offScreenRoles[idx]) && formData.offScreenRolesSelected.length >= 3
                                                                        }
                                                                    />
                                                                    {offScreenRoles[idx]}
                                                                </label>
                                                            ) : null}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="selected-roles-view">
                                        {formData.roles && formData.roles.length > 0 ? (
                                            <ul className="selected-roles-list">
                                                {formData.roles.map(role => (
                                                    <li key={role} className="selected-role-chip">{role}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <span>No role selected</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Experience in Movies Section */}
                <div className="section-card">
                    <div 
                        className="section-header" 
                        onClick={() => toggleSection('experience')}
                    >
                        <h3>Experience in Movies</h3>
                        <i className={`fas fa-chevron-${activeSection === 'experience' ? 'up' : 'down'}`}></i>
                    </div>
                    {activeSection === 'experience' && (
                        <div className="section-content">
                            <div className="mb-3">
                                <label>Tell us about your experience in movies</label>
                                <textarea
                                    className="form-control"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    rows="6"
                                    placeholder="Describe your experience in the film industry..."
                                    disabled={!isEditing}
                                ></textarea>
                            </div>
                        </div>
                    )}
                </div>

                {/* Qualification Section */}
                <div className="section-card">
                    <div 
                        className="section-header" 
                        onClick={() => toggleSection('qualification')}
                    >
                        <h3>Qualification (Education)</h3>
                        <i className={`fas fa-chevron-${activeSection === 'qualification' ? 'up' : 'down'}`}></i>
                    </div>
                    {activeSection === 'qualification' && (
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Degree</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="degree"
                                        value={formData.degree}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Bachelor of Arts"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>University/College Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="eduCity"
                                        value={formData.eduCity}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="eduState"
                                        value={formData.eduState}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="eduZipCode"
                                        value={formData.eduZipCode}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Audition Videos Section */}
                <div className="section-card">
                    <div 
                        className="section-header" 
                        onClick={() => toggleSection('audition')}
                    >
                        <h3>Audition Videos</h3>
                        <i className={`fas fa-chevron-${activeSection === 'audition' ? 'up' : 'down'}`}></i>
                    </div>
                    {activeSection === 'audition' && (
                        <div className="section-content">
                            <div className="row">
                                {Object.keys(formData.auditionVideos).map((rasaType) => (
                                    <div key={rasaType} className="col-md-6 col-lg-4 mb-3">
                                        <div className="video-upload-card">
                                            <h6>{rasaType}</h6>
                                            <p className="rasa-description">
                                                {rasaType === 'Shringara' && '(Love/Beauty)'}
                                                {rasaType === 'Hasya' && '(Laughter)'}
                                                {rasaType === 'Karuna' && '(Sorrow)'}
                                                {rasaType === 'Raudra' && '(Anger)'}
                                                {rasaType === 'Veera' && '(Heroism/Courage)'}
                                                {rasaType === 'Bhayanaka' && '(Terror/Fear)'}
                                                {rasaType === 'Bibhatsa' && '(Disgust)'}
                                                {rasaType === 'Adbutha' && '(Surprise/Wonder)'}
                                                {rasaType === 'Shantha' && '(Peace/Tranquility)'}
                                            </p>
                                            
                                            {/* Show existing video if available */}
                                            {formData.auditionVideos[rasaType] && typeof formData.auditionVideos[rasaType] === 'string' && (
                                                <div className="existing-video">
                                                    <video 
                                                        controls 
                                                        className="video-preview"
                                                        src={`http://localhost:3001${formData.auditionVideos[rasaType]}`}
                                                    >
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    <p className="existing-video-text">Existing video uploaded</p>
                                                </div>
                                            )}
                                            
                                            {/* Show new file name if selected */}
                                            {formData.auditionVideos[rasaType] && typeof formData.auditionVideos[rasaType] === 'object' && (
                                                <p className="file-name">
                                                    {formData.auditionVideos[rasaType].name}
                                                </p>
                                            )}
                                            
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="video/*"
                                                onChange={(e) => handleVideoUpload(e, rasaType)}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;