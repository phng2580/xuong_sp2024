import Header from "../components/Header";
import Footer from "../components/footer";
const DetailPage = (data) => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <div id="productDetail"></div>
  <div>
  ${Footer()}
  `;
};

export default DetailPage;
