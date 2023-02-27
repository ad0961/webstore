require("dotenv").config();

const stripe = require("stripe")('sk_test_51LoKtrSB7WEX7yAbCURVmYPEVySdZLSPhnwON7K8LKxNNo4JChCq54J7aOD0O64jWGID9NBiWoZmSOU5EuoPfBMo0028aMiHTP');

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
