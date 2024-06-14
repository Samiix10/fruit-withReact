import "./eight.css";
import Grap from "./eightImg/garps-img-01.png";
import Strw from "./eightImg/sberry.png";
import Lem from "./eightImg/lm-img.png";
import Data from "./eigthComponats/eughtData";
import SwipData from "./eigthComponats/eightComponats";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Eight = () => {
  return (
    <>
      <div className="eight">
        <div className="container-xxl">
          <div className="eightContent">
            <div className="eightSwip">
              <Swiper
                modules={[EffectFade, Pagination]}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                pagination={{
                  clickable: true,
                  enabled: true,
                }}
              >
                <SwiperSlide>
                  <SwipData item={Data["0"]}></SwipData>
                </SwiperSlide>
                <SwiperSlide>
                  <SwipData item={Data["1"]}></SwipData>
                </SwiperSlide>
                <SwiperSlide>
                  <SwipData item={Data["2"]}></SwipData>
                </SwiperSlide>
                <SwiperSlide>
                  <SwipData item={Data["3"]}></SwipData>
                </SwiperSlide>
              </Swiper>
              <div className="EathOverLay d-none d-lg-block">
                <img src={Grap} alt="garp" />
              </div>
            </div>
            <div className="TestOverLap text-centar d-flex flex-column flex-lg-row">
              <h2 className="text-center">Testimonials</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  xmlSpace="preserve"
                >
                  {" "}
                  <path d="M25.1,79.4c7.3,0,12.6-2,15.8-6c3.1-4,4.6-9,4.6-15.2c0-3.6-0.8-7.8-2.4-12.6c-1.7-4.9-4.4-9.6-8-14.2 c-3.6-4.7-8.1-8.3-13.6-11L3.9,30.8c3.1,1.3,6,2.9,9,4.6c2.9,1.7,5.1,3.8,6.6,6.2h-1c-2.4,0-4.9,0.6-7.4,1.8 c-2.7,1.2-4.9,3.1-6.6,5.6c-1.9,2.4-2.8,5.6-2.8,9.6c0,2.8,0.8,5.9,2.4,9.2c1.5,3.2,3.9,6,7.4,8.4C14.8,78.3,19.4,79.4,25.1,79.4z  M77.9,79.4c7.3,0,12.6-2,15.8-6c3.1-4,4.6-9,4.6-15.2c0-3.6-0.8-7.8-2.4-12.6c-1.7-4.9-4.4-9.6-8-14.2c-3.6-4.7-8.1-8.3-13.6-11 L56.8,30.8c3.1,1.3,6,2.9,9,4.6c2.9,1.7,5.1,3.8,6.6,6.2h-1c-2.4,0-4.9,0.6-7.4,1.8c-2.7,1.2-4.9,3.1-6.6,5.6 c-1.9,2.4-2.8,5.6-2.8,9.6c0,2.8,0.8,5.9,2.4,9.2c1.5,3.2,3.9,6,7.4,8.4C67.7,78.3,72.2,79.4,77.9,79.4z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="STrawOverLab">
          <img src={Strw} alt="straw" />
        </div>
        <div className="LemonOverLab">
          <img src={Lem} alt="lemon" />
        </div>
      </div>
    </>
  );
};

export default Eight;
