const User = require('../models/User');

const connectWallet = async (ctx) => {
    const walletAddress = ctx.message.text.split(' ')[1];
    const chatId = ctx.from.id;

    if (!walletAddress) {
        return ctx.reply('Please provide your wallet address. Usage: /connectWallet YOUR_WALLET_ADDRESS');
    }

    try {
        const user = await User.findOne({ chatId });
        if (!user) {
            return ctx.reply('❌ You need to create a wallet first using /createWallet.');
        }

        user.walletAddress = walletAddress; // Update wallet address if needed
        await user.save();

        await ctx.reply(`🔗 Wallet connected successfully!\nWallet Address: \`${walletAddress}\``, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Error connecting wallet:', error);
        await ctx.reply('❌ Wallet connection failed. Please try again later.');
    }
};

module.exports = connectWallet;
