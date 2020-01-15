import { getOneMember } from './../endpoints/member'
const dataColor = require('../data/color');

describe('Member actions', () => {
    test.skip('Add new member', async () => {
        const body = {
            "name": "morpheus",
            "job": "leader"
        }
        const response = await epMember.addNewMember(body);

        console.log(response.body)
        expect(response.status).toBe(201)
    });
    test('Get single user dengan id 3', async () => {
        const id = 3;

        const response = await getOneMember(id);

        const schema = {
            type: "object",
            reqired: ['data'],
            properties: {
                data: {
                    type: "object",
                    required: ['id', 'email', 'first_name', 'last_name', 'avatar'],
                    properties: {
                        id: {
                            type: 'integer'
                        },
                        email: {
                            type: 'string'
                        },  
                        first_name: {
                            type: 'string'
                        },
                        last_name: {
                            type: 'string'
                        },
                        avatar: {
                            type: 'string'
                        }
                    }
                }
            },
            additionalProperty: false
        }

        console.log(response.body)
        // console.log(JSON.stringify(response.body,null,4))
        expect(response.status).toBe(200)
        expect(response.body).toMatchSchema(schema)
        expect(response.body).toMatchSnapshot();
    });
    // test.only('Get color not found', async () => {
    //     const number = 23;
    //     const response = await epColor.getColorNotFound(number);

    //     console.log(response.body)
    //     expect(response.status).toBe(404)
    // });
});