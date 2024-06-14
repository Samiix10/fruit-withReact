import "./secondhed.css";

const SecondContant = () => {
  return (
    <>
      <div className="Second-Content">
        <div className="secondhed">
          <div className="boxHead text-center">
            <h1 className="Hfirst bounceIn animated">Delicious</h1>
            <h1 className="seco tada animated">Smoothies</h1>
          </div>
          <span className="text-wrap text-center d-block mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore impedit a voluptatem minima amet reprehenderit beatae eligendi cupiditate dolor!</span>
        </div>
        <div className="SecondBox mt-1 pt-1 w-75 mx-auto row">
          <div className="firstList col-10 col-md-8  col-lg-6 mx-auto mx-lg-0">
            <div className="fisrtUl">
              <ul className="text-start">
                <li>Enhanced Immunity</li>
                <li>Maintanins Blood Pressure</li>
                <li>Reduce Inflammation</li>
              </ul>
            </div>
          </div>
          <div className="secondList col-10  col-md-8 col-lg-6 mx-auto mx-lg-0">
            <div className="secUl ">
              <ul className="text-start">
                <li>Enhance Your Eyesight</li>
                <li>Reduces the risk of diabetes</li>
                <li>Reduces Sugar Risks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shopBtn  text-center mt-5 bounceInUp animated">
          <button className="Btnshop">shop juices</button>
        </div>
      </div>
    </>
  );
};

export default SecondContant;