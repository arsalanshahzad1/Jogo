import React, { useEffect, useState } from 'react'
import CardOne from '../common/CardOne'

const Snack = ({close}) => {
    useEffect(() =>{
    })
    const [tab , setTab] = useState('');

    const closeTab = () =>{

    }

    const data = {
        q2 : [
            {
                heading : 'Lauch of the Myme coin.',
                desc : 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

            } ,
            {
                heading : 'Creation of AIM community!',
                desc : 'As the AI Meme Coin project prepares for launch, we will create a community of enthusiasts, supporters, and potential investors who are interested in our vision.'

            } ,

        ],

        q3 : [
            {
                heading : 'Staking System.',
                desc : 'The AIM project will launch its staking platform, which will allow token holders to earn interest on their AIM coins by staking them.'

            } ,
            {
                heading : 'NFT AI sales',
                desc : 'Launch of a special portal where users can purchase and sell unique Meme AIs in the form of NFTs (non-fungible tokens) with various characteristics, including color, character, and voice.'

            } ,
            {
                heading : 'Launch of the virtual world of memes.',
                desc : 'Allow users to access the world of Meme AIs and interact with them through their mobile devices.'

            } ,

        ],
        q4 : [
            {
                heading : 'Listing AIM tokens on major cryptocurrency exchanges.',
                desc : 'This is a crucial step for the success of the project. It means that the tokens will be available for trading on popular platforms. We have decided to prioritize completing the first steps of the project before listing on exchanges, to ensure a good ROI for all our holders. We plan to make this decision as a community.'

            }

        ],
        q5 : [
            {
                heading : 'Launch of the Meme AI education service.',
                desc : 'The launch of the Meme AI education service will provide an opportunity for users to learn and study with their Meme AIs. This service will be available through the AIM special portal, where users can access a variety of educational content, including courses, tutorials, and interactive lessons'

            }

        ],
        q6 : [
            {
                heading : 'Release of the Meme AI personal assistant service.',
                desc : 'The release of the Meme AI personal assistant service marks the launch of a new feature that will be integrated into the AIM ecosystem. With this service, users will be able to rely on their Meme AIs to provide them with assistance in their daily tasks and routines.'

            }

        ],

        q7 : [
            {
                heading : 'Introduction of Meme AI language translation service.',
                desc : 'The introduction of Meme AI language translation service is a significant milestone for the AIM project, as it will allow users to communicate with people who speak different languages. This service will leverage the natural language processing capabilities of Meme AIs to provide accurate and real-time translations of spoken or written language.'

            },
            {
                heading : 'Release of the Meme AI arcade game.',
                desc : `The Release of the Meme AI arcade game is a step in the AIM coin project's development that involves launching an arcade game that users can play with their Meme AIs. This game will be designed to be interactive, engaging, and fun for users of all ages.`

            },

        ],
        q8 : [
            {
                heading : 'Release of the Meme AI strategic game.',
                desc : 'The Meme AI strategic game is a multiplayer game where users can battle their Meme AIs against each other in a virtual arena. Each player will have their own unique Meme AI with its own set of abilities and characteristics.'

            },
            {
                heading : 'Interactive holographic reality for Meme AIs.',
                desc : 'The development of an interactive holographic reality for Meme AIs is a major milestone in the AIM Coin project. This technology will allow users to engage with their Meme AIs in a more immersive and realistic manner. Instead of simply communicating with their Meme AIs through a mobile device or computer.'

            },

        ],
        
        
        q9 : [
            {
                heading : 'Launch of Meme AI mental health service.',
                desc : 'The launch of the Meme AI mental health service is a significant step for the AIM project, as it will offer users the ability to receive support and guidance from their Meme AIs for mental health issues. This service will provide users with a unique and interactive way to manage their mental health, allowing them to receive guidance, support, and companionship from their Meme AIs.'

            }

        ],
        q10 : [
            {
                heading : 'Development of Meme AI physical health service.',
                desc : 'The development of the Meme AI physical health service aims to provide users with personalized health recommendations through their Meme AIs. This service will be designed to provide users with accurate and reliable health information, customized to their individual needs and preferences'

            }

        ],
        q11 : [
            {
                heading : 'Introduction of Meme AI financial planning service.',
                desc : 'The introduction of the Meme AI financial planning service will allow users to receive personalized financial advice and planning from their Meme AIs. With this service, users will be able to access a range of financial tools and resources that will help them manage their money and plan for the future.'

            }

        ],
        q12 : [
            {
                heading : 'Development of the Meme AI SDK.',
                desc : 'The development of the Meme AI SDK (Software Development Kit) will enable developers to create and integrate their own Meme AIs into the AIM ecosystem. This will expand the  AIM project beyond the initial offerings, as developers will be able to create unique Meme AIs with specific characteristics and functionalities.'

            }

        ]
    }
    return (
        <>
            <section className="home-section-seven"  id="roadmap">
                <div className='bg-overlay' onClick={() => setTab('')}>

                </div>
                <h2 >Roadmap</h2>
                <div className="wrap" style={{ textAlign: 'center' }}>
                    <div className="snack-wrap" style={{ display: 'inline-block', margin: '30px 0px', position: 'relative' }}>
                        <img src="/assets/images/snack.png" alt="" width={'85%'} />
                        <div className="q2">
                            
                            {tab === 'q4' ? '' : 
                            <>
                            <div className='count' onClick={() =>{setTab('q2')}}> Q2</div>
                            <p className="p1">2023</p>
                            </>
                            } 
                            {tab === 'q2' ? <CardOne content={data.q2} style={{bottom : '-300px' , left : '60px'}}/> : ''}
                        </div>


                        <div className="q3" onClick={() =>{setTab('q3')}}> 

                        {tab === 'q4' || tab === 'q5' || tab === 'q6' || tab === 'q12'  ? '' : 
                            <>
                            <div className='count'> Q3</div>
                            </>
                            } 

                            {tab === 'q3' ? <CardOne content={data.q3} style={{bottom : '-300px' , left : '70px'}}/> : ''}
                        </div>


                        <div className="q4" onClick={() =>{setTab('q4')}}> 
                        { tab === 'q5' || tab === 'q8' || tab === 'q6' || tab === 'q7' || tab === 'q12' || tab === 'q11' || tab === 'q10'   ? '' : 
                            <>
                             <div className='count'> Q4</div>
                            </>
                            } 
                           
                            {tab === 'q4' ? <CardOne content={data.q4} style={{bottom : '-290px' , left : '-345px'}}/> : ''}
                        </div>



                        <div className="q5" onClick={() =>{setTab('q5')}}> 
                        {  tab === 'q8' || tab === 'q7' || tab === 'q11' || tab === 'q9' || tab === 'q10'  ? '' : 
                            <>
                              <div className='count'> Q1</div>
                            <p className="p1">2024</p>
                            </>
                            } 
                           
                            {tab === 'q5' ? <CardOne content={data.q5} style={{bottom : '-210px' , left : '-344px'}}/> : ''}
                        </div>



                        <div className="q6" onClick={() =>{setTab('q6')}}> 
                        {  tab === 'q8' || tab === 'q12' || tab === 'q11' || tab === 'q9' || tab === 'q10'  ? '' : 
                            <>
                               <div className='count'> Q2</div>
                            </>
                            } 
                           
                            {tab === 'q6' ? <CardOne content={data.q6} style={{bottom : '-205px' , left : '-345px'}}/> : ''}
                        </div>



                        <div className="q7" onClick={() =>{setTab('q7')}}> 
                        {  tab === 'q8' || tab === 'q6' || tab === 'q12' || tab === 'q11' || tab === 'q10'  ? '' : 
                            <>
                               <div className='count'> Q3</div>
                            </>
                            } 
                            
                            {tab === 'q7' ? <CardOne content={data.q7} style={{bottom : '-205px' , left : '70px'}}/> : ''}
                        </div>



                        <div className="q8" onClick={() =>{setTab('q8')}}> 
                        { tab === 'q12'   ? '' : 
                            <>
                               <div className='count'> Q4</div>
                            </>
                            } 
                            
                            {tab === 'q8' ? <CardOne content={data.q8} style={{bottom : '-45px' , left : '70px'}}/> : ''}
                        </div>


                        
                        <div className="q9" onClick={() =>{setTab('q9')}}> 
                        { tab === 'q12' || tab === 'q11'  ? '' : 
                            <>
                                <div className='count'> Q1</div>
                            <p className="p1">2025</p>
                            </>
                            } 
                           
                            {tab === 'q9' ? <CardOne content={data.q9} style={{bottom : '-8px' , left : '75px'}}/> : ''}
                        </div>



                        <div className="q10" onClick={() =>{setTab('q10')}}>
                        {  tab === 'q11' || tab === 'q9'   ? '' : 
                            <>
                                <div className='count'> Q2</div>
                            </>
                            } 
                            
                            {tab === 'q10' ? <CardOne content={data.q10} style={{bottom : '-20px' , left : '-300px'}}/> : ''}
                        </div>



                        <div className="q11" onClick={() =>{setTab('q11')}}>
                            <div className='count'> Q3</div>
                            {tab === 'q11' ? <CardOne content={data.q11} style={{bottom : '75px' , left : '-90px'}}/> : ''}
                        </div>



                        <div className="q12" onClick={() =>{setTab('q12')}}>
                            <div className='count'> Q4</div>
                            {tab === 'q12' ? <CardOne content={data.q12} style={{bottom : '70px' , left : '-110px'}}/> : ''}
                        </div>
                    </div>
                </div>
            </section>
       
        </>
    )
}

export default Snack