// src/index.js
require('dotenv').config();
const { Telegraf } = require('telegraf');
const mongoose = require('mongoose');
const createWallet = require('./commands/createWallet');
const connectWallet = require('./commands/connectWallet');
const buySOLCommand = require('./commands/buySOL');
const swapTokens = require('./commands/swapTokens');
const setDCA = require('./commands/setDCA');
const setAlert = require('./commands/alerts');
const registerEmailCommand = require('./commands/register');
const { TELEGRAM_BOT_TOKEN, MONGODB_URI } = require('./config');

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Connected to MongoDB');
})
.catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit the application if DB connection fails
});

// Command Handlers
bot.start((ctx) => ctx.reply('👋 Welcome to Solstice! Use /help to see available commands.'));
bot.help((ctx) => ctx.reply(`
Available Commands:
- /createWallet - Create a new Solana wallet
- /connectWallet YOUR_WALLET_ADDRESS - Connect your existing wallet
- /buySOL AMOUNT_USD - Buy SOL tokens with USD
- /swapTokens FROM_TOKEN TO_TOKEN AMOUNT - Swap tokens
- /setDCA INTERVAL AMOUNT - Set Dollar-Cost Averaging (daily, weekly, monthly)
- /setAlert CONDITION PRICE - Set price alerts (above/below)
- /register EMAIL - Register your email address
`));

bot.command('createWallet', createWallet);
bot.command('connectWallet', connectWallet);
bot.command('buySOL', buySOLCommand);
bot.command('swapTokens', swapTokens);
bot.command('setDCA', setDCA);
bot.command('setAlert', setAlert);
bot.command('register', registerEmailCommand);

// Launch the bot
bot.launch().then(() => {
    console.log('🚀 Solstice Bot is up and running!');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
