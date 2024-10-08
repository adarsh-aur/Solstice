// src/services/dexaggregator.js
const axios = require('axios');
const logger = require('./logger');
const { DEX_API_URL, FIAT_ONRAMP_API_KEY } = require('../config');

/**
 * Fetches swap quotes from the DEX aggregator.
 * @param {string} inputMint - Mint address of the input token.
 * @param {string} outputMint - Mint address of the output token.
 * @param {number} amount - Amount in smallest units.
 * @param {number} slippageBps - Allowed slippage in basis points.
 * @returns {Object} - Swap quote data.
 */
const getSwapQuote = async (inputMint, outputMint, amount, slippageBps = 50) => {
    try {
        const response = await axios.get(`${DEX_API_URL}/v1/quote`, {
            params: {
                inputMint,
                outputMint,
                amount,
                slippageBps,
            },
        });
        return response.data;
    } catch (error) {
        logger.error('Error fetching swap quote:', error.response ? error.response.data : error.message);
        throw error;
    }
};

/**
 * Executes a swap based on the best route.
 * @param {Object} route - The selected swap route.
 * @param {string} userWallet - The user's wallet address.
 * @returns {Object} - Swap execution data.
 */
const executeSwap = async (route, userWallet) => {
    try {
        const response = await axios.post(`${DEX_API_URL}/v1/swap`, {
            route,
            userWallet,
            // Additional parameters as required by the DEX aggregator
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${FIAT_ONRAMP_API_KEY}`, // If required
            },
        });

        return response.data;
    } catch (error) {
        logger.error('Error executing swap:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    getSwapQuote,
    executeSwap,
};
