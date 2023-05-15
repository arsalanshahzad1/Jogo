import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FirstPieChart() {
    const [active, setActive] = useState(4)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const data = [

        [
            {
                heading: 'Pre-Sale',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            },
            {
                heading: 'Liquidity',
                desc: '100,000,000 liquidity coins will be locked for 2 years to provide liquidity and ensure stable trading'

            },
            {
                heading: 'Stake holder Remuneration',
                desc: '200,000,000 coins will be allocated for paying stakeholders, subject to vesting schedules to ensure long-term commitment to the project.'

            },
            {
                heading: 'Exchange listing funds',
                desc: 'the 2,000,000 coins are allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges.'

            }
        ],
        [{
            heading: 'Liquidity',
            desc: '100,000,000 liquidity coins will be locked for 2 years to provide liquidity and ensure stable trading'

        },
        {
            heading: 'Pre-Sale',
            desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

        },
        {
            heading: 'Stake holder Remuneration',
            desc: '200,000,000 coins will be allocated for paying stakeholders, subject to vesting schedules to ensure long-term commitment to the project.'

        },
        {
            heading: 'Exchange listing funds',
            desc: 'the 2,000,000 coins are allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges.'

        }],
        [
            {
                heading: 'Stake holder Remuneration',
                desc: '200,000,000 coins will be allocated for paying stakeholders, subject to vesting schedules to ensure long-term commitment to the project.'
    
            },
    
            {
                heading: 'Pre-Sale',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'
    
            },
            {
                heading: 'Liquidity',
                desc: '100,000,000 liquidity coins will be locked for 2 years to provide liquidity and ensure stable trading'
    
            },
    
            {
                heading: 'Exchange listing funds',
                desc: 'the 2,000,000 coins are allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges.'
    
            }
        ],
        [
            {
                heading: 'Exchange listing funds',
                desc: 'the 2,000,000 coins are allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges.'
    
            },
    
            {
                heading: 'Pre-Sale',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'
    
            },
            {
                heading: 'Liquidity',
                desc: '100,000,000 liquidity coins will be locked for 2 years to provide liquidity and ensure stable trading'
    
            },
            {
                heading: 'Stake holder Remuneration',
                desc: '200,000,000 coins will be allocated for paying stakeholders, subject to vesting schedules to ensure long-term commitment to the project.'
    
            },
    
        ]


    ]


    return (
        <section className="pirchart-two mob-slider" style={{ position: 'relative' }}>

            {active === 4 ?
                <div className="chartwrap">

                    <div className="part-one" onClick={() => setActive(0)}></div>

                    <div className="part-two" onClick={() => setActive(1)}></div>

                    <div className="part-three" onClick={() => setActive(2)}></div>

                    <div className="part-four" onClick={() => setActive(3)}></div>

                </div>
            :

<>
<h2 className='cancle-carosal' onClick={() => setActive(4)}>x</h2>
<Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data[active].map((e, index) => {
                    return (
                        <div className='mobile-pie-content' id={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>
                    )
                })}
            </Carousel>
</>
           
            }

        </section>
    )
}

export default FirstPieChart