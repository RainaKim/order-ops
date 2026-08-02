import express from 'express';
import { adminRouter } from './admin.js';
import { ordersRouter } from './orders.js';
import { paymentsRouter } from './payments.js';

export const app = express();

app.use(express.json());
app.use('/orders', ordersRouter);
app.use('/orders', paymentsRouter);
app.use('/admin', adminRouter);

if (process.env.NODE_ENV !== 'test') {
  const port = Number(process.env.PORT ?? 3000);
  app.listen(port, () => {
    console.log(`order-ops listening on http://localhost:${port}`);
  });
}
