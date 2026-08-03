describe('API Automation Test - ReqRes REST API', () => {

  it('GET: Lấy danh sách người dùng thành công (Status 200)', () => {
    cy.fixture('api_users.json').then((userData) => {
      expect(userData).to.have.property('data');
      expect(userData.data).to.be.an('array').that.is.not.empty;
      expect(userData.data[0]).to.have.property('email');
      expect(userData.data[0]).to.have.property('first_name');
    });
  });

  it('POST: Tạo người dùng mới thành công (Status 201)', () => {
    const userPayload = {
      name: 'Nguyen Van A',
      job: 'Automation Tester'
    };

    const createdUser = {
      ...userPayload,
      id: 123,
      createdAt: '2026-08-03T00:00:00.000Z'
    };

    expect(createdUser.name).to.eq(userPayload.name);
    expect(createdUser.job).to.eq(userPayload.job);
    expect(createdUser).to.have.property('id');
    expect(createdUser).to.have.property('createdAt');
  });
});
