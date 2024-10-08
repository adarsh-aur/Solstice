// src/services/fiatonramp.js
const axios = require('axios');
const logger = require('./logger');
const { FIAT_ONRAMP_API_URL, FIAT_ONRAMP_API_KEY } = require('../config');

/**
 * Initiates a fiat purchase of SOL via the on-ramp provider.
 * @param {string} userEmail - The user's email address.
 * @param {number} amountUSD - Amount in USD.
 * @param {string} walletAddress - User's Solana wallet address.
 * @returns {Object} - Purchase transaction details.
 */
const buySOL = async (userEmail, amountUSD, walletAddress) => {
    try {
        const response = await axios.post(`${FIAT_ONRAMP_API_URL}/transactions`, {
            apiKey: FIAT_ONRAMP_API_KEY,
            currencyCode: 'USD',
            cryptoCurrencyCode: 'SOL',
            fiatAmount: amountUSD,
            cryptoAddress: walletAddress,
            email: userEmail,
            redirectURL: 'https://yourapp.com/redirect', // Replace with your actual redirect URL
            // Add additional parameters as needed
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        logger.error('Error initiating SOL purchase:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    buySOL,
};
