import React from 'react'
import FirstPieChart from './mobileContent/FirstPieChart'
import SecondPieChart from './mobileContent/SecondPieChart'
import Team from './Team'
import MobileRoadmap from './mobileContent/MobileRoadmap'
import MobileVideo from './mobileContent/MobileVideo'
import BillGates from './landingpage/BillGates'
import PreSales from './PreSales'
import About from './landingpage/About'

const MobileLayout = () => {
    return (
        <div className="mobile-layout">
            <section className="home-section-one" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail">
                                <p style={{ color: '#e4513b', paddingBottom: '10px' }}>Join the AI meme revolution with AIM</p>
                                <p>Welcome to AIM - the future of AI personal agents! Infusing cutting-edge AI with the humor of memes, we're pioneering an engaging digital experience. Join us, invest in innovation, and be part of this game-changing platform poised for industry leadership.</p>
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
            <BillGates />
            <section className="home-section-two">
                <MobileVideo />
            </section>
            <PreSales />
            <section className="titleOfSection">
                <h2>Token Economics</h2>
            </section>

            <FirstPieChart />
            <div className="home-section-four">
                <div className="detail">
                    <h2>How to participate in presale?</h2>
                    <p><span style={{ textAlign: 'left', display: 'inline-block', paddingBottom: '15px' }}>1. Connect Wallet <br />2. Select Either to buy with ETH or USDT</span><br />
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
                        <span style={{ color: '#ffc107' }}>Utility : </span>
                        The AIM token will serve as the primary currency for all
                        transactions within the virtual world of meme AIs <br /><br />
                        <span style={{ color: '#ffc107' }}>Deflationary Mechanism : </span>
                        The deflationary mechanism involves burning tokens used to purchase AI NFTs, accessories, and
                        other utilities in the virtual world of meme AIs.<br /><br />
                        <span style={{ color: '#ffc107' }}>Governance : </span>
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
            <section className="titleOfSection">
                <h2>About us</h2>
            </section>
            <section className='About-section' id='aboutus'>
                <p className='About-desc'>
                    "JogoMedia, a leading digital marketing agency, boasts three years of proven experience working with large and medium-sized commercial entities. Our expert team has a demonstrated history of developing and implementing effective marketing strategies tailored to our clients' unique needs.

                    Our diverse range of services includes developing applications for iOS and Android, creating custom software solutions, and working with blockchain technology. We have successfully launched several blockchain projects in collaboration with our clients.

                    As a full-service digital marketing agency, our commitment is to help our clients achieve their business goals across various marketing channels. These services include SEO, SEM, social media marketing, content marketing, and pay-per-click advertising.

                    At JogoMedia, we consistently strive to stay at the forefront of emerging technologies, including artificial intelligence and machine learning. We are proud to have worked with numerous clients, including some of the tech industry's biggest names.

                    If you're a large or medium-sized commercial entity looking for a reliable digital marketing partner, we invite you to contact us and learn more about how we can help your business succeed."
                </p>
            </section>
            <section className="titleOfSection">
                <h2>FAQs</h2>
            </section>
            <section className='FAQ-section' id='faqs'>
            <div className='FAQ-inner'>
                <p className='FAQ-heading'>
                    Frequently Asked Questions
                </p>
                <div>
                    <p className='FAQ-question'>
                        Question 1
                    </p>
                    <p className='FAQ-Answer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos laudantium! Aut eligendi iste incidunt error hic amet exercitationem, commodi recusandae alias cum perspiciatis maiores numquam, iure nostrum fuga eaque!
                    </p>
                    <p className='FAQ-question'>
                        Question 1
                    </p>
                    <p className='FAQ-Answer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos laudantium! Aut eligendi iste incidunt error hic amet exercitationem, commodi recusandae alias cum perspiciatis maiores numquam, iure nostrum fuga eaque!
                    </p>
                    <p className='FAQ-question'>
                        Question 1
                    </p>
                    <p className='FAQ-Answer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos laudantium! Aut eligendi iste incidunt error hic amet exercitationem, commodi recusandae alias cum perspiciatis maiores numquam, iure nostrum fuga eaque!
                    </p>
                    <p className='FAQ-question'>
                        Question 1
                    </p>
                    <p className='FAQ-Answer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos laudantium! Aut eligendi iste incidunt error hic amet exercitationem, commodi recusandae alias cum perspiciatis maiores numquam, iure nostrum fuga eaque!
                    </p>
                    <p className='FAQ-question'>
                        Question 1
                    </p>
                    <p className='FAQ-Answer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos laudantium! Aut eligendi iste incidunt error hic amet exercitationem, commodi recusandae alias cum perspiciatis maiores numquam, iure nostrum fuga eaque!
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default MobileLayout