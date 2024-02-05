import Header from "../components/Header";
import Footer from "../components/footer";
import Slider from "../components/slider";
const HomePage = () => {
  return /*html*/ `
  ${Header()}
  ${Slider()}
  <div class="container">
  <section id="products">
  <h3 class="title">ToCoToCo Menu</h3>
  <h1 class="title">SẢN PHẨM NỔI BẬT</h1>
  <div class="products-title-img">
    <img src="/images/card_title.webp" class="img-title" alt="" />
  </div>
  <div class="cardList"  id="productList">
    </div>
    <a href="#"><button class="btn-show-more">XEM TẤT CẢ</button></a>
  </section> 
  </div>
  ${Footer()}
  `;
};

export default HomePage;
