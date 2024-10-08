const { Keypair } = require('@solana/web3.js');
const User = require('../models/User');

const createWallet = async (ctx) => {
    const keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toString();
    const chatId = ctx.from.id;

    const newUser = new User({ chatId, walletAddress: publicKey });

    try {
        await newUser.save();
        await ctx.reply(`🪄 Wallet Created!\n\nYour wallet address: \`${publicKey}\`\n\n**IMPORTANT:** Save your secret key securely. Do not share it with anyone.`, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Error saving user:', error);
        await ctx.reply('❌ Failed to create wallet. Please try again later.');
    }
};

module.exports = createWallet;
