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
    it('401',()=>{
       cy.request({
           method: 'POST',
           url: 'https://gorest.co.in/public/v2/users',
           body:  {
               id: 114249,
               post_id: 144771,
               name: "Gopee Varman",
               email: "gopee_varman@harris-steuber.test",
               body: "Impedit dolores quis. Quia ut quia."
           },
           failOnStatusCode: false
       }).then((response) => {
           expect(response.status).to.eq(401);
       })
    });
});