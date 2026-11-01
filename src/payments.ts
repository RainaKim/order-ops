import { Router } from 'express';
import type { Request, Response } from 'express';
import {
  orders,
  paymentAttempts,
  type Order,
  type PaymentAttempt,
} from './store.js';

interface PaymentBody {
  cardToken?: string;
}

interface ParsedCardToken {
  value: string;
  shouldFail: boolean;
}

function parseCardToken(value: unknown): ParsedCardToken | null {
  if (typeof value !== 'string') {
    return null;
  }

  const cardToken = value.trim();
  if (cardToken.length === 0) {
    return null;
  }

  return {
    value: cardToken,
    shouldFail: cardToken.startsWith('FAIL'),
  };
}

function isPayable(order: Order): boolean {
  return order.status === 'pending' && order.totalKrw > 0;
}

function createAttempt(order: Order, ok: boolean): PaymentAttempt {
  return {
    orderId: order.id,
    ok,
    amountKrw: order.totalKrw,
    at: new Date().toISOString(),
  };
}

function recordAttempt(order: Order, ok: boolean): void {
  paymentAttempts.push(createAttempt(order, ok));
}

function completePayment(order: Order): Order {
  order.status = 'paid';
  recordAttempt(order, true);
  return order;
}

function rejectInvalidRequest(res: Response, message: string): void {
  res.status(400).json({ message });
}

export const paymentsRouter = Router();

paymentsRouter.post(
  '/:id/pay',
  (req: Request<{ id: string }, unknown, PaymentBody>, res: Response) => {
    try {
      const orderId = req.params.id;
      const order = orders.get(orderId);
      if (!order) {
        res.status(404).json({ message: 'Order not found' });
        return;
      }

      if (!isPayable(order)) {
        rejectInvalidRequest(res, 'Order is not payable');
        return;
      }

      const card = parseCardToken(req.body.cardToken);
      if (!card) {
        rejectInvalidRequest(res, 'Invalid card token');
        return;
      }

      if (card.shouldFail) {
        recordAttempt(order, false);
        orders.delete(orderId);
        res.json({ ok: false });
        return;
      }

      const paidOrder = completePayment(order);
      res.json({ ok: true, order: paidOrder });
    } catch (e) {
      console.log(e);
      res.json({ ok: false });
    }
  },
);
