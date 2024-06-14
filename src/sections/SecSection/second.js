import './second.css'
import Fruit from './secComp/fruit'
import SecondContant from './secComp/secondhed';
import WevS from "./secImgs/wave.svg"
const Sec = () => {
  return (
    <>
    <div className="sec-two container-fluid p-0">
      <div className="overlay"></div>
      <Fruit></Fruit>
      <SecondContant></SecondContant>
      <div className="SvgWave">
        <img src={WevS} alt="wevs" />
      </div>
      </div>
    </>
  );
}

export default Sec;