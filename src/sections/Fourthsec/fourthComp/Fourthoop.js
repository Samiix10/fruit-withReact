class Prudact  {
  constructor(img1, img2, title, price , sale) {
    this.img1 = img1;
    this.img2 = img2;
    this.name = title;
    this.price = price;
    this.sale = sale || false;
  }
  Sale() {
    if (this.sale === true) {
      return this.price * 0.2;
    } else {
      return this.price;
    }
  }
}

export default Prudact;

