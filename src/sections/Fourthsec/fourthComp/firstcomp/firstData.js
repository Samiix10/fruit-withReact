import panana1 from "../../fourthImg/fruitimg/panana1.jpg"
import panana2 from "../../fourthImg/fruitimg/panana2.jpg"
import freshMango1 from "../../fourthImg/fruitimg/Fresh-mango-3-01.jpg"
import freshMango2 from "../../fourthImg/fruitimg/Fresh-mango-3-02.jpg"
import mango1 from "../../fourthImg/fruitimg/mango-fresh-1.jpg"
import mango2 from "../../fourthImg/fruitimg/mango-fresh-2.jpg"
import kiwi1 from "../../fourthImg/fruitimg/kiwi-ment-1.jpg"
import kiwi2 from "../../fourthImg/fruitimg/kiwi-ment-2.jpg"
import boba1 from "../../fourthImg/fruitimg/boba1.jpg"
import boba2 from "../../fourthImg/fruitimg/boba2.jpg"
import freshGreen from "../../fourthImg/fruitimg/fresh-green-1.jpg"
import freshGreen2 from "../../fourthImg/fruitimg/fresh-green-2.jpg"
import Prudact from "../Fourthoop"

const panna = new Prudact(panana1, panana2, "Banana Juice", 12.65)
const mango = new Prudact(mango1, mango2, "Alphonso Mango Juice", 15.69)
const freshMango = new Prudact(freshMango1, freshMango2, "Fresh Mango Juice", 11.80)
const kiwi = new Prudact(kiwi1, kiwi2, "Kiwi And Mint Juice", 12.90)
const boba = new Prudact(boba1, boba2, "Milk And Cream Fruit Boba", 13.60, true)
const Green = new Prudact(freshGreen, freshGreen2, "Fresh Green Juice", 14.90)
const fruit = [panna, mango, freshMango, kiwi, boba, Green]

export default fruit;