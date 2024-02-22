import Header from "../../components/Header";
import layout from "./admin_layout";
const Dashboard = () => {
  return /*html*/ `
  ${layout}
    
    <button class="btn btn-primary" id="addNew"></button>
 
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
  
  `;
};

export default Dashboard;
