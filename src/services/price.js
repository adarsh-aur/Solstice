// src/services/price.js
const axios = require('axios');
const logger = require('../utils/logger');

/**
 * Fetches the current price of SOL in USD.
 * @returns {number} - Current SOL price in USD.
 */
const getSolPriceUSD = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'solana',
                vs_currencies: 'usd'
            }
        });
        return response.data.solana.usd;
    } catch (error) {
        logger.error(`Failed to fetch SOL price: ${error.message}`);
        throw new Error('Unable to fetch SOL price.');
    }
};

module.exports = { getSolPriceUSD };
