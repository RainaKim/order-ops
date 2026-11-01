import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { app } from '../src/server.js';
import { resetStore } from '../src/store.js';

describe('order operations', () => {
  beforeEach(() => {
    resetStore();
  });

  it('creates an order', async () => {
    const response = await request(app)
      .post('/orders')
      .send({ items: [{ productId: 'keyboard', quantity: 1 }] });

    expect(response.status).toBe(201);
  });

  it('gets an order', async () => {
    const created = await request(app)
      .post('/orders')
      .send({ items: [{ productId: 'mouse', quantity: 1 }] });
    const response = await request(app).get(`/orders/${created.body.id as string}`);

    expect(response.status).toBe(200);
  });

  it('returns a payment result', async () => {
    const created = await request(app)
      .post('/orders')
      .send({ items: [{ productId: 'monitor', quantity: 1 }] });
    const response = await request(app)
      .post(`/orders/${created.body.id as string}/pay`)
      .send({ cardToken: 'CARD-123' });

    expect(response.body).toHaveProperty('ok');
  });

  it('lists admin orders', async () => {
    const response = await request(app).get('/admin/orders');

    expect(Array.isArray(response.body)).toBe(true);
  });
});
