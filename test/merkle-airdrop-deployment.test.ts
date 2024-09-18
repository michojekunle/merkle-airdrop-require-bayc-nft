import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MerkleAirdrop", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployToken() {
    const erc20Token = await ethers.getContractFactory("ApeDrop");
    const token = await erc20Token.deploy();

    return { token };
  }

  async function deployMerkleAirdrop() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const { token } = await loadFixture(deployToken);
    const merkle_root_hash =
      "0xb166664d02b116400f8e4e5c8f5020af1b130fa6b1f91d0dae6139c8754e45dd";

    const MerkleAirdrop = await ethers.getContractFactory("MerkleAirdrop");
    const merkleAirdrop = await MerkleAirdrop.deploy(token, merkle_root_hash);

    return { merkleAirdrop, owner, otherAccount, token, merkle_root_hash };
  }

  describe("deployment", function () {
    it("should check if owner and token address is set", async function () {
      const { merkleAirdrop, owner, token, merkle_root_hash } =
        await loadFixture(deployMerkleAirdrop);

      expect(await merkleAirdrop.owner()).to.equal(owner);
      expect(await merkleAirdrop.tokenAddress()).to.equal(token);
      expect(await merkleAirdrop.merkleRootHash()).to.equal(merkle_root_hash);
    });
  });
});
