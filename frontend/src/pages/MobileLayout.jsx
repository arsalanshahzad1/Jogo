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
import { Link } from 'react-router-dom'
import BuyNow from '../components/svg/BuyNow'
import WhitePaper from '../components/svg/WhitePaper'

const MobileLayout = () => {
    const openPdfInNewTab = () => {
        window.open("/assets/docs/Jogo-Media-whitepaper.pdf", "_blank");
    };

    return (
        <div className="mobile-layout">
            <section className="home-section-one" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail">
                                <p style={{ color: '#e4513b', paddingBottom: '10px' }}>Join the AI meme revolution with AIM</p>
                                <p>Venture into the heart of the AIM project, where cherished memes like Doge, Shiba, Baby Doge, and Pepe awaken as AI companions in an exhilarating new reality. Envision tailoring their voices, skills, and accessories, and immersing yourself in a dynamic Meme World where they interact and compete. Experience the thrill as these meme characters evolve into your personal assistants or steadfast companions, offering unwavering support and companionship, seamlessly integrating into your life. This isn't just another project; it's a pioneering venture that promises to redefine the intersection of AI and personal connection, making AIM the unparalleled leader in this space.</p>
                                <Link onClick={openPdfInNewTab}>
                                    <WhitePaper />
                                </Link>
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
                    Jogo Media LTD is an avant-garde digital marketing agency headquartered in London, specializing in the transformative realms of blockchain technology and artificial intelligence. For over three years, we have been pioneers in these groundbreaking sectors, providing cutting-edge solutions to large and medium-sized enterprises.
                    <br /><br />
                    Our proficiency in blockchain development has steered us to the launch of several successful projects, aiding our clients in decoding the intricate terrain of distributed ledger technology. We take immense pride in our significant contributions to the blockchain ecosystem and anticipate continuing our innovative pursuits with the introduction of our AI personal assistant powered by the AIM Token.
                    <br /><br />
                    Parallel to our blockchain ventures, we also excel in artificial intelligence and machine learning, perpetually harnessing the potential of these technologies to engineer innovative solutions and propel business growth.
                    <br /><br />
                    Beyond our expertise in AI and blockchain, we provide an extensive spectrum of digital marketing services. Our seasoned team of experts has an impressive track record in developing mobile applications for iOS and Android, crafting bespoke software solutions, and executing effective marketing strategies tailored to meet our clients' distinct needs.
                    <br /><br />
                    Our suite of digital marketing services includes SEO, SEM, social media marketing, content marketing, and pay-per-click advertising, all meticulously designed to help our clients realize their business objectives.
                    <br /><br />
                    We are honored to have collaborated with a diverse range of clients, including some of the most prominent names in the tech industry, and remain committed to staying at the vanguard of technological and marketing trends.
                    <br /><br />
                    As we gear up for the AIM Token ICO, we cordially invite potential investors to delve deeper into this thrilling opportunity at the intersection of AI and blockchain technology. Join us on this remarkable journey and explore how Jogo Media LTD can help shape your financial future."
                    <br /><br />
                    Change this content in the FAQs section:
                    Frequently Asked Questions ( Frequently asked question is written twice, remove one)
                    <br /><br />
                    Is the personal Ai assistent already developed ?
                    Indeed, we have already developed a prototype of our personal AI assistant, which you can preview in our YouTube video: https://www.youtube.com/watch?v=9zHIxAsjFvg.
                    At this stage, we are eager to build a powerful community that can test, refine, and perfect the project. The launch of the AIM Token is a strategic move to raise the necessary funds to continue the development of the project. We are excited about the journey ahead and look forward to seeing the transformative impact our AI assistant will bring.
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
                            Is the personal Ai assistent already developed ?
                        </p>
                        <p className='FAQ-Answer'>
                            Indeed, we have already developed a prototype of our personal AI assistant, which you can preview in our YouTube video: https://www.youtube.com/watch?v=9zHIxAsjFvg.
                            At this stage, we are eager to build a powerful community that can test, refine, and perfect the project. The launch of the AIM Token is a strategic move to raise the necessary funds to continue the development of the project. We are excited about the journey ahead and look forward to seeing the transformative impact our AI assistant will bring.
                        </p>
                        <p className='FAQ-question'>
                            What is AIM Token?
                        </p>
                        <p className='FAQ-Answer'>
                            AIM Token is a utility token that powers the AI personal assistant developed by Jogo Media LTD. It is an integral part of an ecosystem designed to facilitate interactions with meme characters driven by artificial intelligence.
                        </p>
                        <p className='FAQ-question'>
                            What are the benefits of owning AIM Tokens?
                        </p>
                        <p className='FAQ-Answer'>
                            Owning AIM Tokens provides you with wide-ranging opportunities within our ecosystem. These tokens can be used for:
                            <br /><br />
                            1. Engaging with our AI personal assistant, a valuable tool that can help you manage and streamline your digital life.<br />
                            2. Purchasing your personalized meme character, giving you a unique and customizable presence within the meme community.<br />
                            3. Acquiring a variety of voices for your character, allowing for further personalization and interaction opportunities.<br />
                            4. Buying NFTs (Non-Fungible Tokens), offering you a way to own unique digital assets and participate in the thriving NFT market.<br />
                            5. Accessing a diverse assortment of virtual items for your meme character. This includes food, clothing, toys, and various other items that can enhance your meme character's appearance and interactions.
                            As the AIM ecosystem expands and introduces new features and services, the potential applications of AIM Tokens will continue to increase, potentially enhancing their value. It's not just an investment; it's a ticket to a vibrant, interactive, and expanding digital community.
                        </p>
                        <p className='FAQ-question'>
                            What is an ICO?
                        </p>
                        <p className='FAQ-Answer'>
                            ICO stands for Initial Coin Offering. It is a fundraising method used by blockchain-based projects to raise capital by selling a portion of their cryptocurrency tokens to early investors.
                        </p>
                        <p className='FAQ-question'>
                            How can I purchase AIM Tokens?
                        </p>
                        <p className='FAQ-Answer'>
                            AIM Tokens will be available for purchase during our Initial Coin Offering (ICO). You can purchase AIM Tokens by connecting your wallet and using USDT (ERC-20) for the transaction.
                        </p>
                        <p className='FAQ-question'>
                            There is any Buy Or Sell Tax ?
                        </p>
                        <p className='FAQ-Answer'>
                            No, our token does not have any buy or sell taxes. When you trade our token, there are no additional taxes or fees imposed on the transactions. We aim to provide a seamless and cost-effective trading experience for our token holders.
                        </p>
                        <p className='FAQ-question'>
                            What is the roadmap for AIM Token's development?
                        </p>
                        <p className='FAQ-Answer'>
                            Our detailed development roadmap can be found in our whitepaper, which outlines our planned initiatives and timelines for AIM Token and the AI personal assistant.

                        </p>
                        <p className='FAQ-question'>
                            How can I stay updated on AIM Token's progress?

                        </p>
                        <p className='FAQ-Answer'>
                            To keep abreast of the latest developments and news about AIM Token, we recommend following our official social media channels. Our official Twitter account, @JogoAimeme, and our CEO, Chingiz Iandarbiev's personal Twitter, @ChingizAim, frequently share vital updates.
                            <br /><br />
                            Additionally, join our Telegram group https://t.me/AimTokenOFFICIAL for real-time conversations, updates, and a chance to engage directly with our vibrant community. These platforms will provide you with comprehensive insights into AIM Token's progress and developments.
                        </p>
                        <p className='FAQ-question'>
                            How will the funds raised during the ICO be used?
                        </p>
                        <p className='FAQ-Answer'>
                            The funds raised during the ICO will be allocated according to the detailed plan outlined in the AIM Token whitepaper.
                        </p>
                        <p className='FAQ-question'>
                            Is there a minimum investment requirement?
                        </p>
                        <p className='FAQ-Answer'>
                            Yes 30$
                        </p>
                        <p className='FAQ-question'>
                            How can I store and manage AIM tokens after the ICO?
                        </p>
                        <p className='FAQ-Answer'>
                            AIM tokens are ERC-20 compliant, which means they can be stored in compatible cryptocurrency wallets such as MetaMask, MyEtherWallet, or hardware wallets like Ledger and Trezor. Make sure to follow the instructions provided by Us for secure storage and management of your tokens.
                        </p>
                        <p className='FAQ-question'>
                            When will AIM tokens be distributed?
                        </p>
                        <p className='FAQ-Answer'>
                            The distribution of AIM tokens will commence shortly after the pre selling. Specific dates and details will be communicated to all participants and announced on our official communication channels. Please note that distribution times can vary depending on network congestion and other factors.
                            <br /><br />
                            Will AIM tokens be listed on cryptocurrency exchanges?
                            Yes, we plan to list AIM tokens on several popular cryptocurrency exchanges after the conclusion of the ICO. The specific exchanges and listing dates will be announced in due course. Listing AIM tokens on exchanges is a crucial step, as it provides liquidity and facilitates trading, enabling token holders to buy, sell, or trade their AIM tokens.

                        </p>
                        <p className='FAQ-question'>
                            Why i have to invest in your project ?
                        </p>
                        <p className='FAQ-Answer'>
                            Investing in our project provides the opportunity to become part of an innovative venture at the cutting edge of AI and blockchain technology. Our AIM Token will power an ecosystem that brings together AI-powered personal assistants, meme characters, and NFTs, all of which are rapidly growing sectors.
                            <br /><br />
                            Furthermore, AIM Tokens will have multiple utilities within the ecosystem, including the ability to purchase personal meme characters, various NFTs, and additional services in our shop. As the ecosystem expands, the utility and potential applications of AIM Tokens are expected to increase, which could potentially enhance their value.
                            <br /><br />
                            Importantly, our project distinguishes itself in terms of security and transparency. Our smart contract has been audited by Securi Lab, providing an additional layer of trust and security for our investors. Unlike many projects in the space, we are an undoxed company with a known team behind it. Jogo Media LTD is a trusted name with a proven track record in delivering successful blockchain and AI projects.
                            <br /><br />
                            By investing in our project, you'll be partnering with a team that is not only committed to realizing a vision at the intersection of AI, blockchain, and the burgeoning NFT space, but also values transparency, security, and the trust of our investors.
                            <br /><br />
                            However, we must remind you that as with all investments, there are risks involved. We encourage all potential investors to thoroughly read our whitepaper, understand the project, and consider their financial situation and risk tolerance before investing.
                        </p>
                        <p className='FAQ-heading'>
                            Disclaimer
                        </p>
                        <div>
                            <p className='FAQ-Answer'>
                                This document and the information contained herein is not intended to be a source of investment, financial, technical, tax, or legal advice. This document and the AIM Token project are not an offer to sell or a solicitation of an offer to buy a security in any jurisdiction where it is unlawful to make such an offer or solicitation.
                                <br /><br />
                                The AIM Token project is a highly speculative venture that carries significant risks. Potential purchasers should carefully consider these risks and consult with their legal, financial, tax, and other advisors before making a decision to invest in AIM Tokens.
                                <br /><br />
                                The AIM Token project is still in an early development stage. There can be no assurance that the technology or the project will be implemented or that the AIM Tokens will have any utility. The purchase of AIM Tokens should only be undertaken by individuals or entities that are capable of understanding and affording the risks involved with the purchase of a digital asset like the AIM Tokens.
                                <br /><br />
                                No representations or warranties of any kind are made, or should be inferred, about the suitability of AIM Tokens for your investment, the likelihood of profitability from purchasing or holding AIM Tokens, or the tax consequences of such purchase or hold.
                                <br /><br />
                                Please note that the regulatory status of cryptographic tokens and digital assets is unclear or unsettled in many jurisdictions. It is your responsibility to know and understand how cryptocurrencies and blockchain technology is regulated in your country.
                                <br /><br />
                                This disclaimer applies to the fullest extent permitted by law in each jurisdiction in which a token purchaser is domiciled.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default MobileLayout