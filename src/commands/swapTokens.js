const axios = require('axios');
const User = require('../models/User');
const { DEX_API_URL } = require('../config');

const swapTokens = async (ctx) => {
    const [command, fromToken, toToken, amount] = ctx.message.text.split(' ');
    const chatId = ctx.from.id;

    if (!fromToken || !toToken || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        return ctx.reply('Usage: /swapTokens FROM_TOKEN TO_TOKEN AMOUNT\nExample: /swapTokens SOL USDC 10');
    }

    try {
        const user = await User.findOne({ chatId });
        if (!user || !user.walletAddress) {
            return ctx.reply('❌ You need to create a wallet first using /createWallet.');
        }

        const response = await axios.post(`${DEX_API_URL}/swap`, {
            fromToken,
            toToken,
            amount,
            walletAddress: user.walletAddress,
        }, {
            headers: {
                'Authorization': `Bearer your_dex_api_key`,
                'Content-Type': 'application/json',
            },
        });

        await ctx.reply(`🔄 Successfully swapped ${amount} ${fromToken} for ${response.data.receivedAmount} ${toToken}!`);
    } catch (error) {
        console.error('Token swap error:', error);
        await ctx.reply('❌ Token swap failed. Please try again later.');
    }
};

module.exports = swapTokens;
