import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MobileRoadmap = () => {
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
    
    const data = {
        q2: [
            {
                heading: 'Lauch of the Myme coin.',
                desc: 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

            },
            {
                heading: 'Creation of AIM community!',
                desc: 'As the AI Meme Coin project prepares for launch, we will create a community of enthusiasts, supporters, and potential investors who are interested in our vision.'

            },

        ],

        q3: [
            {
                heading: 'Staking System.',
                desc: 'The AIM project will launch its staking platform, which will allow token holders to earn interest on their AIM coins by staking them.'

            },
            {
                heading: 'NFT AI sales',
                desc: 'Launch of a special portal where users can purchase and sell unique Meme AIs in the form of NFTs (non-fungible tokens) with various characteristics, including color, character, and voice.'

            },
            {
                heading: 'Launch of the virtual world of memes.',
                desc: 'Allow users to access the world of Meme AIs and interact with them through their mobile devices.'

            },

        ],
        q4: [
            {
                heading: 'Listing AIM tokens on major cryptocurrency exchanges.',
                desc: 'This is a crucial step for the success of the project. It means that the tokens will be available for trading on popular platforms. We have decided to prioritize completing the first steps of the project before listing on exchanges, to ensure a good ROI for all our holders. We plan to make this decision as a community.'

            }

        ],
        q5: [
            {
                heading: 'Launch of the Meme AI education service.',
                desc: 'The launch of the Meme AI education service will provide an opportunity for users to learn and study with their Meme AIs. This service will be available through the AIM special portal, where users can access a variety of educational content, including courses, tutorials, and interactive lessons'

            }

        ],
        q6: [
            {
                heading: 'Release of the Meme AI personal assistant service.',
                desc: 'The release of the Meme AI personal assistant service marks the launch of a new feature that will be integrated into the AIM ecosystem. With this service, users will be able to rely on their Meme AIs to provide them with assistance in their daily tasks and routines.'

            }

        ],

        q7: [
            {
                heading: 'Introduction of Meme AI language translation service.',
                desc: 'The introduction of Meme AI language translation service is a significant milestone for the AIM project, as it will allow users to communicate with people who speak different languages. This service will leverage the natural language processing capabilities of Meme AIs to provide accurate and real-time translations of spoken or written language.'

            },
            {
                heading: 'Release of the Meme AI arcade game.',
                desc: `The Release of the Meme AI arcade game is a step in the AIM coin project's development that involves launching an arcade game that users can play with their Meme AIs. This game will be designed to be interactive, engaging, and fun for users of all ages.`

            },

        ],
        q8: [
            {
                heading: 'Release of the Meme AI strategic game.',
                desc: 'The Meme AI strategic game is a multiplayer game where users can battle their Meme AIs against each other in a virtual arena. Each player will have their own unique Meme AI with its own set of abilities and characteristics.'

            },
            {
                heading: 'Interactive holographic reality for Meme AIs.',
                desc: 'The development of an interactive holographic reality for Meme AIs is a major milestone in the AIM Coin project. This technology will allow users to engage with their Meme AIs in a more immersive and realistic manner. Instead of simply communicating with their Meme AIs through a mobile device or computer.'

            },

        ],


        q9: [
            {
                heading: 'Launch of Meme AI mental health service.',
                desc: 'The launch of the Meme AI mental health service is a significant step for the AIM project, as it will offer users the ability to receive support and guidance from their Meme AIs for mental health issues. This service will provide users with a unique and interactive way to manage their mental health, allowing them to receive guidance, support, and companionship from their Meme AIs.'

            }

        ],
        q10: [
            {
                heading: 'Development of Meme AI physical health service.',
                desc: 'The development of the Meme AI physical health service aims to provide users with personalized health recommendations through their Meme AIs. This service will be designed to provide users with accurate and reliable health information, customized to their individual needs and preferences'

            }

        ],
        q11: [
            {
                heading: 'Introduction of Meme AI financial planning service.',
                desc: 'The introduction of the Meme AI financial planning service will allow users to receive personalized financial advice and planning from their Meme AIs. With this service, users will be able to access a range of financial tools and resources that will help them manage their money and plan for the future.'

            }

        ],
        q12: [
            {
                heading: 'Development of the Meme AI SDK.',
                desc: 'The development of the Meme AI SDK (Software Development Kit) will enable developers to create and integrate their own Meme AIs into the AIM ecosystem. This will expand the  AIM project beyond the initial offerings, as developers will be able to create unique Meme AIs with specific characteristics and functionalities.'

            }

        ]
    }

  
    return (
        <div className="roadmap-section-mobile">
            <h2 className='map-sec-title'>Q2 2023</h2>
            <div>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q2.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            </div>
            <h2 className='map-sec-title'>Q3</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q3.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q4</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q4.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q1 2024</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q5.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q2</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q6.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q3</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q7.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q4</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q8.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q1 2025</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q9.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q2</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q10.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q3</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q11.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
            <h2 className='map-sec-title'>Q4</h2>
            <Carousel showDots={false} responsive={responsive} infinite={false} autoPlaySpeed={1000} transitionDuration={500}>
                {data.q12.map((e, index) => {
                    return (
                        <div className='mobile-rodemap-content' key={index}>
                            <h2>{e.heading}</h2>
                            <p>{e.desc}</p>
                        </div>)
                })}
            </Carousel>
        </div>
    )
}

export default MobileRoadmap