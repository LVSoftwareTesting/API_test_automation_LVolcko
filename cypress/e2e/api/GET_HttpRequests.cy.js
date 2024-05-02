//File containing just GET methods

describe('GET - List Users', () => {

    it('Fetches list of users and validates the response', () => {
      cy.request('GET', '/users?page=2').then((response) => {
        expect(response.status).to.eq(200);
        const responseBody = response.body;
        expect(responseBody.total).to.be.a('number');
        expect(responseBody.data[0].last_name).to.be.a('string');
        expect(responseBody.data[1].last_name).to.be.a('string');

        var dataLength = responseBody.data.length;
        var totalLength = responseBody.total;

        expect(dataLength).to.be.lessThan(totalLength);

        //BONUS
        expect(responseBody.page).to.be.a('number');
        expect(responseBody.per_page).to.be.a('number');
        expect(responseBody.total).to.be.a('number');
        expect(responseBody.total_pages).to.be.a('number');

        responseBody.data.forEach(user => {
          expect(user.id).to.be.a('number');
          expect(user.email).to.be.a('string');
          expect(user.first_name).to.be.a('string');
          expect(user.last_name).to.be.a('string');
          expect(user.avatar).to.be.a('string').and.to.include('https://reqres.in/img/faces/');
        });

      });
    });

});
  