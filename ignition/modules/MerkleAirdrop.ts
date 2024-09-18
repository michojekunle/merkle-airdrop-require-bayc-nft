import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const tokenAddress = "0xA2ec96B3Cc0318F5A33114E996Fb9A6a6FAe3ADC";
  const merkleRootHash = "0x604615d816d1f7289719e87ac68271b764181416d4057699d7f3c8250c674e19";

  const MerkleAirdrop = m.contract("MerkleAirdrop", [tokenAddress, merkleRootHash]);

  return { MerkleAirdrop };
});

export default MerkleAirdropModule;
