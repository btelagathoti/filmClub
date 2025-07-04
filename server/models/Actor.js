const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: null
    },
    // Profile Section
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    address1: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    zipCode: {
        type: String,
        default: ''
    },
    languages: {
        type: String,
        default: ''
    },
    dob: {
        type: String,
        default: ''
    },
    roles: {
        type: [String],
        default: []
    },
    
    // Experience Section
    experience: {
        type: String,
        default: ''
    },
    
    // Qualification Section
    degree: {
        type: String,
        default: ''
    },
    university: {
        type: String,
        default: ''
    },
    eduCity: {
        type: String,
        default: ''
    },
    eduState: {
        type: String,
        default: ''
    },
    eduZipCode: {
        type: String,
        default: ''
    },
    
    // Audition Videos Section
    auditionVideos: {
        Shringara: {
            type: String,
            default: null
        },
        Hasya: {
            type: String,
            default: null
        },
        Karuna: {
            type: String,
            default: null
        },
        Raudra: {
            type: String,
            default: null
        },
        Veera: {
            type: String,
            default: null
        },
        Bhayanaka: {
            type: String,
            default: null
        },
        Bibhatsa: {
            type: String,
            default: null
        },
        Adbutha: {
            type: String,
            default: null
        },
        Shantha: {
            type: String,
            default: null
        }
    },
    contactNumber: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});

const ActorModel = mongoose.model("actors", ActorSchema);
module.exports = ActorModel;