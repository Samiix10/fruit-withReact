import Pink1 from "../../fourthImg/iceimg/Pink-Grape-1.jpg";
import Pink2 from "../../fourthImg/iceimg/Pink-Grape-2.jpg";
import Or1 from "../../fourthImg/iceimg/Orang-lemon1.jpg";
import Or2 from "../../fourthImg/iceimg/Orang-lemon2.jpg";
import Pis1 from "../../fourthImg/iceimg/Pistach-1.jpg";
import Pis2 from "../../fourthImg/iceimg/Pistach-2.jpg";
import Orice1 from "../../fourthImg/iceimg/Orange-ice-1.jpg";
import Orice2 from "../../fourthImg/iceimg/Orange-ice-2.jpg";
import coc1 from "../../fourthImg/iceimg/cocl1.jpg";
import coc2 from "../../fourthImg/iceimg/cocl2.jpg";
import to1 from "../../fourthImg/iceimg/Tomato-1.jpg";
import to2 from "../../fourthImg/iceimg/Tomato-2.jpg";
import Prudact from "../Fourthoop";

const Ice = [
  new Prudact(Pink1, Pink2, "Pink Grapefruit Lemonade",11.70),
  new Prudact( Or1, Or2,"Orange Lemonade", 11.65),
  new Prudact(Pis1, Pis2,"Pistachio Ice Cream",  12.50,true),
  new Prudact( Orice2, Orice1,"Orange Melty Ice Cream", 12.85,true),
  new Prudact(coc1, coc2,"Chocolate Cookies & Cream",  13.35,true),
  new Prudact(to1, to2,"Healthy Tomato Cold Drink",  11.45),
]

export default Ice;