import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ApeDropModule = buildModule("ApeDropModule", (m) => {

  const ApeDrop = m.contract("ApeDrop");

  return { ApeDrop };
});

export default ApeDropModule;
