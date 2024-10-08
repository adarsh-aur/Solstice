const axios = require('axios');
const User = require('../models/User');
const { FIAT_ONRAMP_API_URL, FIAT_ONRAMP_API_KEY } = require('../config');

const buySOL = async (ctx) => {
    const amount = parseFloat(ctx.message.text.split(' ')[1]);
    const chatId = ctx.from.id;

    if (isNaN(amount) || amount <= 0) {
        return ctx.reply('Please provide a valid amount of USD to convert to SOL. Usage: /buySOL 100');
    }

    try {
        const user = await User.findOne({ chatId });
        if (!user || !user.walletAddress) {
            return ctx.reply('❌ You need to create a wallet first using /createWallet.');
        }

        const response = await axios.post(`${FIAT_ONRAMP_API_URL}/purchase`, {
            amount,
            currency: 'USD',
            token: 'SOL',
            walletAddress: user.walletAddress,
        }, {
            headers: {
                'Authorization': `Bearer ${FIAT_ONRAMP_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        await ctx.reply(`✅ Successfully purchased $${amount} worth of SOL! Your wallet has been credited.`);
    } catch (error) {
        console.error(error);
        await ctx.reply('❌ Failed to purchase SOL. Please try again later.');
    }
};

module.exports = buySOL;
