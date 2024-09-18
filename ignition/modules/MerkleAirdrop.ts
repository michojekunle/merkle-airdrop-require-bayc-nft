import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const tokenAddress = "0xA2ec96B3Cc0318F5A33114E996Fb9A6a6FAe3ADC";
  const merkleRootHash = "0xb166664d02b116400f8e4e5c8f5020af1b130fa6b1f91d0dae6139c8754e45dd";

  const MerkleAirdrop = m.contract("MerkleAirdrop", [tokenAddress, merkleRootHash]);

  return { MerkleAirdrop };
});

export default MerkleAirdropModule;
