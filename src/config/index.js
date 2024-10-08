// src/config/index.js
require('dotenv').config();

module.exports = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    SOLANA_API_URL: process.env.SOLANA_API_URL,
    DEX_API_URL: process.env.DEX_API_URL,
    FIAT_ONRAMP_API_URL: process.env.FIAT_ONRAMP_API_URL,
    FIAT_ONRAMP_API_KEY: process.env.FIAT_ONRAMP_API_KEY,
    // Add other configurations as needed
};
