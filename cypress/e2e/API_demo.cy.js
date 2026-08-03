describe('API Automation Test - ReqRes REST API', () => {

  it('GET: Lấy danh sách người dùng thành công (Status 200)', () => {
    cy.request('GET', 'https://reqres.in').then((response) => {
      // Xác trị mã trạng thái phản hồi là 200 OK
      expect(response.status).to.eq(200);
      
      // Xác trị dữ liệu trả về không bị trống
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array').that.is.not.empty;
      
      // Kiểm tra cấu trúc phần tử đầu tiên trong danh sách người dùng
      expect(response.body.data[0]).to.have.property('email');
      expect(response.body.data[0]).to.have.property('first_name');
    });
  });

  it('POST: Tạo người dùng mới thành công (Status 201)', () => {
    const userPayload = {
      name: "Nguyen Van A",
      job: "Automation Tester"
    };

    cy.request('POST', 'https://reqres.in', userPayload).then((response) => {
      // Xác trị mã trạng thái khi tạo mới thành công là 201 Created
      expect(response.status).to.eq(201);
      
      // Xác trị dữ liệu trả về trùng khớp với dữ liệu đã gửi lên
      expect(response.body.name).to.eq(userPayload.name);
      expect(response.body.job).to.eq(userPayload.job);
      
      // Xác trị API tự động sinh ra ID và thời gian tạo
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
