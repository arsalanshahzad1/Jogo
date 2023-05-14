import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PieChart from '../components/common/PieChart';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Team = () => {
  return (
    <>
         <section className="home-section-six" id='team'>
        <div className="row">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
          >
            
              <div className="last-sec-wrap">
                <img src="/assets/images/section-last/last-1.png" alt="" />
                <p>APE</p>
              </div>
          
            
              <div className="last-sec-wrap">
                <img src="/assets/images/section-last/last-2.png" alt="" />
                <p>BIG EYE</p>
              </div>
            
            
              <div className="last-sec-wrap">
                <img src="/assets/images/section-last/last-3.png" alt="" />
                <p>ELON</p>
              </div>
          
            
              <div className="last-sec-wrap">
                <img src="/assets/images/section-last/last-4.png" alt="" width={'65%'}/>
                <p>PEPE</p>
              </div>
          
          </Carousel>

        </div>
        </section>
    </>
  )
}
export default Team;
