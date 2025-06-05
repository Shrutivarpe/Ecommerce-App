import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// Image imports
import img1 from "../assets/images/sponsor/01.png";
import img2 from "../assets/images/sponsor/02.png";
import img3 from "../assets/images/sponsor/03.png";
import img4 from "../assets/images/sponsor/04.png";
import img5 from "../assets/images/sponsor/05.png";
import img6 from "../assets/images/sponsor/06.png";

const sponsorList = [img1, img2, img3, img4, img5, img6];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {sponsorList.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-item">
                    <div className="sponsor-thumb">
                      <img src={img} alt={`Sponsor ${i + 1}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
