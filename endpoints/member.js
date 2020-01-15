const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

export const addNewMember = (body) => api.post(`/api/users`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(body);

const getOneMember = (id) => api.get(`/api/users/${id}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

module.exports = {
    addNewMember,
    getOneMember
}