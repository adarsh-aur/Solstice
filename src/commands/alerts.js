const User = require('../models/User');

const setAlert = async (ctx) => {
    const [command, condition, price] = ctx.message.text.split(' ');
    const chatId = ctx.from.id;

    if (!condition || isNaN(parseFloat(price))) {
        return ctx.reply('Usage: /setAlert CONDITION PRICE\nExample: /setAlert above 100');
    }

    try {
        const user = await User.findOne({ chatId });
        if (!user) {
            return ctx.reply('❌ You need to create a wallet first using /createWallet.');
        }

        user.alerts.push({ condition, price });
        await user.save();

        await ctx.reply(`🔔 Alert set! You will be notified when SOL is ${condition} $${price}.`);
    } catch (error) {
        console.error('Alert setup error:', error);
        await ctx.reply('❌ Failed to set alert. Please try again later.');
    }
};

module.exports = setAlert;
