import "./tenth.css";
import img from "./tenthImg/Home-2-Footer-Hotspot-Image.png";
import pia from "./tenthImg/pineapple-img.png"

const Tenth = () => {
  return (
    <div className="tenth">
      <div className="container-fluid">
        <div className="tenthContent ">
          <div className="row">
            <div className="col-11 col-md-9 col-lg-6 col-xl-4 mx-auto mx-lg-0 order-lg-2 p-0">
              <div className="tenthContentBox-head pe-lg-5 text-lg-start text-center">
                <h2>Our Shop Is Open In Eight Nations</h2>
                <p className="pe-lg-6">
                  Mauris vitae lacus nec erat gravida finibus sed non nulla
                  Morbi sagittis dolor a nunc pulvinar tempus Aenean pulvinar
                  mollis purus, vel semper diam convallis in.
                </p>
              </div>
              <div className="tenthContentBox-btn justify-content-center justify-content-lg-start" id="BTNS">
                <span className="more" id="more">
                  find store
                </span>
                <span className="playstore-button">
                  <svg
                    viewBox="0 0 512 512"
                    className="icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="texts">
                    <span className="text-1">GET IT ON</span>
                    <span className="text-2">Google Play</span>
                  </span>
                </span>
                <span className="playstore-button" id="AppleStore">
                  <svg
                    className="icon"
                    width="25px"
                    height="25px"
                    viewBox="-1.5 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>apple [#ffffff]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-102.000000, -7439.000000)"
                          fill="currentColor"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                              id="apple-[#ffffff]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span className="texts">
                    <span className="text-1">GET IT ON</span>
                    <span className="text-2">Apple Store</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-11 col-md-8 col-lg-6 mx-auto px-0 mx-lg-0 pt-2 pt-lg-0 text-lg-end order-lg-1">
              <div className="tenthContentBox-img p-0">
                <img src={img} alt="nations" />
              </div>
            </div>
          <div className=" col-xl-2 order-3 d-none d-xl-flex align-items-center justify-content-center">
            <div className="none-photo">
              <img src={pia} alt="pineapple" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenth;
