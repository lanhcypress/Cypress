describe('UI Automation Test - SauceDemo Ecommerce', () => {
  
  // Trước mỗi ca test, tự động truy cập vào trang web
  beforeEach(() => {
    cy.visit('https://saucedemo.com');
  });

  it('TC01: Đăng nhập thất bại với tài khoản sai mật khẩu', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    // Xác trị thông báo lỗi hiển thị đúng
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC02: Đăng nhập thành công và thêm sản phẩm vào giỏ hàng', () => {
    // 1. Đăng nhập hệ thống
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Kiểm tra đã chuyển hướng vào trang sản phẩm thành công
    cy.url().should('include', '/inventory.html');

    // 2. Thêm sản phẩm đầu tiên vào giỏ hàng
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 3. Xác trị icon giỏ hàng hiển thị số lượng là 1
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('text', '1');
  });
});
