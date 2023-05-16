import React, { useState } from 'react'
import Header from '../pages/landingpage/Header'
import Snack from "../components/shared/Snack";
import Buy from '../components/svg/Buy';
import BuyWithUsdt from '../components/svg/BuyWithUsdt';
import Disconnect from '../components/svg/Disconnect';
import { Link } from 'react-router-dom';
import BackButton from '../components/svg/BackButton';
import Wallet from '../components/svg/Wallet';

const PreSales = () => {
    const [close, setClose] = useState('')
    return (
        <>
            <section className="home_wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="sec-wrap">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="top-bar">
                                        <div className="sec-left-wrap"></div>
                                        <div className="sec-right-wrap">
                                            <div className="left">
                                                <Link to={'/'}>
                                                    <BackButton />
                                                </Link>

                                            </div>
                                            <div className="right">
                                                <Link className='pre-sale-wallet'>
                                                    <Wallet classes={"wallet-btn"} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="bottom-wrap">
                                        <div className="left-side">
                                            <Header />
                                        </div>
                                        <div className="right-side">

                                            <section className='sale-section'>
                                                <div className="wrap">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-md-7">
                                                            <div className="left-wrap">
                                                                <div className='detail-wrap'>
                                                                    <h2>Round 1</h2>
                                                                    <h3>has started!</h3>
                                                                    <p><span>1 USDT</span><span>=</span><span>1897.12 ICO</span></p>
                                                                </div>
                                                                <div className='image-wrap'>
                                                                    <div className="wrap">
                                                                        <img src="/assets/images/bg-frame.png" alt="" width={'100%'} />
                                                                        <div className="detail">
                                                                            <h2>You have 0 ICO Tokens</h2>
                                                                            {/* <h3>View your potential returns</h3> */}
                                                                            <p className='p1'>Connected Wallet</p>
                                                                            <p className='p2'>xasdOTBASas459747asdqwr7654:x879</p>
                                                                            <div className='btn-line-one'>
                                                                                <Buy classes={'buy-with-eth'} />
                                                                                <BuyWithUsdt classes={'buy-with-usdt'} />


                                                                            </div>
                                                                            <div className='btn-line-two'>
                                                                                <Disconnect classes={'disconnect'} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-5 col-md-5">

                                                            <div className="right-wrap">
                                                                <img src="/assets/images/nft.png" alt="" width={'60%'} />
                                                                <p><span>USDT Raised </span><br/><span>$35,509.025.20 / $38,824.697.12</span></p>
                                                                <h2>Amount raised</h2>
                                                                <div className="loader-root">
                                                                    <div className="loader-inner" style={{ width: 'max(min(25.5rem, 100% - 0.75rem), 3.375rem)' }}>
                                                                        <div className="loader-bar-container">
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar last" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>
                                                                            <div className="loader-bar-black" style={{ display: 'block' }}></div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>

                                                    <img className="image-one" src="/assets/images/section-one/sec-1.png" alt="" />
                                                </div>
                                            </section>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PreSales