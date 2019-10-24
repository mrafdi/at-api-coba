const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getAllColor = () => api.get(`/api/unknown`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getSingleColor = (page) => api.get(`/api/unknown/2`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getUserNotFound = () => api.get(`/api/users/23`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');    

module.exports = {
    getAllColor,
    getSingleColor,
    getUserNotFound
}