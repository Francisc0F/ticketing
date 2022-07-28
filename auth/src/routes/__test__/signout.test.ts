import request from 'supertest';
import { app } from '../../app';

it('clears the cookie afgter signing out', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);

    const response = request(app)
        .post('/api/users/signout')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(200);

        expect(response.get('Set-Cookie')).toBe(undefined);

});