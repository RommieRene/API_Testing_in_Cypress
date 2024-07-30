import PayLoad from "../POM/PayLoad";
import Base from "../POM/Base";

const body = new PayLoad()
const base = new Base()

describe('API testing', () => {

    it('should send a DELETE request with authentication token', () => {
        cy.request({
            method: 'DELETE',
            url: base.DeleteUrl,
            headers: {
                Authorization: base.AccessToken
            },
        }).then((response) => {
            expect(response.status).to.eq(204); // Assuming the resource is successfully deleted
        });
    });
});