import React from 'react'
import FirstPieChart from './mobileContent/FirstPieChart'
import SecondPieChart from './mobileContent/SecondPieChart'
import Team from './Team'
import MobileRoadmap from './mobileContent/MobileRoadmap'
import MobileVideo from './mobileContent/MobileVideo'

const MobileLayout = () => {
    return (
        <div className="mobile-layout">
            <section className="home-section-one" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail">
                                <p style={{color: '#e4513b' , paddingBottom : '10px'}}>Join the AI meme revolution with AIM</p>
                                <p>It blends the power of AI
                                    with the humor of memes, providing a new and innovative way for
                                    users to interact with this exciting technology. AIM is poised to
                                    become a leader in this space. Don't miss out on the opportunity
                                    to be a part of this game-changing platform!</p>
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
                {/* <img className="play-btn" src="/assets/images/play-btn.png" alt="" /> */}
                <MobileVideo />
            </section>
            <section className="titleOfSection">
                <h2>Token Economics</h2>
            </section>

            <FirstPieChart />
            <div className="home-section-four">
                <div className="detail">
                    <h2>How to participate in presale?</h2>
                    <p><span style={{textAlign : 'left' , display : 'inline-block' , paddingBottom : '15px'}}>1. Connect Wallet <br />2. Select Either to buy with ETH or USDT</span><br />
                        Note : If you are using mobile phone then we recommend you to use trust wallet browser.
                        Make sure you have 30 USDT before you start trading.
                        Once the presale ends you will be able to claim your tokens</p>
                </div>
                <div className="round-section">
                    <div className='wrap active'>
                        <h2>Stage 1</h2>
                        <p>100,000,000 <br /> AIM <br /> x 0.005</p>
                        <h2>=$500,000</h2>
                    </div>
                    <div className='wrap'>
                        <h2>Stage 2</h2>
                        <p>100,000,000 <br /> AIM <br /> x 0.01</p>
                        <h2>=$1,000,000</h2>
                    </div>
                    <div className='wrap'>
                        <h2>Stage 3</h2>
                        <p>100,000,000 <br /> AIM <br /> x 0.02</p>
                        <h2>=$2,000,000</h2>
                    </div>
                    <div className='wrap'>
                        <h2>Stage 4</h2>
                        <p>100,000,000 <br /> AIM <br /> x 0.04</p>
                        <h2>=$4,000,000</h2>
                    </div>
                    <div className='wrap'>
                        <h2>Stage 5</h2>
                        <p>100,000,000 <br /> AIM <br /> x 0.08</p>
                        <h2>=$8,000,000</h2>
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
                        <span style={{color : '#ffc107'}}>Deflationary Mechanism : </span>
                        The deflationary mechanism involves burning tokens used to purchase AI NFTs, accessories, and
                        other utilities in the virtual world of meme AIs.<br /><br />
                        <span style={{color : '#ffc107'}}>Governance : </span>
                        AIM will be using a decentralized autonomous
                        organization (DAO) model for governance. The DAO
                        will be composed of token holders who will have the
                        power to propose, vote, and execute changes within
                        the project ecosystem</p>
                </div>
            </div>
            <section className="titleOfSection">
                <h2>Fund Allocation</h2>
            </section>
            <SecondPieChart />
            <section className="titleOfSection">
                <h2>Roadmap</h2>
            </section>
            <MobileRoadmap />
            <section className="titleOfSection">
                <h2>Teams</h2>
            </section>

            <Team />
        </div>
    )
}

export default MobileLayout