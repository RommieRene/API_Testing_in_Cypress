import {faker} from "@faker-js/faker"

function numbers(max) {
    return Math.floor(7321546+Math.random() * 335163);
}

function name(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function generateRandomEmail() {
    const timestamp = new Date().getTime();
    return `user${timestamp}@example.com`;
}

const randomEmail = generateRandomEmail();
let username = faker.internet.userName()
let email = faker.internet.email()

export default class PayLoad {

    RandomData = {
        id: numbers,
        name: username,
        email: email,
        gender: "male",
        status: "active"
    }
    PutRandomData = {
        name: name,
        email: randomEmail,
    }
    PatchRandomData = {
        name: name,
        email: email,
    }



    PostAndDeleteData = {
        id: 7202079,
        name: "Bennie_Lsdfuettgen54",
        email: "Rosina90@sdfhotmail.com",
        gender: "male",
        status: "active"
    };
    existingData = [
        {
             id: 7202880,
             name: "Cas23p2er44",
             email: "Gold3212211a42@yahoo.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202833,
             name: "Ludie.Boehm",
             email: "Ellsworth.Dicki@yahoo.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202826,
             name: "Reginald18",
             email: "Celia84@hotmail.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202817,
             name: "Brionna.Reichert",
             email: "Ismael_Swaniawski@hotmail.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202773,
             name: "Logan.Glover98",
             email: "Bradford_Swaniawski77@gmail.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202760,
             name: "Kaela.Lynch82",
             email: "Esther.Rau46@yahoo.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202749,
             name: "Karlie_Kuhn51",
             email: "Dorian_Hahn-Lind81@gmail.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202742,
             name: "Alysa_Lakin30",
             email: "Bethel_Collins@yahoo.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202712,
             name: "Benn34ie_Lsdfuettgen54",
             email: "Rosi34na90@sdfhotmail.com",
             gender: "male",
             status: "active"
        },
        {
             id: 7202689,
             name: "Be0nnie_Lsdfuettgen54",
             email: "Ros0ina90@sdfhotmail.com",
             gender: "male",
             status: "active"
        }
    ]
}
