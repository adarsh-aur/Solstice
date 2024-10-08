const cron = require('node-cron');
const User = require('../models/User');
const { buySOL } = require('./buySOL'); // Import buySOL function

const setDCA = async (ctx) => {
    const [command, interval, amount] = ctx.message.text.split(' ');
    const chatId = ctx.from.id;

    if (!interval || !amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        return ctx.reply('Usage: /setDCA INTERVAL AMOUNT\nExample: /setDCA daily 50');
    }

    // Define cron schedule based on interval
    let cronSchedule;
    switch (interval.toLowerCase()) {
        case 'daily':
            cronSchedule = '0 0 * * *'; // Every day at midnight
            break;
        case 'weekly':
            cronSchedule = '0 0 * * 0'; // Every Sunday at midnight
            break;
        case 'monthly':
            cronSchedule = '0 0 1 * *'; // First day of every month at midnight
            break;
        default:
            return ctx.reply('Invalid interval. Choose from daily, weekly, or monthly.');
    }

    try {
        const user = await User.findOne({ chatId });
        if (!user) {
            return ctx.reply('❌ You need to create a wallet first using /createWallet.');
        }

        user.dca = { amount: parseFloat(amount), interval: interval.toLowerCase() };
        await user.save();

        cron.schedule(cronSchedule, async () => {
            await buySOL(ctx); // Call the buySOL function
        });

        await ctx.reply(`📈 DCA set! You will buy $${amount} worth of SOL ${interval}.`);
    } catch (error) {
        console.error('DCA setup error:', error);
        await ctx.reply('❌ Failed to set DCA. Please try again later.');
    }
};

module.exports = setDCA;
