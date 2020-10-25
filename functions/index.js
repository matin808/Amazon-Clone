const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HUW9rACgPg8f6zX7BgaFu1ybpaqxTb8M1PKn11nk7LtkhLCpdkhLsxiNAjvosyMImDHy7QlFFPFDHlpohFWJwGM00rVELyMqo"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/clone-d16e8/us-central1/api
