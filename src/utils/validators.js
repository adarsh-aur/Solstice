// src/utils/validators.js

/**
 * Validates an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if valid, else false.
 */
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

/**
 * Validates a Solana wallet address.
 * @param {string} address - The wallet address to validate.
 * @returns {boolean} - True if valid, else false.
 */
const validateSolanaAddress = (address) => {
    try {
        const { PublicKey } = require('@solana/web3.js');
        new PublicKey(address);
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = {
    validateEmail,
    validateSolanaAddress,
};
