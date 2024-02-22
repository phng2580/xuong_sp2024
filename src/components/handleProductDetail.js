import instance from "../apis";

const handleProductDetail = (data) => {
  const id = data.id;
  console.log(id);
  const productDetail = document.getElementById("productDetail");
  if (id) {
    instance
      .get(`/products/${id}`)
      .then(({ data }) => {
        console.log(data);
        productDetail.innerHTML = /*html*/ `
        <div class="product-details-container">
          <div class="product-image-container">
              <img src="${data.image}" alt="${data.title}" class="product-image">
          </div>
          <div class="product-info-container">
              <h1 class="product-title">${data.title}</h1>
              <span class=""><h6>Giá:   ${data.price}VNĐ</h6></span>
              <p class="product-description"><h6>Mô tả:</h6> ${data.description}</p>
              <div class="quantity-add-to-cart-container">
             
                  <div class="quantity-container">
                      <button id="decreaseQty" class="qty-btn">-</button>
                      <span id="quantity">1</span>
                      <button id="increaseQty" class="qty-btn">+</button>
                  </div>
                  <span class="product-price" data-price="${data.price}">${data.price} đ</span>
              </div>
              <button id="addCart" class="btn btn-warning">Thêm vào giỏ hàng</button>
          </div>
        </div>
        `;
        // Lắng nghe sự kiện click trên nút tăng và giảm số lượng
        document.getElementById('increaseQty').addEventListener('click', () => {
          const quantityElement = document.getElementById('quantity');
          const currentQuantity = parseInt(quantityElement.textContent);
          quantityElement.textContent = currentQuantity + 1;
          updateTotalPrice();
        });

        document.getElementById('decreaseQty').addEventListener('click', () => {
          const quantityElement = document.getElementById('quantity');
          const currentQuantity = parseInt(quantityElement.textContent);
          if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
            updateTotalPrice();
          }
        });

        function updateTotalPrice() {
          const quantity = parseInt(document.getElementById('quantity').textContent);
          const pricePerUnit = parseFloat(document.querySelector('.product-price').getAttribute('data-price'));
          const totalPrice = quantity * pricePerUnit;
          const formattedPrice = formatCurrency(totalPrice);
          document.querySelector('.product-price').textContent = formattedPrice;
      }
      
      function formatCurrency(amount) {
          return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      }
      })
      .catch(() => {
        productDetail.innerHTML = /*html*/ `
          <h2>Sản phẩm không tồn tại</h2>
          <a href="/">Quay lại trang chủ</a>
        `;
      });
  }
};

export default handleProductDetail;
