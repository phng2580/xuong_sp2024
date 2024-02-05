const Header = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return /*html*/ `
    <a href="tel:+84962013495" class="delivery">
      <img src="/images/delivery.png" alt="" />
    </a>
    <div id="header">
      <section id="nav">
        <a id="header_logo" href="/">
          <img src="/images/logo.png" alt="" />
        </a>
        <div class="header-right">
          <ul class="main-menu" id="header__navbar-modal">
            <li class="center">
              <a href="/" class="navbar__link">Trang chủ</a>
            </li>
            <li>
              <a href="#" class="navbar__link">Giới
                thiệu <i class="fa-sharp fa-solid fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li>
                  <a href="#">Lịch sử và sứ mệnh</a>
                </li>
                <li>
                  <a href="#">Thành tựu đạt
                    được</a>
                </li>
              </ul>
            </li>
           
            <li>
              <a href="TinTuc.html" class="navbar__link">Tin tức <i
                class="fa-sharp fa-solid fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li><a href="TinTuc_TTKM.html">Tin tức khuyến mãi</a>
                </li>
                <li><a href="TinTuc_CCTH.html">Câu chuyện thương
                  hiệu</a></li>
                <li><a href="TinTuc_SK.html">Sự kiện</a></li>
              </ul>
            </li>
            <li class="center">
              <a href="CuaHang.html" class="navbar__link">Cửa hàng</a>
            </li>
          

            <li class="login-container">
            ${
              user
                ? `<div>
                    <img class="img-user" src="https://toco-production-v1.firebaseapp.com/assets/icons/logo_icon.png">
                  </div>
                  <span class="sigout" id="logout"><a href="/logout">Đăng xuất</a></span>`
                : `<a href="/login">Đăng nhập</a>
                  <a href="/register">Đăng ký</a>`
            }
                
                
            </li>
          </ul>

          <div class="btn-search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <label id="modal" class="fas fa-bars"></label>
        </div>
      </section>
    </div>
  `;
};

export default Header;
