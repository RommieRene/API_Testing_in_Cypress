import PayLoad from "../POM/PayLoad";
import Base from "../POM/Base";

const body = new PayLoad()
const base = new Base()
describe('API testing', () => {


    it('should return 201 OK on successful POST request', () => {
        cy.request({
            method: 'POST',
            url: base.PostUrl,
            headers: {
                Authorization: base.AccessToken
            },
            body: body.RandomData
        }).then((response) => {
            expect(response.status).to.eq(201);


        });
    });
});