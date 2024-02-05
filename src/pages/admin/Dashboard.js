import Header from "../../components/Header";

const Dashboard = () => {
  return /*html*/ `
  <div class="container">
    <h1>Hello, Admin</h1>
    <button class="btn btn-primary" id="addNew">Add new</button>
    <div class="app sidebar-mini rtl">
    <header class="app-header">
    <!-- Sidebar toggle button--><p class="app-sidebar__toggle" data-toggle="sidebar"
      aria-label="Hide Sidebar"></p>
    <!-- Navbar Right Menu-->
    <ul class="app-nav">
  
  
      <!-- User Menu-->
      <li><a classgit ="app-nav__item" href="/index.html"><i class="fa-solid fa-right-from-bracket"></i> </a>
  
      </li>
    </ul>
  </header>
  
  <aside class="app-sidebar">
    <div class="app-sidebar__user">
      <div>
        <img width="150px" src="https://tocotocotea.com.vn/wp-content/uploads/2021/04/Logo-ngang-01.png">
      </div>
    </div>
    <hr>
    <ul class="app-menu">
      <li><a class="app-menu__item" href="/admin/categories"><i class="app-menu__icon fa-regular fa-rectangle-list"></i>
          <span class="app-menu__label">Quản lý danh mục</span></a></li>
      <li><a class="app-menu__item " href="/admin/users" ><i class="app-menu__icon fa-regular fa-id-card"></i><span
            class="app-menu__label" >Quản lý tài khoản</span></a></li>
      <li><a class="app-menu__item" href="/admin">
          <i class="app-menu__icon fa-solid fa-boxes-packing"></i><span class="app-menu__label">Quản lý sản phẩm</span></a>
      </li>
      <li><a class="app-menu__item" href="/admin/toppings"><i 
      class="app-menu__icon fa-solid fa-ice-cream"></i><span class="app-menu__label">Quản lý Toppings</span></a>
      </li>
    </ul>
  </aside>

    </div>
 
    <main class="app-content">
    <div class="app-title">
      <ul class="app-breadcrumb breadcrumb side">
        <li class="breadcrumb-item active"><a href="/admin/products"><b>Danh sách sản phẩm</b></a></li>
      </ul>
      <div id="clock"></div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
    
            <div class="row element-button">
              <div class="col-sm-2">
                <a class="btn btn-add btn-sm" href="/admin/add" title="Thêm"><i class="fas fa-plus"></i>
                  Tạo mới sản phẩm</a>
              </div>
            </div>
    <table class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0"
        id="sampleTable">
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
    <div id="productList"></div>
    </tbody>
    </table>
    </div>
        </div>
      </div>
    </div>
  </div>
  
  `;
};

export default Dashboard;
