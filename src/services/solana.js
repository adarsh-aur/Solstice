// src/services/solana.js
const { Connection, PublicKey, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const logger = require('./logger');
const { SOLANA_API_URL } = require('../config');

// Initialize Solana connection
const connection = new Connection(SOLANA_API_URL, 'confirmed');

/**
 * Generates a new Solana wallet (Keypair).
 * @returns {Object} - Contains the public and private keys.
 */
const generateWallet = () => {
    const keypair = Keypair.generate();
    return {
        publicKey: keypair.publicKey.toBase58(),
        privateKey: Buffer.from(keypair.secretKey).toString('hex'), // Store securely!
    };
};

/**
 * Fetches the SOL balance of a given wallet.
 * @param {string} walletAddress - The public key of the wallet.
 * @returns {number} - Balance in SOL.
 */
const getBalance = async (walletAddress) => {
    try {
        const publicKey = new PublicKey(walletAddress);
        const balance = await connection.getBalance(publicKey);
        return balance / LAMPORTS_PER_SOL;
    } catch (error) {
        logger.error(`Error fetching balance for ${walletAddress}:`, error);
        throw error;
    }
};

/**
 * Sends SOL from one wallet to another.
 * @param {string} fromPrivateKey - The private key of the sender.
 * @param {string} toWalletAddress - The recipient's wallet address.
 * @param {number} amountSOL - Amount in SOL to send.
 * @returns {string} - Transaction signature.
 */
const sendSOL = async (fromPrivateKey, toWalletAddress, amountSOL) => {
    try {
        const secretKey = Buffer.from(fromPrivateKey, 'hex');
        const fromKeypair = Keypair.fromSecretKey(secretKey);
        const toPublicKey = new PublicKey(toWalletAddress);

        const transaction = await connection.requestAirdrop(fromKeypair.publicKey, 2 * LAMPORTS_PER_SOL); // For testing; remove in production

        await connection.confirmTransaction(transaction, 'confirmed');

        const tx = await connection.sendTransaction(
            new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: fromKeypair.publicKey,
                    toPubkey: toPublicKey,
                    lamports: amountSOL * LAMPORTS_PER_SOL,
                })
            ),
            [fromKeypair]
        );

        await connection.confirmTransaction(tx, 'confirmed');

        logger.info(`Sent ${amountSOL} SOL from ${fromKeypair.publicKey.toBase58()} to ${toWalletAddress}. Tx: ${tx}`);

        return tx;
    } catch (error) {
        logger.error(`Error sending SOL:`, error);
        throw error;
    }
};

module.exports = {
    generateWallet,
    getBalance,
    sendSOL,
};
