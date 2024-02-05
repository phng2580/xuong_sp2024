import instance from "../apis";

const handleProductList = () => {
  const productList = document.getElementById("productList");
  callAPI(productList);
};

function callAPI(nodeElement) {
  instance.get("/products").then(({ data }) => {
    console.log(data);
    const contentHTML = data
      .map(
        (item) => `
        <div class="cardItem">
        <div class="cardItem-new">new</div>
        <div class="cardItem-img">
        <a href="detail/${item.id}"> <img src="${item.image}" alt="${item.title}" /></a>
            </div>

           <div class="cardItem-info">
              <p>${item.title}</p>
              <p>${item.price}đ</p>
             
              <div class="btn-order">ĐẶT HÀNG</div>
            </div>
          </div>
          `
      )
      .join("");

    nodeElement.innerHTML = contentHTML;
  });
}

export default handleProductList;

{/* <p>Mô tả: ${item.description}</p> */}