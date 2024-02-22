import instance from "../apis";
import { router } from "../utils";
import showToast from "../utils/toastMessage";
const saveProduct = async () => {
    try {
      // Lấy dữ liệu từ các trường nhập trong form
      const nameProduct = document.getElementById("nameProduct").value;
      const price = document.getElementById("price").value;
      const images = document.getElementById("images").value;
      const description = document.getElementById("description").value;
  
      // Kiểm tra nếu các trường bắt buộc chưa được điền
      if (!nameProduct || !price || !images || !description) {
        showToast("warning", "Vui lòng điền đầy đủ thông tin sản phẩm");
        return false;
      }
  else{
      // Tạo đối tượng dữ liệu để gửi lên server
      const data = {
        title: nameProduct,
        price: price,
        images: images,
        description: description
      };
  
      // Thực hiện yêu cầu POST để thêm sản phẩm
      const response = await instance.post("/admin/add", data);
  
      // Kiểm tra mã trạng thái của yêu cầu
      if (response.status === 201) {
        // Hiển thị thông báo thành công
        showToast("success", "Thêm sản phẩm thành công");
  
        // (Tùy chọn) Clear các trường nhập trong form sau khi thêm sản phẩm thành công
        document.getElementById("nameProduct").value = "";
        document.getElementById("price").value = "";
        document.getElementById("images").value = "";
        document.getElementById("description").value = "";
  
        // (Tùy chọn) Chuyển hướng về trang danh sách sản phẩm
        window.location.href = "/admin";
      } else {
        console.error("Lỗi khi thêm sản phẩm. Mã lỗi:", response.status);
        showToast("error", "Thêm sản phẩm thất bại");
      }}
    } catch (error) {
      console.error("Lỗi khi thực hiện yêu cầu:", error);
      showToast("error", "Thêm sản phẩm thất bại");
    }
  };
  
  // Gọi hàm xử lý khi người dùng nhấn nút "Lưu lại"
  document.getElementById("save").addEventListener("click", saveProduct);
  