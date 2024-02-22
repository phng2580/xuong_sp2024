import instance from "../apis";
import showToast from "../utils/toastMessage";

const getProduct = (productId) => instance.get(`/products/${productId}`);

const fillFormWithProductData = (productData) => {
    const { title, price, image, description } = productData;
    document.getElementById("nameProduct").value = title;
    document.getElementById("price").value = price;
    document.getElementById("images").value = image;
    document.getElementById("description").value = description;
};

const updateProduct = (productId, editedData) => {
    instance.put(`/products/${productId}`, editedData)
        .then(({ data }) => {
            showToast(`Sản phẩm ${data.title} đã được cập nhật thành công`, 5000, "success");
            window.location.href = "/admin";
        })
        .catch(error => {
            console.error("Lỗi khi chỉnh sửa sản phẩm:", error.message);
            showToast("error", "Đã xảy ra lỗi khi chỉnh sửa sản phẩm");
        });
};

const editProduct = (productId) => {
    getProduct(productId)
        .then(({ data }) => {
            fillFormWithProductData(data);
            
            const saveBtn = document.getElementById("edit");
            saveBtn.addEventListener("click", () => {
                const editedData = {
                    title: document.getElementById("nameProduct").value,
                    price: document.getElementById("price").value,
                    image: document.getElementById("images").value,
                    description: document.getElementById("description").value
                };
                updateProduct(productId, editedData);
            });
        })
        .catch(error => {
            console.error("Lỗi khi lấy thông tin sản phẩm:", error.message);
            showToast("error", "Đã xảy ra lỗi khi lấy thông tin sản phẩm");
        });
};

const handleEditProductForm = (productId) => editProduct(productId);

export default handleEditProductForm;
