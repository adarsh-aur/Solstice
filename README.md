# 🌞 Solstice — Your Gateway to Solana Investments via Telegram

Solstice is a Telegram bot that simplifies crypto investments by allowing users to **buy, trade, and swap Solana (SOL) tokens directly within Telegram**. Whether you're a crypto beginner or a seasoned investor, Solstice offers a seamless, intuitive experience to manage your digital assets.

---

## 🚀 Problem Statement

Crypto can be complicated, especially for newcomers. Solstice solves this by **streamlining the process of buying Solana tokens** through a user-friendly Telegram interface. By integrating **fiat on-ramp services** and a **DEX aggregator**, it provides users with a seamless, secure, and efficient way to invest and manage SOL tokens.

---

## 🔑 Key Features

- 🔁 **Seamless fiat-to-SOL on-ramping** via integrated payment partners  
- ⚖️ **Integration with Solana DEX aggregators** for best token swap rates  
- 📉 **Dollar-Cost Averaging (DCA)** to automate regular investments  
- 📲 **Real-time price alerts** with actionable buy/sell confirmations  
- 💬 **Conversational interface** powered by Telegram for ultimate ease of use  
- 🔐 **Self-custodial wallet creation or existing wallet integration**

---

## 🧠 How It Works

### 🪪 Why Users Need a Wallet

To interact with Solana tokens, users like **John** need a wallet. Here's why:

- **Token Storage**: Purchased SOL must be stored in a secure wallet.
- **Trading**: Wallets enable interaction with DEXs for token swaps.
- **Transaction Signing**: Required for executing any buy/sell/swap operations.
- **Ownership**: Only John holds the private keys — full self-custody.

---

### ⚙️ Wallet Setup Methods

#### 1. **Create New Wallet (Beginner-Friendly)**
- When John starts the bot → he chooses **“Create Wallet”**
- The bot generates a wallet for him
- A **seed phrase** is displayed (John must back it up securely)
- Wallet address is shared with John

**Advantages**:
- Zero setup complexity  
- Instant onboarding  

---

#### 2. **Connect Existing Wallet (Advanced Users)**
- John selects **“Connect Wallet”**
- Provides existing Solana wallet address (e.g., Phantom)
- For extra security, the bot may prompt a signature verification

**Advantages**:
- Full control with wallets John already uses  
- Secure and flexible

---

## 🔐 Wallet Security Practices

- ✅ **Never share your seed phrase**  
- 🔐 **Private keys are never stored by the bot** (if self-custody model is used)  
- 📝 **All transactions are signed securely** before sending to DEX/on-ramp APIs  

---

## 💡 Example User Flow

1. **John starts the bot** → prompted to create or connect wallet  
2. **Bot generates Solana wallet** → John saves seed phrase  
3. **John buys $100 worth of SOL** via fiat on-ramp → funds are deposited to wallet  
4. **John swaps SOL for USDC** → bot finds best rate via aggregator and executes the trade  
5. **All within Telegram. All under John’s control.**

---

## 🛠️ Tech Stack

- Node.js  
- Telegram Bot API  
- Solana Web3 tools  
- DEX Aggregators (e.g., Jupiter, Orca)  
- On-ramp partners (e.g., Mercuryo)

---

## 📦 Installation & Run

### 🧰 Prerequisites
- Node.js v18+
- MongoDB (for storing user data)
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

### 📥 Clone the Repo

```bash
git clone https://github.com/adarsh-aur/Solstice.git
cd Solstice
