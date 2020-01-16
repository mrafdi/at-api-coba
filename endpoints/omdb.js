const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_OMDB);

const getMovie = (paramQuery) => api.get(`/`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .query(paramQuery);

module.exports = {
    getMovie
}