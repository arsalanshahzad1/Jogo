import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardOne = ({ style , content }) => {
    console.log(content);
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
    console.log(style);
    return (
        <div className="detail-box" style={{ bottom: style.bottom, left: style.left }}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {content.map((data , index) =>{
                    return(
                        <div className='content'>
                    <h2>{data.heading}</h2>
                    <p>{data.desc}</p>
                </div>
                    )
                })}
                {/* <div>
                    <h2>Lauch of the Myme coin</h2>
                    <p>
                    The Q2 launch of the AI Meme Coin project with pre-selling of 
                    AIM tokens through a 5-stage process is the first major milestone 
                    in the development of the AIM ecosystem.
                    </p>
                </div> */}
            </Carousel>;
        </div>
    )
}

export default CardOne