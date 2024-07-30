import PayLoad from "../POM/PayLoad";
import Base from "../POM/Base";

const body = new PayLoad()
const base = new Base()


describe('API testing', () => {


    it('None Existing Resource 404 Status Code', () => {
        cy.request({
            method: 'DELETE',
            headers: {
                Authorization: base.AccessToken
            },
            url: base.DeleteUrl,
            body: {
                id: 579224,
                user_id: 71637451,
                title: "Reprehenderit omnis vulnero urbs minus uterque.",
                due_on: "2024-08-19T00:00:00.000+05:30",
                status: "completed"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})