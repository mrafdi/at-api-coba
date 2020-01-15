const epOmdb = require('../endpoints/omdb');
const dataColor = require('../data/color');

describe('Test Get Movie', () => {
    test.only('Get list all movie', async () => {
        const keyword = 'lord';
        const paramQuery = {
            apikey: '8bbd3047',
            s: keyword,
        };
        const response = await epOmdb.getMovie(paramQuery);

        console.log(response.body)
        expect(response.status).toBe(200)
    });
    test('Get single color with id 2', async () => {
        const response = await epColor.getSingleColor();

        console.log(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data).toEqual(dataColor.dataFuchsia);
    });
    test('Get color not found', async () => {
        const number = 23;
        const response = await epColor.getColorNotFound(number);

        console.log(response.body)
        expect(response.status).toBe(404)
    });
});