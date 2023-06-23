import React from 'react'
import '../../App.css'
import billgates from '../../../public/assets/images/billgates.png'
import LearnMore from '../../components/svg/LearnMore'
function BillGates() {
    return (
        <>
            <div className='Billgates-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 my-auto mx-auto">
                            <div className='Billgates-left-heading'>
                                <p >
                                    Bill Gates says an under the radar startup could be the biggest winner in the AI. Check out its free app, and you'll see why.
                                </p>
                                <a style={{ textDecoration: 'none' }} target='_blank' href="https://www.msn.com/en-us/news/technology/bill-gates-says-an-under-the-radar-startup-could-be-the-biggest-winner-in-the-ai-check-out-its-free-app-and-youll-see-why/ar-AA1bDkqh">
                                    <div className='Billgates-left-btn'>
                                        <LearnMore />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='Billgates-image-div'>
                                <img src={billgates} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='Billgates-inner'>
                    <div className='Billgates-left'>
                        <div className='Billgates-left-heading'>
                            <p >
                                Bill Gates says an under-the-radar startup could be the biggest winner in the AI. Check out its free app, and you'll see why.
                            </p>
                            <a style={{ textDecoration: 'none' }} target='_blank' href="https://www.msn.com/en-us/news/technology/bill-gates-says-an-under-the-radar-startup-could-be-the-biggest-winner-in-the-ai-check-out-its-free-app-and-youll-see-why/ar-AA1bDkqh">
                                <div className='Billgates-left-btn'>
                                    <LearnMore />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='Billgates-right'>
                        <div className='Billgates-image-div'>
                            <img src={billgates} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default BillGates