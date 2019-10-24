const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getAllColor = () => api.get(`/api/unknown`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getSingleColor = () => api.get(`/api/unknown/2`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getColorNotFound = (number) => api.get(`/api/unknown/${number}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');    

module.exports = {
    getAllColor,
    getSingleColor,
    getColorNotFound
}