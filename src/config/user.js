// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
    },
    walletAddress: {
        type: String,
        required: false,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Add more fields as needed
});

module.exports = mongoose.model('User', UserSchema);
