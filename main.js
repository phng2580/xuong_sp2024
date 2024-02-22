import "./src/styles/style.css";
import "./src/styles/toast.css";
import "./src/styles/home.css";
import"./src/styles/admin.css";
import"./src/styles/header.css";
import"./src/styles/login.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import SignUpPage from "./src/pages/SignUpPage";
import handleRegister from "./src/components/handleRegister";
import SignInPage from "./src/pages/SignInPage";
import handleLogin from "./src/components/handleLogin";
import { render, router } from "./src/utils";
import Dashboard from "./src/pages/admin/Dashboard";
import DetailPage from "./src/pages/DetailPage";
import handleAdmin from "./src/components/handleAdmin";
import handleProductList from "./src/components/handleProductList";
import handleProductForm from "./src/components/handleProductForm";
import handleProductDetail from "./src/components/handleProductDetail";
import showToast from "./src/utils/toastMessage";
import ProductForm from "./src/pages/admin/ProductForm";
import CartPage from "./src/pages/CartPage";
import handleCart from "./src/components/handleCart";
import editProduct from "./src/pages/admin/editProduct";
import { checkAdmin } from "./src/utils/checkPermission";
import handleEditProductForm from "./src/components/handleEditProduct";
const app = document.getElementById("app");

router.on(
  "/admin",
  () => {
    if (checkAdmin()) {
      render(app, Dashboard);
    } else {
      window.location.href = "/";
    }
  },
  {
    after() {
      handleAdmin();
    },
  }
);

router.on(
  "/admin/add",
  () => {
    if (checkAdmin()) {
      // Render ProductForm
      render(app, ProductForm);
    } else {
      window.location.href = "/";
    }
  },
  {
    after() {
      // Thực hiện sau khi render xong
      handleProductForm();
    },
  }
);
router.on(
  "/admin/add/:id",
  () => {
    if (checkAdmin()) {
      render(app, editProduct);
    } else {
      window.location.href = "/";
    }
  },
  {
    after: (data) => { // Sử dụng callback after để chạy khi route kết thúc
      const productId = data.data.id; // Lấy id từ dynamic route parameters
      console.log(productId); // In ra id để kiểm tra
      // Tiếp tục xử lý tại đây nếu cần
      console.log(data)
      if (productId) {
        handleEditProductForm(productId); 
      }
    },
  }
);

router.on("/cart", () => render(app, CartPage), {
  after() {
    handleCart();
  },
});
router.on("/logout", () => {
  sessionStorage.removeItem("user");
  showToast("Logout successfully", 5000);
  setTimeout(() => {
    router.navigate("/");
  }, 3000);
});

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});
router.on("/about", () => render(app, AboutPage));
router.on("/register", () => render(app, SignUpPage), {
  after() {
    handleRegister();
  },
});
router.on("/login", () => render(app, SignInPage), {
  after() {
    handleLogin();
  },
});
router.on("/detail/:id", () => render(app, DetailPage), {
  after({ data }) {
    handleProductDetail(data);
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
