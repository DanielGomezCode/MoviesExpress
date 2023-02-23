const app = require('../src/models/actor');
const request = require('supertest');
const { expect } = require('chai');

describe('Test de prueba', () => {
  it('debería retornar un objeto con el mensaje "Hola, mundo!"', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.deep.equal({ message: 'Hola, mundo!' });
  });
});