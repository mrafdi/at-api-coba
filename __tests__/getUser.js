const epUser = require('../endpoints/user');
const dataUser = require('../data/user');

describe('Test Get User', () => {
    test('Get single user dengan id 2', async () => {
        const response = await epUser.getSingleUser();

        console.log(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data).toEqual(dataUser.dataJanet);
    });
    test('Get List user', async () => {
        const page = 2;
        const response = await epUser.getListUser(page);

        // console.log(response.body)
        console.log(response.body.page)
        expect(response.status).toBe(200)
        expect(response.body.page).toEqual(page);
    });
    test('Get single user dengan id 23', async () => {
        const response = await epUser.getUserNotFound();

        console.log(response.body)
        expect(response.status).toBe(404)
        // expect(response.body.data).toEqual(dataUser.dataJanet);
    });
});