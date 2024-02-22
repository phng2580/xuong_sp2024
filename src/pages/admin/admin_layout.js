

const layout = () => {
  return /*html*/ `
      <!-- User Menu-->
    
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
  
  `;
};

export default layout;
