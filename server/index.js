const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require('multer')
const path = require('path')
const ActorModel = require('./models/Actor')
const http = require('http');
const fs = require('fs');
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Not an image! Please upload an image.'), false);
        }
    }
});

// Configure multer for video uploads
const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.fieldname + path.extname(file.originalname))
    }
});

const videoUpload = multer({ 
    storage: videoStorage,
    limits: {
        fileSize: 500 * 1024 * 1024 // 500MB limit for videos
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Not a video! Please upload a video file.'), false);
        }
    }
});

// Serve static files from uploads directory
app.use('/uploads', express.static(uploadsDir));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/actor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
app.post("/loginform", (req, res) => {
    const {email, password} = req.body;
    ActorModel.findOne({email: email})
    .then(user => {
        if(user && user.password === password){
            res.json("Success")
        } else {
            res.json("Invalid Password")
        }
    })
    .catch(err => {
        console.error('Login error:', err);
        res.status(500).json("Login failed")
    })
})

app.post('/signup', upload.single('profilePicture'), async (req, res) => {
    try {
        console.log('Received signup request');
        console.log('Body:', req.body);
        console.log('File:', req.file);

        const { fullname, email, password } = req.body;
        const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

        // Check for missing fields
        if (!fullname || !email || !password) {
            console.log('Missing fields:', { fullname, email, password });
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Check for duplicate email
        const existingUser = await ActorModel.findOne({ email });
        if (existingUser) {
            console.log('Duplicate email:', email);
            return res.status(400).json({ error: 'Email already exists.' });
        }

        const actor = await ActorModel.create({
            fullname,
            email,
            password,
            profilePicture
        });

        console.log('Actor created:', actor);
        res.json(actor);
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Signup failed', details: error.message });
    }
});

app.get('/getActors', (req, res) => {
    const { email } = req.query;
    console.log('Getting actor data for email:', email);
    
    ActorModel.findOne({ email: email })
    .then(actor => {
        console.log('Found actor data:', actor);
        res.json(actor);
    })
    .catch(err => {
        console.error('Get actor error:', err);
        res.status(500).json({ error: 'Failed to fetch actor data' });
    })
})

// Get all actors for the AllActors page
app.get('/getAllActors', (req, res) => {
    console.log('Getting all actors data');
    
    ActorModel.find({})
    .then(actors => {
        console.log('Found actors:', actors.length);
        res.json(actors);
    })
    .catch(err => {
        console.error('Get all actors error:', err);
        res.status(500).json({ error: 'Failed to fetch actors data' });
    })
})

// Update Profile endpoint
app.post('/updateProfile', videoUpload.fields([
    { name: 'video_Shringara', maxCount: 1 },
    { name: 'video_Hasya', maxCount: 1 },
    { name: 'video_Karuna', maxCount: 1 },
    { name: 'video_Raudra', maxCount: 1 },
    { name: 'video_Veera', maxCount: 1 },
    { name: 'video_Bhayanaka', maxCount: 1 },
    { name: 'video_Bibhatsa', maxCount: 1 },
    { name: 'video_Adbutha', maxCount: 1 },
    { name: 'video_Shantha', maxCount: 1 }
]), async (req, res) => {
    try {
        console.log('Update profile request received');
        console.log('Body:', req.body);
        console.log('Files:', req.files);
        
        const { email, firstName, lastName, address1, city, state, country, zipCode, languages, 
                experience, degree, university, eduCity, eduState, eduZipCode, roles, dob, contactNumber } = req.body;
        
        if (!email) {
            console.log('No email provided');
            return res.status(400).json({ error: 'Email is required' });
        }
        
        // Find the actor by email
        const actor = await ActorModel.findOne({ email });
        if (!actor) {
            console.log('Actor not found for email:', email);
            return res.status(404).json({ error: 'Actor not found' });
        }

        console.log('Found actor:', actor);

        // Update profile fields
        const updateData = {
            firstName: firstName || '',
            lastName: lastName || '',
            address1: address1 || '',
            city: city || '',
            state: state || '',
            country: country || '',
            zipCode: zipCode || '',
            languages: languages || '',
            roles: roles ? (Array.isArray(roles) ? roles : JSON.parse(roles)) : [],
            dob: dob || '',
            experience: experience || '',
            degree: degree || '',
            university: university || '',
            eduCity: eduCity || '',
            eduState: eduState || '',
            eduZipCode: eduZipCode || '',
            contactNumber: contactNumber || ''
        };

        // Handle video uploads - merge with existing data
        if (req.files && Object.keys(req.files).length > 0) {
            const auditionVideos = { ...actor.auditionVideos }; // Start with existing videos
            Object.keys(req.files).forEach(fieldName => {
                const rasaType = fieldName.replace('video_', '');
                if (req.files[fieldName] && req.files[fieldName][0]) {
                    auditionVideos[rasaType] = `/uploads/${req.files[fieldName][0].filename}`;
                }
            });
            updateData.auditionVideos = auditionVideos;
        }

        console.log('Update data:', updateData);

        // Update the actor
        const updatedActor = await ActorModel.findOneAndUpdate(
            { email },
            updateData,
            { new: true }
        );

        console.log('Profile updated successfully:', updatedActor);
        res.json({ message: 'Profile updated successfully', actor: updatedActor });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ error: 'Failed to update profile', details: error.message });
    }
});

// Multer error handler
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large. Max size is 500MB for videos.' });
        }
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

// Add this after other routes
app.get('/getActorById/:id', async (req, res) => {
    try {
        const actor = await ActorModel.findById(req.params.id);
        if (!actor) {
            return res.status(404).json({ error: 'Actor not found' });
        }
        res.json(actor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch actor', details: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
