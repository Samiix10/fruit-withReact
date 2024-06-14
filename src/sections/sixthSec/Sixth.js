import "./Sixth.css"
import over from "./sixthphotos/orange.png"
import { firstData , secondData } from "./sixthComponats/sixthData";
import Itemes from "./sixthComponats/sixthComponant";
const Sixth = () => { 
  return (
    <div className="sixth-sec">
      <div className="container-fluid">
        <div className="sixthHeader pb-5">
          <div className="over1">
            <img src={over} alt="orange" />
          </div>
          <div className="heading text-center">
            <h2>Flavor Rich Menus</h2>
          </div>
        </div>
        <div className="sixth-content">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5  ps-lg-5">
              <div className="sixthItemsContainer">
                <Itemes Data={firstData} />
              </div>
            </div>
            <div className="col-1 d-none d-lg-block">
              <div className="line"></div>
            </div>
            <div className="col-12 col-lg-5 pe-lg-5">
              <div className="sixthItemsContainer">
                <Itemes Data={secondData} />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="sixthFooter ">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>
    </div>
  );
}

export default Sixth;