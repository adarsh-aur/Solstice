// src/services/telegram.js
const { Telegraf } = require('telegraf');
const { TELEGRAM_BOT_TOKEN } = require('../config');
const logger = require('./logger');

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Common middleware or functions can be added here

bot.on('text', (ctx) => {
    logger.info(`Received message from ${ctx.from.id}: ${ctx.message.text}`);
});

// Error handling
bot.catch((err, ctx) => {
    logger.error(`Bot encountered an error for ${ctx.from.id}:`, err);
});

// Export the bot instance for use in other modules if needed
module.exports = bot;
