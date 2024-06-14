import ulData from "./SIxthOpj";
import strw from "./sixthimg/Home-1-2-Special-Menu-01.jpg"
import WaterMelon from "./sixthimg/water-M.jpg"
import WaterMS from "./sixthimg/Water-M-smo.jpg"
import boba from "./sixthimg/Bobajpg.jpg"
import mango from "./sixthimg/Mangojpg.jpg"
import pinaeaple from "./sixthimg/pinnaplejpg.jpg"
import lemon from "./sixthimg/Lemon.jpg"
import water from "./sixthimg/WaterJuice.jpg"
import coco from "./sixthimg/cocoMilk.jpg"
import cucumber from "./sixthimg/cucamper.jpg"

const firstData = [
  new ulData(strw, "Strawberry Lemonade", "Ac orci phasellus egestas tellus rutrum. Sed turpis tincidunt id aliquet.",10.00),
  new ulData(WaterMelon, "Watermelon Mocktail","Elementum nisi quis eleifend quam. Gravida in fermentum et sollicitudin.", 12.00),
  new ulData(WaterMS, "Watermelon Smoothie", "Risus commodo viverra maecenas accumsan lacus vel.",11.25),
  new ulData(boba, "Boba Juice", "Egestas tellus rutrum tellus pellentesque purus sit amet volutpat.",18.50),
  new ulData(mango, "Mango Juice","Posuere urna nec tincidunt praesent semper feugiat nibh porttitor rhoncus.", 8.35),
]

const secondData = [
  new ulData(pinaeaple, "Pineapple Smoothies", "Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.",13.75),
  new ulData(lemon, "Lemon Juice", "Aliquet risus feugiat in ante metus dictum at tempor commodo.", 16.50),
  new ulData(water, "Watermelon Juice", "Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",15.25),
  new ulData(coco, "Coconut Milkshake", "Vestibulum lectus mauris ultrices eros in cursus turpis massa.", 13.00),
  new ulData(cucumber, "Cucumber Juice", "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.", 16.36),
]

export {firstData, secondData};