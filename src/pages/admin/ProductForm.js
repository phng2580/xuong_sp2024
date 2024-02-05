import layout from "./admin_layout";
const ProductForm = () => {
  return `
  ${layout}
  <main class="app-content">
  <div class="app-title">
    <ul class="app-breadcrumb breadcrumb">
      <li class="breadcrumb-item"><a href="/admin/">Danh sách sản phẩm</a></li>
      <li class="breadcrumb-item"><a href="/admin/add">Thêm sản phẩm</a></li>
    </ul>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="tile">
        <h3 class="tile-title">Tạo mới sản phẩm</h3>
        <div class="tile-body">
          <form class="row" action="" id="form-add"  enctype="multipart/form-data">
            <div class="form-group col-md-3">
              <label class="control-label">Tên sản phẩm</label>
              <input id="nameProduct" name="nameProduct" class="form-control" type="text">
            </div>

            <div class="form-group  col-md-3">
              <label class="control-label">Giá gốc</label>
              <input id="price" name="price"  class="form-control" type="text">
            </div>
            
            <div class="form-group col-md-12">
              <label class="control-label">Ảnh sản phẩm</label>
                <input type="text" id="images" name="images" multiple/>

            </div>

            <div class="form-group col-md-12">
              <label class="control-label">Mô tả sản phẩm</label>
              <textarea class="form-control" id="description" name="description" ></textarea>
            </div>
            <div class="form-group col-md-12">
            <button class="btn btn-save" id="save">Lưu lại</button>

              <a class="btn btn-cancel" href="/admin" >Hủy bỏ</a>
            </div>
          </form>
        </div>
      </div>
</main>
`;

}
export default ProductForm;
