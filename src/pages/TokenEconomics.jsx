import React from 'react'
import PirChartTwo from '../components/common/PirChartTwo'

const TokenEconomics = (index, setIndex) => {
  return (
    <>
      <section id="tokenEco">
        <div className="home-section-three" >
          <h2 className='title'>Token Economics</h2>
          <div className="sec-image">
            <PirChartTwo index={index} setIndex={setIndex} />
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>How to participate in presale?</h2>
            <p><span style={{color : '#ffc107'}}> 1. Connect Wallet</span> <br /><span style={{color : '#ffc107'}}> 2. Select Either to buy with ETH or USDT</span><br />
            Note : If you are using mobile phone then we recommend you to use trust wallet browser.
              Make sure you have 30 USDT before you start trading.
              Once the presale ends you will be able to claim your tokens</p>
          </div>
          <div className="round-section">
           <div className='wrap active'>
            <h2>Stage 1</h2>
            <p>100,000,000 <br/> Aim <br/> x 0.005</p>
            <h2>=$5,000,000</h2>
           </div>
           <div className='wrap'>
            <h2>Stage 2</h2>
            <p>100,000,000 Aim x 0.005</p>
            <h2>=$5,000,000</h2>
           </div>
           <div className='wrap'>
            <h2>Stage 3</h2>
            <p>100,000,000 Aim x 0.005</p>
            <h2>=$5,000,000</h2>
           </div>
           <div className='wrap'>
            <h2>Stage 4</h2>
            <p>100,000,000 Aim x 0.005</p>
            <h2>=$5,000,000</h2>
           </div>
           <div className='wrap'>
            <h2>Stage 5</h2>
            <p>100,000,000 Aim x 0.005</p>
            <h2>=$5,000,000</h2>
           </div>
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>Token Economy.</h2>
            <p>
            <span style={{color : '#ffc107'}}>Utility : </span>
              The AIM token will serve as the primary currency for all
              transactions within the virtual world of meme AIs <br /><br />
              <span style={{color : '#ffc107'}}>Deflationary Mechanism : </span>The deflationary mechanism involves burning tokens used to purchase AI NFTs, accessories, and
              other utilities in the virtual world of meme AIs.<br /><br />
              <span style={{color : '#ffc107'}}>Governance : </span>
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