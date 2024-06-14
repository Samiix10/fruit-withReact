import './ThirdMain.css'
import THirdLogo from './thirdImg/garps-img-01.png'
import Wat from './thirdImg/melon-img-01.png'
import orn from './thirdImg/orange-tree-01.png'
import Swip from './thirdcomp/swipe/swipe'
import fot from './thirdImg/wave.svg'

const Third = () => { 
  return (
    <>
      <section className="ThirdMain">
        <div className="container-fluid px-0">
          <div className="thirdHead text-center">
            <div className="thirdLogo mx-auto">
              <img src={THirdLogo} alt="grap" />
            </div>
            <h2>Favorite Flavors</h2>
            <img src={Wat} alt="watermelon" className="WaterM" />
            <img src={orn} alt="orn" className="Orn" />
          </div>
          <div className="THirdContent px-0">
            <Swip></Swip>
          </div>
          <div className="ThirdFooter">
            <img src={fot} alt="fot" className="Fot" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Third;