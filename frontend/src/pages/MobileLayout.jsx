import React from 'react'
import FirstPieChart from './mobileContent/FirstPieChart'
import SecondPieChart from './mobileContent/SecondPieChart'
import Team from './Team'
import MobileRoadmap from './mobileContent/MobileRoadmap'
import MobileVideo from './mobileContent/MobileVideo'
import BillGates from './landingpage/BillGates'
import PreSales from './PreSales'
import About from './landingpage/About'
import { Loader } from '../assets/Loader/Loader'

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
                    What is Jogo Media?
                    </p>
                    <p className='FAQ-Answer'>
                    Jogo Media is a web3 project that aims to revolutionize the gaming industry by leveraging blockchain technology and decentralized application
                    </p>
                    <p className='FAQ-question'>
                    What is an ICO?
                    </p>
                    <p className='FAQ-Answer'>
                    ICO stands for Initial Coin Offering. It is a fundraising method used by blockchain-based projects to raise capital by selling a portion of their cryptocurrency tokens to early investors.
                    </p>
                    <p className='FAQ-question'>
                    What is AIM Token?  
                    </p>
                    <p className='FAQ-Answer'>
                    AIM Token is the native ERC-20 token of Jogo Media's platform. It serves as the utility token within the ecosystem and offers various benefits such as access to exclusive content, in-game purchases, and voting rights
                    </p>
                    <p className='FAQ-question'>
                    How many rounds of ICO will Jogo Media conduct?
                    </p>
                    <p className='FAQ-Answer'>
                    Jogo Media will conduct five rounds of ICO to distribute the AIM tokens. Each round may have different terms, including token price, bonus structure, and minimum investment requirements.

                    </p>
                    <p className='FAQ-question'>
                    How can I participate in the ICO?
                    </p>
                    <p className='FAQ-Answer'>
                    To participate in the ICO, you need to visit Jogo Media's official website and follow the instructions provided. Typically, you will need to create an account, complete the necessary KYC (Know Your Customer) procedures, and contribute funds in a specified cryptocurrency (e.g., ETH, BTC).
                    </p>
                    <p className='FAQ-question'>
                    Can anyone participate in the ICO?
                    </p>
                    <p className='FAQ-Answer'>
                    Generally, ICOs have certain restrictions depending on the jurisdiction. It's important to review the terms and conditions to ensure you meet any eligibility criteria, such as being of legal age and complying with local regulations.
                    </p>
                    <p className='FAQ-question'>
                    How will the funds raised during the ICO be used?
                    </p>
                    <p className='FAQ-Answer'>
                    The allocation of funds raised during the ICO will be outlined in Jogo Media's whitepaper or other project documentation. It may include areas such as platform development, marketing and promotion, partnerships, research and development, and operational expenses.
                    </p>
                    <p className='FAQ-question'>
                    Is there a minimum investment requirement?
                    </p>
                    <p className='FAQ-Answer'>
                    The minimum investment requirement may vary for each round of the ICO. The specific details will be provided on Jogo Media's official website or in the ICO documentation.

                    </p>
                    <p className='FAQ-question'>
                    How can I store and manage AIM tokens after the ICO?
                    </p>
                    <p className='FAQ-Answer'>
                    AIM tokens are ERC-20 compliant, which means they can be stored in compatible cryptocurrency wallets such as MetaMask, MyEtherWallet, or hardware wallets like Ledger and Trezor. Make sure to follow the instructions provided by Jogo Media for secure storage and management of your tokens.
                    </p>
                    <p className='FAQ-question'>
                    When will AIM tokens be distributed?
                    </p>
                    <p className='FAQ-Answer'>
                    The distribution timeline for AIM tokens will be communicated by Jogo Media. Typically, token distribution occurs after the ICO has concluded, and the necessary auditing and security measures have been completed.

                    </p>
                    <p className='FAQ-question'>
                    Will AIM tokens be listed on cryptocurrency exchanges?
                    </p>
                    <p className='FAQ-Answer'>
                    Jogo Media's plan to list AIM tokens on cryptocurrency exchanges will be outlined in their project roadmap or whitepaper. Exchanges provide liquidity and facilitate trading of tokens, enabling users to buy, sell, or trade AIM tokens.
                    </p>
                    <p className='FAQ-question'>
                    What are the potential risks associated with participating in the ICO?
                    </p>
                    <p className='FAQ-Answer'>
                    ICO investments carry inherent risks, including regulatory uncertainty, market volatility, project failure, and loss of funds. It's crucial to conduct thorough research, assess the project's viability, and consider consulting with a financial advisor before participating in any ICO.
                    </p>
                    <p className='FAQ-Answer'>
                    Remember to check Jogo Media's official website and project documentation for accurate and up-to-date information about their ICO and AIM token.
                    </p>    
                </div>
            </div>
        </section>
        </div>
    )
}

export default MobileLayout