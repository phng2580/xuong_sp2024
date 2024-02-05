
const SignInPage = () => {
  return /*html*/ `
  <div>
  <div class="background">
    <div class="coating">
      <div class="form-sign-up">
        <div class="form-logo">
          <img src="https://tocotocotea.com.vn/wp-content/themes/tocotocotea/assets/images/logo.png" alt="">
        </div>
        <form action="" class="form" id="login-form">
      <h1>Login</h1>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-input"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-input" id="password" />
      </div>

      <button type="button" id="loginBtn" class="btn btn-primary w-100"  class="btn-sign-up">
        Login
      </button>

      </form>

      <div class="link-login">
        <span>Chưa có tài khoản ?</span>
        <a href="/register">Đăng ký</a>
      </div>

      <div class="back-home">
        <a href="">Quay lại màn hình chính</a>
      </div>
      
    </div>
  </div>
</div>
</div>
  `;
};

export default SignInPage;
