const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getSingleUser = () => api.get(`/api/users/2`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const getListUser = (page) => api.get(`/api/users?page=${page}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

module.exports = {
    getSingleUser,
    getListUser
}