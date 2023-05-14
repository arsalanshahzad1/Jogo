import React from 'react'
import PirChartTwo from '../components/common/PirChartTwo'

const TokenEconomics = (index, setIndex) => {
  return (

      <section id="Token">
        <div className="home-section-three" >
          <div className="sec-image">
            <PirChartTwo index={index} setIndex={setIndex} />
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>How to participate in presale?</h2>
            <p>If you are using mobile phone then we recommend you to use trust wallet browser.
              Make sure you have 30 USDT before you start trading.
              Once the presale ends you will be able to claim your tokens.</p>
          </div>
        </div>
        <div className="home-section-four">
          <div className="detail">
            <h2>Token Economy.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip.</p>
          </div>
        </div>
      </section>

 
  )
}

export default TokenEconomics