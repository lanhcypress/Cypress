describe('Cypress Advanced Actions - Upload & Drag Drop', () => {

  it('Hành động 1: Tải file lên hệ thống (File Upload)', () => {
    // 1. Truy cập trang thực hành Upload file
    cy.visit('https://the-internet.herokuapp.com/upload');

    // 2. Định nghĩa file giả lập để upload (Cypress sẽ tự tìm trong thư mục cypress/fixtures/)
    // Lưu ý: Bạn cần tạo sẵn 1 file tên là 'example.json' hoặc 'test.txt' trong thư mục cypress/fixtures/ nhé
    const fileName = 'example.json'; 

    // 3. Chọn phần tử input file và tải file lên bằng lệnh .attachFile()
    cy.get('#file-upload').attachFile(fileName);

    // 4. Nhấn nút Submit để tải lên
    cy.get('#file-submit').click();

    // 5. Xác trị (Assertion) xem hệ thống hiển thị thông báo tải lên thành công chưa
    cy.get('h3').should('have.text', 'File Uploaded!');
    cy.get('#uploaded-files').should('contain', fileName);
  });

  it('Hành động 2: Kéo và thả phần tử (Drag and Drop)', () => {
    // 1. Truy cập trang thực hành Kéo - Thả
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

    // 2. Kích hoạt các sự kiện kéo-thả bằng cách truyền dữ liệu drag/drop trực tiếp
    const dataTransfer = new DataTransfer();

    cy.get('#column-a')
      .trigger('dragstart', { dataTransfer })
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer });

    cy.get('#column-b').trigger('drop', { dataTransfer });
    cy.get('#column-a').trigger('dragend', { dataTransfer });

    // 3. Xác trị xem hai khối đã được hoán đổi vị trí cho nhau chưa
    // Lúc này khối A đã nằm ở vị trí cột B, tiêu đề bên trong sẽ thay đổi
    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });

});

