// src/config.js
require('dotenv').config();

module.exports = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    SOLANA_API_URL: process.env.SOLANA_API_URL || 'https://api.mainnet-beta.solana.com',
    DEX_API_URL: process.env.DEX_API_URL,
    DEX_API_KEY: process.env.DEX_API_KEY || '', // If required
    FIAT_ONRAMP_API_URL: process.env.FIAT_ONRAMP_API_URL,
    FIAT_ONRAMP_API_KEY: process.env.FIAT_ONRAMP_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};
