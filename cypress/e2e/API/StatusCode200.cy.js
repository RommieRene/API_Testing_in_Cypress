import Base from "../POM/Base";
import PayLoad from "../POM/PayLoad";

const base = new Base()
const body = new PayLoad()



describe('API testing', () => {

    it('should return 200 OK on successful GET request', () => {
        cy.request({
            method: 'GET',
            url: base.GetUrl,

        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it('should return 200 OK on successful PUT request', ()=>{
        cy.request({
            method: 'PUT',
            url: base.PutUrl,
            body:  body.PutRandomData,
            headers: {
                Authorization: base.AccessToken,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    })

    it('should return 200 OK on successful PATCH request', ()=>{
        cy.request({
            method: 'PATCH',
            url: base.PatchUrl,
            body:  body.PatchRandomData,
            headers: {
                Authorization: base.AccessToken,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    })


});