import "./swip.css";
import IMG1 from "./swipImgs/Avacoda.png";
import IMG2 from "./swipImgs/Graps.png";
import IMG3 from "./swipImgs/balckberry.png";
import IMG4 from "./swipImgs/banana.png";
import IMG5 from "./swipImgs/coconet.png";
import IMG6 from "./swipImgs/icedLatte.png";
import IMG7 from "./swipImgs/straw.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Datas = [
  {
    img: IMG1,
    title: "Avacoda",
    text: "14+ Variaties",
    id: 1,
    color: "#ff679a",
  },
  {
    img: IMG2,
    title: "Grapes",
    text: "25+ Variaties",
    id: 2,
    color: "#87a143",
  },
  {
    img: IMG3,
    title: "Blackberry",
    text: "38+ Variaties",
    id: 3,
    color: "#fe8f00",
  },
  {
    img: IMG4,
    title: "Banana",
    text: "25+ Variaties",
    id: 4,
    color: "#87a143",
  },
  {
    img: IMG5,
    title: "Coconet",
    text: "52+ Variaties",
    id: 5,
    color: "#fe8f00",
  },
  {
    img: IMG6,
    title: "Iced Latte",
    text: "30+ Variaties",
    id: 6,
    color: "#3d3d3d",
  },
  {
    img: IMG7,
    title: "Strawberry",
    text: "42+ Variaties",
    id: 7,
    color: "#ff679a",
  },
];

const Swip = () => {
  const Sliders = [...Datas];
  return (
    <>
      <Swiper
        speed={1000}
        rewind={true}
        grabCursor={true}
        breakpoints= {{
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 10
          },
          630: {
      slidesPerView: 2.5,
      spaceBetween: 10
          },
    970: {
      slidesPerView: 3.5,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 20
    }}
  }
      >
        {Sliders.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="SlideBox">
              <div className="SlideImg" style={{ color: item.color }}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="text-wrap text-center">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div class="swiper">
      <div class="swiper-wrapper">
        {Sliders.map(
          (item) => (
            <div class="swiper-slide" key={item.id}>
              <div className="SlideBox">
                <div className="SlideImg" style={{ color: item.color}}>
                  <img src={item.img} alt={item.title} />
                </div>
              <div class="text-wrap text-center">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              </div>
            </div>
          )
        )}
      </div>
    </div> */}
    </>
  );
};

export default Swip;
