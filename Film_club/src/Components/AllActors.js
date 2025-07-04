import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllActors.css';
import { useNavigate } from "react-router-dom";

const AllActors = () => {
    const [actors, setActors] = useState([]);
    const [filteredActors, setFilteredActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [displayCount, setDisplayCount] = useState(5);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [onScreenDropdownOpen, setOnScreenDropdownOpen] = useState(false);
    const [offScreenDropdownOpen, setOffScreenDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Define role categories
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
        fetchAllActors();
    }, []);

    useEffect(() => {
        filterActors();
    }, [actors, selectedRoles]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-wrapper')) {
                setOnScreenDropdownOpen(false);
                setOffScreenDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchAllActors = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3001/getAllActors');
            setActors(response.data);
            setError('');
        } catch (err) {
            console.error('Error fetching actors:', err);
            setError('Failed to load actors. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const filterActors = () => {
        if (selectedRoles.length === 0) {
            setFilteredActors(actors);
        } else {
            const filtered = actors.filter(actor => 
                actor.roles && actor.roles.some(role => selectedRoles.includes(role))
            );
            setFilteredActors(filtered);
        }
        setDisplayCount(5); // Reset display count when filtering
        setExpandedCards(new Set()); // Reset expanded cards
    };

    const toggleRoleSelection = (role) => {
        setSelectedRoles(prev => {
            if (prev.includes(role)) {
                return prev.filter(r => r !== role);
            } else {
                return [...prev, role];
            }
        });
    };

    const toggleOnScreenDropdown = () => {
        console.log('Toggling On Screen dropdown, current state:', onScreenDropdownOpen);
        setOnScreenDropdownOpen(!onScreenDropdownOpen);
        setOffScreenDropdownOpen(false); // Close other dropdown
    };

    const toggleOffScreenDropdown = () => {
        console.log('Toggling Off Screen dropdown, current state:', offScreenDropdownOpen);
        setOffScreenDropdownOpen(!offScreenDropdownOpen);
        setOnScreenDropdownOpen(false); // Close other dropdown
    };

    const removeRole = (role) => {
        setSelectedRoles(prev => prev.filter(r => r !== role));
    };

    const toggleCardExpansion = (actorId) => {
        const newExpandedCards = new Set(expandedCards);
        if (newExpandedCards.has(actorId)) {
            newExpandedCards.delete(actorId);
        } else {
            newExpandedCards.add(actorId);
        }
        setExpandedCards(newExpandedCards);
    };

    const loadMore = () => {
        setDisplayCount(prev => prev + 5);
    };

    const displayedActors = filteredActors.slice(0, displayCount);
    const hasMore = displayCount < filteredActors.length;

    if (loading) {
        return (
            <div className="all-actors-container">
                <div className="loading">Loading actors...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="all-actors-container">
                <div className="error-message">{error}</div>
            </div>
        );
    }

    return (
        <div className="all-actors-container">
            <div className="header">
                <h1>Find Your Perfect Actor</h1>
                <p>Browse through our talented community of actors</p>
            </div>

            <div className="filter-section">
                <h3>Filter by Roles:</h3>
                
                <div className="dropdowns-container">
                    {/* On Screen Roles Dropdown */}
                    <div className="dropdown-wrapper">
                        <button 
                            className={`dropdown-toggle ${onScreenDropdownOpen ? 'active' : ''}`}
                            onClick={toggleOnScreenDropdown}
                        >
                            On Screen Roles
                        </button>
                        {onScreenDropdownOpen && (
                            <div className="dropdown-menu">
                                {onScreenRoles.map(role => (
                                    <label key={role} className="dropdown-item">
                                        <input
                                            type="checkbox"
                                            checked={selectedRoles.includes(role)}
                                            onChange={() => toggleRoleSelection(role)}
                                        />
                                        <span>{role}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Off Screen Roles Dropdown */}
                    <div className="dropdown-wrapper">
                        <button 
                            className={`dropdown-toggle ${offScreenDropdownOpen ? 'active' : ''}`}
                            onClick={toggleOffScreenDropdown}
                        >
                            Off Screen Roles
                        </button>
                        {offScreenDropdownOpen && (
                            <div className="dropdown-menu">
                                {offScreenRoles.map(role => (
                                    <label key={role} className="dropdown-item">
                                        <input
                                            type="checkbox"
                                            checked={selectedRoles.includes(role)}
                                            onChange={() => toggleRoleSelection(role)}
                                        />
                                        <span>{role}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Selected Roles Tags */}
                {selectedRoles.length > 0 && (
                    <div className="selected-roles">
                        <strong>Selected Roles:</strong>
                        <div className="selected-role-tags">
                            {selectedRoles.map(role => (
                                <span key={role} className="selected-role-tag">
                                    {role}
                                    <button 
                                        className="remove-role"
                                        onClick={() => removeRole(role)}
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="actors-grid">
                {displayedActors.length === 0 ? (
                    <div className="no-results">
                        <p>No actors found for the selected roles.</p>
                    </div>
                ) : (
                    displayedActors.map((actor, index) => {
                        const isExpanded = expandedCards.has(actor._id || index);
                        return (
                            <div key={actor._id || index} className={`actor-card ${isExpanded ? 'expanded' : ''}`}>
                                <div className="actor-image">
                                    {actor.profilePicture ? (
                                        <img 
                                            src={`http://localhost:3001${actor.profilePicture}`} 
                                            alt={actor.fullname}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                                            }}
                                        />
                                    ) : (
                                        <div className="placeholder-image">
                                            <i className="fas fa-user"></i>
                                        </div>
                                    )}
                                </div>
                                <div className="actor-info">
                                    <h3>{actor.fullname}</h3>
                                    <p className="email">{actor.email}</p>
                                    {actor.contactNumber && (
                                        <p className="contact-number">{actor.contactNumber}</p>
                                    )}
                                    {actor.roles && actor.roles.length > 0 && (
                                        <div className="roles">
                                            <strong>Roles:</strong>
                                            <div className="role-tags">
                                                {actor.roles.map((role, roleIndex) => (
                                                    <span key={roleIndex} className="role-tag">{role}</span>
                                                ))}
                                            </div>
                                            {/* Audition Videos Button for this actor */}
                                            <button
                                                className="audition-videos-btn"
                                                style={{ marginTop: '16px' }}
                                                onClick={() => navigate(`/audition-videos/${actor._id}`)}
                                            >
                                                Audition Videos
                                            </button>
                                        </div>
                                    )}
                                    {actor.languages && (
                                        <p className="languages">
                                            <strong>Languages:</strong> {actor.languages}
                                        </p>
                                    )}
                                    
                                    {/* Expanded content */}
                                    {isExpanded && (
                                        <div className="expanded-content">
                                            {/* Experience first, full row */}
                                            {actor.experience && (
                                                <div className="detail-section experience">
                                                    <strong>Experience:</strong>
                                                    <p>{actor.experience}</p>
                                                </div>
                                            )}
                                            {/* All other details, 4 per row (excluding firstName and lastName) */}
                                            {actor.address1 && (
                                                <div className="detail-section">
                                                    <strong>Address:</strong>
                                                    <p>{actor.address1}</p>
                                                </div>
                                            )}
                                            {actor.city && (
                                                <div className="detail-section">
                                                    <strong>City:</strong>
                                                    <p>{actor.city}</p>
                                                </div>
                                            )}
                                            {actor.state && (
                                                <div className="detail-section">
                                                    <strong>State:</strong>
                                                    <p>{actor.state}</p>
                                                </div>
                                            )}
                                            {actor.country && (
                                                <div className="detail-section">
                                                    <strong>Country:</strong>
                                                    <p>{actor.country}</p>
                                                </div>
                                            )}
                                            {actor.zipCode && (
                                                <div className="detail-section">
                                                    <strong>Zip Code:</strong>
                                                    <p>{actor.zipCode}</p>
                                                </div>
                                            )}
                                            {actor.dob && (
                                                <div className="detail-section">
                                                    <strong>Date of Birth:</strong>
                                                    <p>{actor.dob}</p>
                                                </div>
                                            )}
                                            {actor.degree && (
                                                <div className="detail-section">
                                                    <strong>Degree:</strong>
                                                    <p>{actor.degree}</p>
                                                </div>
                                            )}
                                            {actor.university && (
                                                <div className="detail-section">
                                                    <strong>University:</strong>
                                                    <p>{actor.university}</p>
                                                </div>
                                            )}
                                            {actor.eduCity && (
                                                <div className="detail-section">
                                                    <strong>Education City:</strong>
                                                    <p>{actor.eduCity}</p>
                                                </div>
                                            )}
                                            {actor.eduState && (
                                                <div className="detail-section">
                                                    <strong>Education State:</strong>
                                                    <p>{actor.eduState}</p>
                                                </div>
                                            )}
                                            {actor.eduZipCode && (
                                                <div className="detail-section">
                                                    <strong>Education Zip Code:</strong>
                                                    <p>{actor.eduZipCode}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                    <span 
                                        className="load-more-tag"
                                        onClick={() => toggleCardExpansion(actor._id || index)}
                                    >
                                        {isExpanded ? 'Show Less' : 'Read More'}
                                    </span>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {hasMore && (
                <div className="load-more-container">
                    <span className="load-more-tag" onClick={loadMore}>
                        Load More Actors
                    </span>
                </div>
            )}
        </div>
    );
};

export default AllActors; 