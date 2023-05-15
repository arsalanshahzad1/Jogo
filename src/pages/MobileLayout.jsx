import React from 'react'
import FirstPieChart from './mobileContent/FirstPieChart'
import SecondPieChart from './mobileContent/SecondPieChart'
import Team from './Team'

const MobileLayout = () => {
    return (
        <div className="mobile-layout">
            <section className="home-section-one" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail">
                                <h2></h2>
                                <h2>The First Web 3.0 <br /> Meme Platform</h2>
                                <p>Create Browse. Vote. <br /> The Future of meme sharing is here.</p>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                    <img className="image-one" src="/assets/images/section-one/sec-1.png" alt="" />
                    <img className="image-two" src="/assets/images/section-one/sec-2.png" alt="" />
                    <img className="image-three" src="/assets/images/section-one/sec-3.png" alt="" />
                    <img className="image-four" src="/assets/images/section-one/sec-4.png" alt="" />
                    <img className="image-five" src="/assets/images/section-one/sec-5.png" alt="" />
                    <img className="image-six" src="/assets/images/section-one/sec-6.png" alt="" />
                </div>
            </section>
            <section className="home-section-two">
                <img className="play-btn" src="/assets/images/play-btn.png" alt="" />
            </section>
            <FirstPieChart/>
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
            <SecondPieChart/>
            <Team/>
        </div>
    )
}

export default MobileLayout