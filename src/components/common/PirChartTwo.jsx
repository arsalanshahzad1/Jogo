import React, { useEffect, useState } from 'react'
import PieChartCard from './PieChartCard'

const PirChartTwo = (index , setIndex) => {
    // const [index, setIndex] = useState(0)
    const [lineOne, setLineOne] = useState(false)
    const [lineTwo, setLineTwo] = useState(false)
    const [lineThree, setLineThree] = useState(false)
    const [lineFour, setLineFour] = useState(false)

    const data = {

        section1 : 
            {
                heading : 'Pre-Sale',
                desc : 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            }
        ,
        section2 : 
            {
                heading : 'Liquidity',
                desc : '100,000,000 liquidity coins will be locked for 2 years to provide liquidity and ensure stable trading'

            }
        ,
        section3 : 
            {
                heading : 'Stake holder Remuneration',
                desc : '200,000,000 coins will be allocated for paying stakeholders, subject to vesting schedules to ensure long-term commitment to the project.'

            }
        ,
        section4 : 
            {
                heading : 'Exchange listing funds',
                desc : 'the 2,000,000 coins are allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges.'

            }
        
    }
    
    useEffect(() =>{

    } , [])
    return (
        <div className="pirchart-two" style={{ position: 'relative' }}>

            <div className="chartwrap">

                <div className="part-one"
                    onMouseEnter={() => setLineOne(true)}
                    onMouseLeave={() => setLineOne(false)}
                    onClick={() => index.index.setIndex(1)}></div>

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

            </div>



            {lineOne ?
                <div className="line-one">
                    <div className="line-wrap">
                        <span>Presale 50%</span>
                    </div>
                </div> : ''
            }
            {lineTwo ?
                <div className="line-two">
                    <div className="line-wrap">

                        <span>exchange listing funds 20%</span>
                    </div>
                </div> : ''
            }
            {lineThree ?
                <div className="line-three">
                    <div className="line-wrap">
                        <span>Stakeholder 20%</span>
                    </div>
                </div> : ''
            }
            {lineFour ?
                <div className="line-four">
                    <div className="line-wrap">
                        <span>Liquidty 10%</span>
                    </div>
                </div> : ''
            }

            {index.index.index === 1 ? <PieChartCard content={data.section1} index={index.index.index} setIndex={index.index.setIndex} style={{top : '65%' , left : '60%'}}/> : ''}
            {index.index.index === 2 ? <PieChartCard content={data.section2} index={index.index.index} setIndex={index.index.setIndex} style={{top : '100%' , left : '25%'}}/> : ''}
            {index.index.index === 3 ? <PieChartCard content={data.section3} index={index.index.index} setIndex={index.index.setIndex} style={{top : '80%' , left : '10%'}}/> : ''}
            {index.index.index === 4 ? <PieChartCard content={data.section4} index={index.index.index} setIndex={index.index.setIndex} style={{top : '50%' , left : '26%'}}/> : ''}


        </div>
    )
}

export default PirChartTwo