const epOmdb = require('../../endpoints/omdb');
const dataMovie = require('../../data/movie');

describe('Test Get Movie', () => {
    test('As a tester I can search movie using lowercase', async () => {
        const keyword = 'war';
        const paramQuery = {
            apikey: '8bbd3047', // this is my api key for omdb
            s: keyword,
        };
        const response = await epOmdb.getMovie(paramQuery);
        response.body.Search.map(element => 
            expect(element.Title.toLowerCase()).toContain(keyword)
        )
    });

    test('As a tester I can get same search result whether using lowercase or uppercase', async () => {
        const keyword = 'lord';
        const paramQuery = {
            apikey: '8bbd3047',
            s: keyword,
        };
        const responseLowerCase = await epOmdb.getMovie(paramQuery);

        const keyword2 = 'LORD';
        const paramQuery2 = {
            apikey: '8bbd3047',
            s: keyword2,
        };
        const responseUpperCase = await epOmdb.getMovie(paramQuery2);

        expect(responseLowerCase.body).toEqual(responseUpperCase.body)
    });

    dataMovie.arrayParam.keywordPositive.forEach((element) => {
        test('As a tester I can search movie with keyword ' + element.case, async () => {
            const paramQuery = dataMovie.setParamQuery();

            paramQuery[element.field] = element.changing;
            const response = await epOmdb.getMovie(paramQuery);
            expect(response.status).toBe(200)
            
        })
    });

    dataMovie.arrayParam.apiKeyNegative.forEach((element) => {
        test('As a tester I cannot search movie with api key ' + element.case, async () => {
            const paramQuery = dataMovie.setParamQuery();

            paramQuery[element.field] = element.changing;
            const response = await epOmdb.getMovie(paramQuery);
            expect(response.status).toBe(401)
            console.log(response.body)
        })
    });

    dataMovie.arrayParam.keywordNegative.forEach((element) => {
        test('As a tester I can search movie with search key ' + element.case, async () => {
            const paramQuery = dataMovie.setParamQuery();

            paramQuery[element.field] = element.changing;
            const response = await epOmdb.getMovie(paramQuery);
            expect(response.status).toBe(400) 
            // it should be 400/404 because the keywords don't match any movie
            console.log(response.body)
        })
    });

});