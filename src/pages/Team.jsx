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
    items: 3,
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
              <div className="col-lg-4">
            <div className="last-sec-wrap">
              <img src="/assets/images/section-last/last-1.png" alt="" />
              <p>APE</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="last-sec-wrap">
              <img src="/assets/images/section-last/last-2.png" alt="" />
              <p>BIG EYE</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="last-sec-wrap">
              <img src="/assets/images/section-last/last-3.png" alt="" />
              <p>ELON</p>
            </div>
          </div>
            </Carousel>;
          
        </div>
      </section>
      <PieChart/>
    </>
  )
}
export default Team;
