import './Fourth.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ComponentsData from './componantData';
import fruit from './fourthComp/firstcomp/firstData';
import Health from './fourthComp/thirdcomp/Healthy';
import Smothe from './fourthComp/seccomp/Smoothies';
import Ice from './fourthComp/foucomp/ice';


const Fourth = () => { 
  return (
    <section className="fourth">
      <div className="container-xxl p-0">
        <div className="FourthHead py-3 py-lg-0">
          <h2>Fruit & Yogurt Smoothies</h2>
        </div>
        <div className="FourthContent py-lg-5">
        <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Fruit Juice">
        <ComponentsData Data={fruit} name="fruit">
          </ComponentsData>
      </Tab>
      <Tab eventKey="smoothies" title="Smoothies">
        <ComponentsData Data={Smothe} name="Smothies" nm="7">
          </ComponentsData>
      </Tab>
      <Tab eventKey="healthy" title="Healthy Drink" >
        <ComponentsData Data={Health} name="Health" nm="14">
          </ComponentsData>
      </Tab>
      <Tab eventKey="ice" title="Ice Creams Shakes"  >
        <ComponentsData Data={Ice} name="Ice" nm="21">
          </ComponentsData>
      </Tab>
      <Tab eventKey="moktails" title="Mocktails" >
        <ComponentsData Data={fruit} name="fruit" nm="27">
          </ComponentsData>
      </Tab>
    </Tabs>
          
        </div>
        <div className="fourthFooter text-center pb-5">
          <span className="ShopAll">
            Shop All Juices
          </span>
        </div>
    </div>
    </section>
  );
}

export default Fourth;