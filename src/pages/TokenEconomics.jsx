import React from 'react'
import PirChartTwo from '../components/common/PirChartTwo'

const TokenEconomics = (index, setIndex) => {
  return (
    <>
      <section id="tokenEco">
        <div className="home-section-three" >
          <div className="sec-image">
            <PirChartTwo index={index} setIndex={setIndex} />
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>How to participate in presale?</h2>
            <p>1. Connect Wallet <br /> 2. Select Either to buy with ETH or USDT<br />
              Note : If you are using mobile phone then we recommend you to use trust wallet browser.
              Make sure you have 30 USDT before you start trading.
              Once the presale ends you will be able to claim your tokens</p>
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>Token Economy.</h2>
            <p>Deflationary Mechanism:
              The deflationary mechanism involves burning tokens used to purchase AI NFTs, accessories, and
              other utilities in the virtual world of meme AIs.<br /><br />
              Governance:
              AIM will be using a decentralized autonomous
              organization (DAO) model for governance. The DAO
              will be composed of token holders who will have the
              power to propose, vote, and execute changes within
              the project ecosystem</p>
          </div>
        </div>
      </section>
      {/* <section id='tokenEnd'></section> */}
    </>




  )
}

export default TokenEconomics