import './fruit.css'
import strow from '../secImgs/sberry-fruit.png'
import grap from '../secImgs/grap-fruit.png'
import man from '../secImgs/h2-org-pns.png'
import mint from '../secImgs/Mint-leaves-Img.png'
import wm from '../secImgs/melon-with-leef.png'
import ice from '../secImgs/cub.png'
import orn from '../secImgs/h2-org-pn.png'
import jar from '../secImgs/Jar.png'
const Fruit = () => { 
  return (
    <>
    
      <div className='item-1 d-none d-xl-block'>
        <img className='strow' src={strow} alt='strow'/>
      </div>
      <div className='item-2 d-none d-xl-block'>
      <img className='grap' src={grap} alt='grap'/>
      </div>
      <div className='item-3 d-none d-xl-block'>
        <img className='man' src={man} alt='man'/>
      </div>
      <div className='item-4 d-none d-xl-block'>
      <img className='mint' src={mint} alt='mint'/>
      </div>
      <div className='item-5 d-none d-xl-block'>
      <img className='mint' src={mint} alt='mint'/>
      </div>
      <div className='item-6 d-none d-xl-block'>
        <img className='strow' src={strow} alt='strow'/>
      </div>
      <div className='item-7 d-none d-xl-block'>
        <img className='wm' src={wm} alt='wm'/>
      </div>
      <div className='item-8 d-none d-xl-block'>
        <img className='ice' src={ice} alt='ice'/>
      </div>
      <div className='item-9 d-none d-xl-block'>
        <img className='orn' src={orn} alt='orn'/>
      </div>
      <div className='item-10 d-none d-xl-block'>
        <img className='jar' src={jar} alt='jar'/>
      </div>
      
      </>
  );
}

export default Fruit;