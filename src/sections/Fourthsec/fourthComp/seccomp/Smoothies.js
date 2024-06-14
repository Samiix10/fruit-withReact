import Grap1 from "../../fourthImg/smoothImg/Grape-juice-1.jpg"
import Grap2 from "../../fourthImg/smoothImg/Grape-juice-2.jpg"
import Pink1 from "../../fourthImg/smoothImg/Pink-Grape-1.jpg"
import Pink2 from "../../fourthImg/smoothImg/Pink-Grape-2.jpg"
import Pistach1 from "../../fourthImg/smoothImg/Pistach-1.jpg"
import Pistach2 from "../../fourthImg/smoothImg/Pistach-2.jpg" 
import Orang1 from "../../fourthImg/smoothImg/Orange-ice-1.jpg"
import Orang2 from "../../fourthImg/smoothImg/Orange-ice-2.jpg"
import Tomato1 from "../../fourthImg/smoothImg/Tomato-1.jpg"
import Tomato2 from "../../fourthImg/smoothImg/Tomato-2.jpg"
import Milk1 from  "../../fourthImg/smoothImg/Milkshake-5-01.jpg"
import Malik2 from "../../fourthImg/smoothImg/Milkshake-5-02.jpg"
import Prudact from "../Fourthoop"

const Grap = new Prudact(Grap1, Grap2, "Grape Juice", 12.80)
const Pink = new Prudact(Pink1, Pink2, "Pink Grapefruit Lemonade", 11.70)
const Pistach = new Prudact(Pistach1, Pistach2, "Pistachio Ice Cream", 12.50, true)
const Orang = new Prudact( Orang2, Orang1, "Orange Melty Ice Cream", 12.85, true)
const Tomato = new Prudact(Tomato1, Tomato2, "Healthy Tomato Cold Drink", 11.45)
const Milk = new Prudact(Milk1, Malik2, "Mango Milkshake", 12.35, true)

const Smothe = [Grap, Pink, Pistach, Orang, Tomato, Milk]

export default Smothe;



