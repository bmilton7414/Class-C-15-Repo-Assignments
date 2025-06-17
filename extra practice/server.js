// server.js
const express = require('express');
const app = express();
const stripe = require('stripe')('your-secret-key'); // Replace with real secret key
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'apple_pay'],
    mode: 'subscription',
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Website Creation Service',
        },
        unit_amount: 10000,
        recurring: {
          interval: 'month',
        },
      },
      quantity: 1,
    }],
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on port 4242'));
