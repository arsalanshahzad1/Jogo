import React, { useContext, useEffect, useState } from "react";
import PirChartTwo from "../components/common/PirChartTwo";
import { Store } from "../context/Store";

const TokenEconomics = (index, setIndex) => {
const { activeRound} = useContext(Store)
// const activeRound = 0;
  return (
    <>
      <section id="tokenEco">
        <div className="home-section-three">
          <h2 className="title">Token Economics</h2>
          <div className="sec-image">
            <PirChartTwo index={index} setIndex={setIndex} />
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>How to participate in presale?</h2>
            <p>
              <span
                style={{
                  display: "inline-block",
                  textAlign: "left",
                  paddingBlock: "10px",
                }}
              >
                <span> 1. Connect Wallet</span>
                <br />
                <span>2. Select Either to buy with ETH or USDT</span>
              </span>
              <br />
              Note : If you are using mobile phone then we recommend you to use
              trust wallet browser. Make sure you have 30 USDT before you start
              trading. Once the presale ends you will be able to claim your
              tokens
            </p>
          </div>
          <div className="round-section">
            <div className={activeRound == 1 ? "wrap active" : "wrap"}>
              <h2>Stage 1</h2>
              <p>
                100,000,000 <br /> AIM <br /> x 0.005
              </p>
              <h2>=$500,000</h2>
            </div>

            <div className={activeRound == 2 ? "wrap active" : "wrap"}>
              <h2>Stage 2</h2>
              <p>
                100,000,000 <br /> AIM <br /> x 0.01
              </p>
              <h2>=$1,000,000</h2>
            </div>

            <div className={activeRound == 3 ? "wrap active" : "wrap"}>
              <h2>Stage 3</h2>
              <p>
                100,000,000 <br /> AIM <br /> x 0.02
              </p>
              <h2>=$2,000,000</h2>
            </div>

            <div className={activeRound == 4 ? "wrap active" : "wrap"}>
              <h2>Stage 4</h2>
              <p>
                100,000,000 <br /> AIM <br /> x 0.04
              </p>
              <h2>=$4,000,000</h2>
            </div>
            <div className={activeRound == 5 ? "wrap active" : "wrap"}>
              <h2>Stage 5</h2>
              <p>
                100,000,000 <br /> AIM <br /> x 0.08
              </p>
              <h2>=$8,000,000</h2>
            </div>
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>Token Economy.</h2>
            <p>
              <span style={{ color: "#ffc107" }}>Utility : </span>
              The AIM token will serve as the primary currency for all
              transactions within the virtual world of meme AIs <br />
              <br />
              <span style={{ color: "#ffc107" }}>
                Deflationary Mechanism :{" "}
              </span>
              The deflationary mechanism involves burning tokens used to
              purchase AI NFTs, accessories, and other utilities in the virtual
              world of meme AIs.
              <br />
              <br />
              <span style={{ color: "#ffc107" }}>Governance : </span>
              AIM will be using a decentralized autonomous organization (DAO)
              model for governance. The DAO will be composed of token holders
              who will have the power to propose, vote, and execute changes
              within the project ecosystem
            </p>
          </div>
        </div>
      </section>
      {/* <section id='tokenEnd'></section> */}
    </>
  );
};

export default TokenEconomics;
