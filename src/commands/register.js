// src/commands/register.js
const { registerUser } = require('../utils/database');
const { validateEmail } = require('../utils/validators');

/**
 * Handles the /register command.
 * Usage: /register YOUR_EMAIL@example.com
 */
const registerEmailCommand = async (ctx) => {
    const [command, email] = ctx.message.text.split(' ');

    if (!email || !validateEmail(email)) {
        return ctx.reply('Please provide a valid email address. Usage: /register your_email@example.com');
    }

    const userId = ctx.from.id;

    // Assume the user has already connected their wallet using /connectWallet
    // You can enforce this or prompt them to do so
    const userWallet = await getUserWallet(userId);

    if (!userWallet) {
        return ctx.reply('Please connect your wallet first using /connectWallet YOUR_WALLET_ADDRESS.');
    }

    const success = await registerUser(userId, email, userWallet);

    if (success) {
        ctx.reply(`✅ Successfully registered your email: ${email}`);
    } else {
        ctx.reply('❌ Failed to register your email. Please try again later.');
    }
};

module.exports = registerEmailCommand;
