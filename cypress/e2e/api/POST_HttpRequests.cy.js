//File containing just POST methods

var limit = 100;

describe('POST Create Test Cases', () => {
  beforeEach(function () {
      cy.fixture('post_data').then((data) => {
          this.data = data;
      });
  });

  it('should correctly handle the POST request for each data set', function() {
    this.data.forEach((entry) => {
      cy.request({
        method: 'POST',
        url: '/users',
        body: entry
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
        expect(response.duration).to.be.greaterThan(limit);
        expect(response.body).to.have.all.keys('name', 'job', 'id', 'createdAt');
      });
    });
  });
});
