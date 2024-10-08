// src/services/notifications.js
const axios = require('axios');
const { TELEGRAM_BOT_TOKEN } = require('../config');
const { Client } = require('@solana/web3.js');

// Placeholder for user alerts stored in the database
let userAlerts = [];

const checkPrice = async () => {
    // Fetch current SOL price from a reliable API
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const currentPrice = response.data.solana.usd;

    // Iterate through user alerts and notify if conditions met
    userAlerts.forEach(async (alert) => {
        if (
            (alert.condition === 'above' && currentPrice > alert.price) ||
            (alert.condition === 'below' && currentPrice < alert.price)
        ) {
            // Send Telegram message
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            await axios.post(url, {
                chat_id: alert.chatId,
                text: `📊 *Price Alert:* SOL is now ${alert.condition} $${alert.price}. Current Price: $${currentPrice}`,
                parse_mode: 'Markdown',
            });

            // Remove the alert after notifying
            userAlerts = userAlerts.filter(a => a !== alert);
        }
    });
};

// Schedule price checks every minute
setInterval(checkPrice, 60 * 1000);

module.exports = { setAlert, userAlerts };
