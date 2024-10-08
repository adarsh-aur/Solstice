// src/utils/database.js
const mongoose = require('mongoose');
const logger = require('./logger');
const { DATABASE_URL } = require('../config');

// Connect to MongoDB
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => logger.info('Connected to MongoDB'))
.catch((error) => logger.error(`MongoDB connection error: ${error.message}`));

// Define User Schema
const userSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    email: { type: String, required: true },
    walletAddress: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

/**
 * Retrieves the user's email based on their Telegram ID.
 * @param {number} telegramId - The Telegram user ID.
 * @returns {string|null} - The user's email or null if not found.
 */
const getUserEmail = async (telegramId) => {
    const user = await User.findOne({ telegramId });
    return user ? user.email : null;
};

/**
 * Retrieves the user's wallet address based on their Telegram ID.
 * @param {number} telegramId - The Telegram user ID.
 * @returns {string|null} - The user's wallet address or null if not found.
 */
const getUserWallet = async (telegramId) => {
    const user = await User.findOne({ telegramId });
    return user ? user.walletAddress : null;
};

/**
 * Registers the user's email and wallet address.
 * @param {number} telegramId - The Telegram user ID.
 * @param {string} email - The user's email address.
 * @param {string} walletAddress - The user's Solana wallet address.
 * @returns {boolean} - True if registration is successful.
 */
const registerUser = async (telegramId, email, walletAddress) => {
    try {
        const existingUser = await User.findOne({ telegramId });
        if (existingUser) {
            existingUser.email = email;
            existingUser.walletAddress = walletAddress;
            await existingUser.save();
        } else {
            const newUser = new User({
                telegramId,
                email,
                walletAddress
            });
            await newUser.save();
        }
        return true;
    } catch (error) {
        logger.error(`Failed to register user ${telegramId}: ${error.message}`);
        return false;
    }
};

module.exports = {
    getUserEmail,
    getUserWallet,
    registerUser
};
