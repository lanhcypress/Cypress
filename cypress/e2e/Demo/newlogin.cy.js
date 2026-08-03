describe('Buổi 3: Tối ưu hóa kịch bản Đăng nhập', () => {

  // Chạy trước mỗi bài test: Tự động truy cập vào trang login
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com');
    cy.get('#menu-item-20 > a').click();
    cy.get(':nth-child(2) > [style="flex-basis:33.33%"] > .wp-block-paragraph > a').click()
  });

  it('Testcase 1: Đăng nhập thành công', () => {
    // Gọi dữ liệu từ file users.json trong thư mục fixtures
    cy.fixture('accounts').then((data) => {
      const user = data.validuser;
      
      // Gọi hàm custom từ commands.js
      cy.login(user.email, user.password);
      
      // Kiểm tra kết quả
      cy.url().should('include', '/logged-in-successfully/');
    });
  });

  it('Testcase 2: Đăng nhập thất bại', () => {
    cy.fixture('accounts').then((data) => {
      const user = data.invaliduser;
      
      // Gọi hàm custom với dữ liệu sai
      cy.login(user.email, user.password);
      
      // Kiểm tra thông báo lỗi
      cy.get('#error').should('have.class', 'show').and('contain', user.unexpectedError);
      // Có thể thay 'be.visible' bằng 'exist' để kiểm tra sự tồn tại trong code HTML
    });
  });

});
