const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Adding users to lists", function () {
  let Token;
  let token;
  before(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    Token = await hre.ethers.getContractFactory("AIMToken");
    
    // here give the address of
    token = await Token.deploy("asd", "asd");
  });

  it("shoud", async function () {
    const ownerBalance = await token.balanceOf(token.address);
    console.log("OwnerBalance", ownerBalance);

    expect(await token.balanceOf(token.address)).to.equal(
      "200000000000000000000000"
    );
  });

  it("should add 2 users to stakeholders", async function () {
    await token.addAddressToStakeholder(user1.address);
    await token.addAddressToStakeholder(user2.address);

    expect(await token.numOfStakeholders()).to.equal(2);
  });

  it("should add 2 users to partners", async function () {
    await token.addAddressToPartners(user3.address);
    await token.addAddressToPartners(user4.address);

    expect(await token.numOfPartners()).to.equal(2);
  });

  it("distribute amongst stakeholders", async function () {
    await token.distributeAmongstStakeHolders();

    expect(await token.balanceOf(user1.address)).is.equal(
      "50000000000000000000000"
    );

    expect(await token.balanceOf(user2.address)).to.equal(
      "50000000000000000000000"
    );
  });

  it("distribute amongst partners", async function () {
    await token.distributeAmongstPartners();

    expect(await token.balanceOf(user4.address)).to.equal(
      "50000000000000000000000"
    );

    // console.log(
    //   "After distr check balnc",
    //   await token.balanceOf(user4.address)
    // );

    expect(await token.balanceOf(user2.address)).to.equal(
      "50000000000000000000000"
    );
  });

  it("should add 2 users to R1 whitelist", async function () {
    await token.addAddressToR1Whitelist(user5.address);
    await token.addAddressToR1Whitelist(user6.address);
  });

  it("should check if user is in R1 whitelist or not", async function () {
    const user1_R1 = await token.whitelistedR1Addresses(user5.getAddress());
    const user2_R1 = await token.whitelistedR1Addresses(user6.getAddress());

    console.log("userR1", user1_R1);
    console.log("userR2", user2_R1);

    expect(user1_R1).to.be.true;
    expect(user2_R1).to.be.true;
  });

  it("should add 2 users to R2 whitelist", async function () {
    await token.addAddressToR2Whitelist(user7.address);
    await token.addAddressToR2Whitelist(user8.address);
  });

  it("should check if user is in R2 whitelist or not", async function () {
    const user1_R2 = await token.whitelistedR2Addresses(user7.getAddress());
    const user2_R2 = await token.whitelistedR2Addresses(user8.getAddress());

    console.log("user1_R2", user1_R2);
    console.log("user2_R2", user2_R2);

    expect(user1_R2).to.equal(true);
    expect(user2_R2).to.equal(true);
  });

  // Now starting rounds

  //
  // R1
  //

  it("Buy in R1", async function () {
    // toggle R1 start sale
    await token.toggleR1Sale();
    let r1Check = await token.r1Sale();
    console.log("R1 sale is live", r1Check);

    console.log(
      "User5 is in R1 whitelist",
      await token.whitelistedR1Addresses(user5.getAddress())
    );

    // console.log("Balance of user5", await token.balanceOf(user2.address));

    // console.log("r1Buy", await token.connect(user5).r1Buy(10));
  });

  //
  // R2
  //

  it("Buy in R2", async function () {
    await token.toggleR2Sale();
    let r2Check = await token.r2Sale();
    console.log("R2 sale is live", r2Check);

    console.log(
      "User7 is in R2 whitelist",
      await token.whitelistedR2Addresses(user7.getAddress())
    );

    console.log("Balance of user7", await user7.getBalance());

    let myValue = ethers.utils.parseEther("10");
    let price = ethers.utils.parseEther("50");

    console.log(
      "r2Buy",
      await token.connect(user7).r2Buy(myValue, { value: myValue })
    );
  });

  //
  // R3
  //

  it("Should open round 3", async function () {
    await token.toggleR3Sale();
    let r3Check = await token.r3Sale();
    console.log("R3 sale is live", r3Check);
  });

  //
  // R4
  //

  it("Should open round 4", async function () {
    await token.toggleR4Sale();
    let r4Check = await token.r4Sale();
    console.log("R4 sale is live", r4Check);
  });

  //
  // R5
  //

  it("Should open round 5", async function () {
    await token.toggleR5Sale();
    let r5Check = await token.r5Sale();
    console.log("R5 sale is live", r5Check);
  });
});
