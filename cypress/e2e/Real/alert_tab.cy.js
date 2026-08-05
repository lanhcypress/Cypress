describe('Buổi 5: Đi từ trang chủ để test Alert và Contact Us', () => {

    // Trước mỗi bài test, luôn luôn quay về trang chủ duy nhất
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com');
    });

    it('Testcase 1: Đi từ trang chủ vào trang Alert', () => {
        // 1. Tìm thẻ của mục POPUP & ALERTS, xóa thuộc tính mở tab mới và click
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();

        // 2. Kiểm tra xem đã chuyển trang thành công chưa
        cy.url().should('include', '/Popup-Alerts/');

        // 3. Chuẩn bị bộ bắt sự kiện Alert
        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am an alert box!');
        });

        // 4. Click nút mở Alert
        cy.get('#button1').click();
    });

    it('Testcase 2: Đi từ trang chủ vào trang Contact Us', () => {
        // 1. Tìm thẻ của mục CONTACT US, xóa thuộc tính mở tab mới và click
        cy.get('#contact-us').invoke('removeAttr', 'target').click();

        // 2. Kiểm tra xem đã chuyển trang thành công chưa
        cy.url().should('include', '/Contact-Us/');

        // 3. Điền thử thông tin vào Form liên hệ cho biết ta đã vào đúng trang
        cy.get('input[name="first_name"]').type('Lan Anh');
        cy.get('input[name="last_name"]').type('Tester');
    });

});
