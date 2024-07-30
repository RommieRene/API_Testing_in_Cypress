import PayLoad from "../POM/PayLoad";
import Base from "../POM/Base";

const body = new PayLoad()
const base = new Base()
const requestBody = {
    id: 72020790,
    name: "Benn34ie_Lsdfuettgen54",
    email: "Rosi34na90@sdfhotmail.com",
    gender: "male",
    status: "active"
};

describe('API testing', () => {
    it('should return 422 OK on successful PUT request', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/comments/6940459',
            body:  {
                id: 57960,
                user_id: 7220145,
                title: "Comparo timidus suffoco tristis campana.",
                due_on: "2024-08-21T00:00:00.000+05:30",
                status: "pending"
            },
            headers: {
                Authorization: base.AccessToken,
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.eq(403);
        });
    })

});