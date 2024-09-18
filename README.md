# Merkle Airdrop Smart Contract for BAYC Holders

## Overview

This is a Merkle Airdrop smart contract where only users who hold a **BoredApeYachtClub (BAYC) NFT** can claim their airdrop. The contract is initialized with an ERC20 token address and a Merkle root to define the eligible users. Users must not only be included in the Merkle tree, but they must also own a BAYC NFT to successfully claim their airdrop. This contract is designed for airdrop distribution in a secure and verifiable manner.

### Features

- **Merkle Airdrop**: Only eligible users, as defined by the Merkle root, can claim the airdrop.
- **BAYC-Gated Access**: Claimants must hold a **BoredApeYachtClub (BAYC) NFT** to claim their tokens.
- **ERC20 Token Distribution**: The contract distributes ERC20 tokens based on the amount assigned in the Merkle proof.
- **Merkle Proof Verification**: Ensures that only eligible addresses from the Merkle tree can claim their tokens.
- **Security Features**: Ownership validation via BAYC NFTs and Merkle proof verification, along with reentrancy protection.

## Smart Contract Architecture

### Key Components:

- **Constructor**: Initializes the contract with the ERC20 token address and the Merkle root for eligible addresses.
- **Claim Function**: Allows users to claim their airdrop if they pass both the BAYC ownership and Merkle proof verification.
- **Ownership Verification**: Verifies that the claimant owns a BAYC NFT.
- **Merkle Root Verification**: Uses Merkle proofs to ensure the claimant is part of the eligible addresses.
- **Unit Tests**: Written to test the claim function and verify its correct behavior under various conditions.

---

## Prerequisites

- **Node.js** (for running the local development environment)
- **Hardhat** (for local Ethereum blockchain and contract deployment)

---

## Installation

### 1\. Clone the Repository

```
git clone https://github.com/michojekunle/merkle-airdrop-require-bayc-nft.git
```

### 2\. Install Dependencies

```
npm install
```

This will install the necessary dependencies for running Hardhat and other too

## Testing

Unit tests ensure that the contracts behave as expected. Tests for both Ether and ERC20 staking contracts are located in the test directory.

### Running Tests

Set up your hardhat config:

```
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID!}`,
      },
      chainId: 1,
    },
    // for testnet
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [process.env.WALLET_KEY!, process.env.RANDOM_WALLET_KEY!],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
```

in your \`.env\`

```
WALLET_KEY=
RANDOM_WALLET_KEY=
ETHERSCAN_API_KEY=
INFURA_ID=
```

Run the following command to execute the tests:

```
npx harrdhat test
```

## License

This project is licensed under the MIT License. Feel free to use and modify the contract.

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request.

```
Thank you for reading through! Happy coding and good luck with your Merkle Airdrop! 🤗🎉
```

[The APD token address on Lisk Sepolia Testnet 0xA2ec96B3Cc0318F5A33114E996Fb9A6a6FAe3ADC | Blockscout](https://sepolia-blockscout.lisk.com/address/0xA2ec96B3Cc0318F5A33114E996Fb9A6a6FAe3ADC#code)