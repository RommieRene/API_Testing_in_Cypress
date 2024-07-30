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


    it('should return 201 OK on successful POST request', () => {
        cy.request({
            method: 'POST',
            url: base.PostUrlApi,
            headers: {
                Authorization: base.ApiToken
            },
            body: body.RandomData
        }).then((response) => {
            expect(response.status).to.eq(201);


        });
    });
    it('should return 200 OK on successful GET request', () => {
        cy.request({
            method: 'GET',
            url: base.PostUrlApi,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });




    it('should send a DELETE request with authentication token', () => {
        cy.request({
            method: 'DELETE',
            url: base.DeleteUrlApi,
            headers: {
                Authorization: base.ApiToken
            },
        }).then((response) => {
            expect(response.status).to.eq(204); // Assuming the resource is successfully deleted
        });
    });


    it('None Existing Resource 404 Status Code', () =>{
        cy.request({
            method: 'DELETE',
            headers: {
                Authorization: base.ApiToken
            },
            url: base.DeleteUrlApi,
            body:  {
                id: 57924,
                user_id: 7167451,
                title: "Reprehenderit omnis vulnero urbs minus uterque.",
                due_on: "2024-08-19T00:00:00.000+05:30",
                status: "completed"
            },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(404)
        })
    })
    it('should return 200 OK on successful PATCH request', ()=>{
        cy.request({
            method: 'PATCH',
            url: 'https://gorest.co.in//public/v2/users/7202880',
            body:  {
                id: 7202880,
                name: "Cas23asd23p2er44",
                email: "Gold3dasd212211a42@yahoo.com",
                gender: "male",
                status: "active"
            },
            headers: {
                Authorization: base.ApiToken,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    })

    /*it('should send a PATCH request and verify the status code', () => {
        // Store your token
        const token = 'c62c32a9472fd4e6153eaf6d1604b0232b4a41add817536571218e3d8e772662';

        // Define the request payload
        const requestBody = {
            status: "active"
        };

         Send PATCH request
        cy.request({
            method: 'PATCH',
            url: 'https://gorest.co.in/public/v2/users/7125454', // URL with the specific resource ID
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: requestBody,
            failOnStatusCode: false // Prevents Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assertions to verify the response
            cy.log(JSON.stringify(response.body)); // Log the response body for debugging
            expect(response.status).to.eq(200); // Verify the status code
            expect(response.body).to.have.property('status', 'active');
        });
    });*/

})




