import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import PieChartCard from './PieChartCard';
import './Common.css'

const PieChart = (index, setIndex) => {

    // const [index, setIndex] = useState(' ')
    const [lineOne, setLineOne] = useState(false)
    const [lineTwo, setLineTwo] = useState(false)
    const [lineThree, setLineThree] = useState(false)
    const [lineFour, setLineFour] = useState(false)
    const [lineFive, setLineFive] = useState(false)

    const data = {

        section1 : 
            {
                heading : 'Research and Development',
                desc : 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            }
        ,
        section2 : 
            {
                heading : 'Marketing and Promotion',
                desc : 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

            }
        ,
        section3 : 
            {
                heading : 'Exchange listing',
                desc : `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

            }
        ,
        section4 : 
            {
                heading : 'Expansion and Growth',
                desc : 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

            },
        section5 : 
            {
                heading : 'Research partnerships',
                desc : 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

            }
        
    }

    return (
        <>
            <div className="pirchart" style={{ position: 'relative' }}>



                <div className="chartwrap">

                    <div className="part-one"
                        onMouseEnter={() => setLineOne(true)}
                        onMouseLeave={() => setLineOne(false)}
                        onClick={() => index.index.setIndex(1)}
                        ></div>

                    <div className="part-two"
                        onMouseEnter={() => setLineTwo(true)}
                        onMouseLeave={() => setLineTwo(false)}
                        onClick={() => index.index.setIndex(2)}
                        ></div>

                    <div className="part-three"
                        onMouseEnter={() => setLineThree(true)}
                        onMouseLeave={() => setLineThree(false)}
                        onClick={() => index.index.setIndex(3)}
                        ></div>

                    <div className="part-four"
                        onMouseEnter={() => setLineFour(true)}
                        onMouseLeave={() => setLineFour(false)}
                        onClick={() => index.index.setIndex(4)}
                        ></div>

                    <div className="part-five"
                        onMouseEnter={() => setLineFive(true)}
                        onMouseLeave={() => setLineFive(false)}
                        onClick={() => index.index.setIndex(5)}
                        ></div>

                    {/* <div className="part-six"
    onMouseEnter={() => setLineSix(true)}
    onMouseLeave={() => setLineSix(false)}></div>

  <div className="part-seven"
    onMouseEnter={() => setLineSeven(true)}
    onMouseLeave={() => setLineSeven(false)}></div> */}
                </div>


                {lineOne ?
                    <div className="line-one">
                        <div className="line-wrap">
                            <span>Research and Development 31%</span>
                        </div>
                    </div> : ''
                }
                {lineTwo ?
                    <div className="line-two">
                        <div className="line-wrap">
                            <span>Marketing and Promotion 16%</span>
                        </div>
                    </div> : ''
                }
                {lineThree ?
                    <div className="line-three">
                        <div className="line-wrap">
                            <span>Token and Exchange listing 13%</span>
                        </div>
                    </div> : ''
                }
                {lineFour ?
                    <div className="line-four">
                        <div className="line-wrap">
                            <span>Expansion and Growth 26%</span>
                        </div>
                    </div> : ''
                }
                {lineFive ?
                    <div className="line-five">
                        <div className="line-wrap">
                            <span>Research partnerships 13% for </span>
                        </div>
                    </div> : ''
                }

                {index.index.index === 1 ? <PieChartCard content={data.section1} index={index.index.index} setIndex={index.index.setIndex} style={{ top: '60%', left: '53%' }} /> : ''}
                {index.index.index === 2 ? <PieChartCard content={data.section2} index={index.index.index} setIndex={index.index.setIndex} style={{ top: '95%', left: '48%' }} /> : ''}
                {index.index.index === 3 ? <PieChartCard content={data.section3} index={index.index.index} setIndex={index.index.setIndex} style={{ top: '100%', left: '42%' }} /> : ''}
                {index.index.index === 4 ? <PieChartCard content={data.section4} index={index.index.index} setIndex={index.index.setIndex} style={{ top: '75%', left: '32%' }} /> : ''}
                {index.index.index === 5 ? <PieChartCard content={data.section5} index={index.index.index} setIndex={index.index.setIndex} style={{ top: '50%', left: '37%' }} /> : ''}

            </div>
        </>

    );


}

export default PieChart