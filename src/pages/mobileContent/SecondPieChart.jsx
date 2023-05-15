import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SecondPieChart = () => {
    const [active, setActive] = useState(5)

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


        [{
            heading: 'Research and Development',
            desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

        },

        {
            heading: 'Marketing and Promotion',
            desc: 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

        },

        {
            heading: 'Exchange listing',
            desc: `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

        },

        {
            heading: 'Expansion and Growth',
            desc: 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

        },
        {
            heading: 'Research partnerships',
            desc: 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

        }],

        [

            {
                heading: 'Marketing and Promotion',
                desc: 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

            },

            {
                heading: 'Research and Development',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            },

            {
                heading: 'Exchange listing',
                desc: `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

            },

            {
                heading: 'Expansion and Growth',
                desc: 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

            },
            {
                heading: 'Research partnerships',
                desc: 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

            }],

        [
            {
                heading: 'Exchange listing',
                desc: `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

            },
            {
                heading: 'Research and Development',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            },

            {
                heading: 'Marketing and Promotion',
                desc: 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

            },


            {
                heading: 'Expansion and Growth',
                desc: 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

            },
            {
                heading: 'Research partnerships',
                desc: 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

            }],

        [
            {
                heading: 'Expansion and Growth',
                desc: 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

            },
            {
                heading: 'Research and Development',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            },

            {
                heading: 'Marketing and Promotion',
                desc: 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

            },

            {
                heading: 'Exchange listing',
                desc: `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

            },

            {
                heading: 'Research partnerships',
                desc: 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

            }],
        [
            {
                heading: 'Research partnerships',
                desc: 'The Research Partnerships fund is a key part of the AIM project, as it helps to ensure that the project is constantly evolving and improving. By partnering with leading academic institutions and research organizations, the AIM team can tap into the latest research and development in the field of AI'

            },
            {
                heading: 'Research and Development',
                desc: 'During the pre-selling stage, 50% (500,000,000) of AIM coins will be available for purchase through a 5-stage pre-selling process, with each stage having a set price per coin.'

            },

            {
                heading: 'Marketing and Promotion',
                desc: 'The $2,500,000 allocated for marketing and promotion will be used to create a comprehensive strategy that aims to create brand awareness, establish the project as reputable and innovative, faster community growth, and attract potential investors, partners, and users!'

            },

            {
                heading: 'Exchange listing',
                desc: `The $2,000,000 allocated for Token and Exchange Listings will cover the fees and costs associated with listing AIM on major and smaller cryptocurrency exchanges. It will also be used to build and maintain relationships with these exchanges, which is crucial for the project's success`

            },

            {
                heading: 'Expansion and Growth',
                desc: 'Expansion and Growth budget is designed to ensure that the AIM project is able to scale up and meet the needs of users as the project grows. The budget will cover the costs of expanding the team, infrastructure, and functionality of the project, ensuring that the AIM project remains relevant and competitive in the rapidly-evolving cryptocurrency and AI markets.'

            },
        ],

    ]

    return (
        <section className="pirchart mob-slider" style={{ position: 'relative' }}>

            {active === 5 ?
                <div className="chartwrap">

                    <div className="part-one" onClick={() => setActive(0)}></div>

                    <div className="part-two" onClick={() => setActive(1)}></div>

                    <div className="part-three" onClick={() => setActive(2)}></div>

                    <div className="part-four" onClick={() => setActive(3)}></div>

                    <div className="part-five" onClick={() => setActive(4)}></div>

                </div>
                :

                <>
                    <h2 className='cancle-carosal' onClick={() => setActive(5)}>x</h2>
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

export default SecondPieChart