const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  try {
    const account = await stripe.accounts.retrieve();

    res.status(200).json({
      ok: true,
      message: "Stripe conectado correctamente 🎉",
      country: account.country
    });

  } catch (error) {
    console.error("STRIPE ERROR:", error);

    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
};
