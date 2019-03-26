import request from 'supertest';
import { expect } from 'chai';

import app from '../src';

import { sendContact } from './mockData.json';

describe('Integration tests', () => {
  let sampleId;
  describe('POST /api/v1/location', () => {
    it('returns status code 201 and message', async () => {
      const response = await request(app)
        .post('/api/v1/location')
        .send(sendContact)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);

      const { message, newLocation: { name, _id } } = response.body;
      sampleId = _id;
      expect(message).to.equal('new location created');
      expect(name).to.equal(sendContact.name);
    });
  });

  describe('GET /api/v1/location', () => {
    it(`returns status code 200 and locations, total male population,
    total female population, total  population`, async () => {
      const response = await request(app)
        .get('/api/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      const { message, totalPopulation } = response.body;
      expect(message).to.equal('all locations fetched');
      expect(totalPopulation).to.equal(40);
    });
  });

  describe('GET /api/v1/location/:id', () => {
    it('returns single location', async () => {
      const response = await request(app)
        .get(`/api/v1/location/${sampleId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      const { message } = response.body;
      expect(message).to.equal('location found');
    });
  });

  describe('PUT /api/v1/location/:id', () => {
    it('returns modified location single location', async () => {
      const response = await request(app)
        .put(`/api/v1/location/${sampleId}`)
        .send({ name: 'modified name' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      const { message, updatedLocation: { name } } = response.body;
      expect(message).to.equal('location successfully updated');
      expect(name).to.equal('modified name');
    });
  });

  describe('DELETE /api/v1/location/:id', () => {
    it('returns modified location single location', async () => {
      const response = await request(app)
        .delete(`/api/v1/location/${sampleId}`)
        .send({ name: 'modified name' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      const { message } = response.body;
      expect(message).to.equal('location successfully deleted');
    });
  });
});
