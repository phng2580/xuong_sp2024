import { checkAdmin } from "../utils/checkPermission";
import instance from "../apis";
import showToast from "../utils/toastMessage";

const addProduct = ()=> {
  try {
    const title = document.getElementById("nameProduct").value;
    const price = document.getElementById("price").value;
    const images = document.getElementById("images").value;
    const description = document.getElementById("description").value;


    console.log( title);

    // Kiểm tra nếu các trường bắt buộc chưa được điền
    // if (!title || !price || !images || !description) {
    //   showToast("warning", "Vui lòng điền đầy đủ thông tin sản phẩm");
    //   return;
    // }

    // Tạo đối tượng dữ liệu để gửi lên server
    const data = {
      title,
      price,
      images,
      description
    };

    // Thực hiện yêu cầu POST để thêm sản phẩm
         instance
         .post("/products", data)
         .then(({data}) =>{
            showToast(`Thêm sản phẩm thành công ${data.title.price.images.description}`, 5000, "success");
            window.location.href = "/admin";
         })
         ;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi thêm sản phẩm:", error.message);
    showToast("error", "Đã xảy ra lỗi khi thêm sản phẩm");
  }
};

const handleProductForm = () => {
  const saveBtn = document.getElementById("save");
  saveBtn.addEventListener("click", (addProduct));
};

export default handleProductForm;
