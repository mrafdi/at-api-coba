const epUser = require('../endpoints/color');
const dataColor = require('../data/color');

describe('Test Get Color', () => {
    test('Get list all color', async () => {
        const response = await epUser.getAllColor();

        console.log(response.body)
        expect(response.status).toBe(200)
    });
    test('Get single color with id 2', async () => {
        const response = await epUser.getSingleColor();

        console.log(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data).toEqual(dataColor.dataFuchsia);
    });
});