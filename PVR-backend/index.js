require('dotenv').config()
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// console.log(stripe)

const app = express()
const Port = 8000;

app.use(express.json())
app.use(cors())


app.post('/payment', async (req, res) => {
    try {
      const { amount } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "INR",
        payment_method_types: ['card'],
      });
  
      const clientSecret = paymentIntent.client_secret;
  
      res.json({ clientSecret });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ error: "Failed to create payment intent" });
    }
  });
  



app.listen(Port, () => {
    console.log(`Listening to port ${Port}`)
})





// try {
//     const { amount } = req.body

//     stripe.paymentIntents.create({
//         amount: amount,
//         currency: "INR",
//         payment_method_types:['card']
//     });

//     const clientSecret = paymentIntents.client_secret;
//     res.json({
//         clientSecret,
//     })

// } catch {
//     console.log(e)
// }







