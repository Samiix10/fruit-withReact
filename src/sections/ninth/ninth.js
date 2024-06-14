import "./ninth.css";
import ImgData from "./ninthData/ninthdata";
import { SwapContent } from "./ninthcomp/ninthcomp_1";
import { Swiper, SwiperSlide } from "swiper/react";

const Ninth = () => {
  return (
    <>
      <div className="ninth">
        <div className="container-fluid p-0">
          <div className="ninthContent ">
            <Swiper
              // spaceBetween={0}
              // slidesPerView={6}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                  loop: true,
                  loopAddBlankSlides: false,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  centeredSlides: false,
                  loop: true,
                  loopAddBlankSlides: false,
                },
                630: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                  loop: true,
                  loopAddBlankSlides: false,
                },
                970: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                  loop: true,
                  loopAddBlankSlides: false,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 0,
                  loop: false,
                },
              }}
            >
              {ImgData.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <SwapContent
                      item={item}
                      z={i + 2}
                      r={i % 2 === 0 ? "rotate(15deg)" : "rotate(-15deg)"}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="ninthHeading">
              <div className="ninthHeadOvar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ninth;
