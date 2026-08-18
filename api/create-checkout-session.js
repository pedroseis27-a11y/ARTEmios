const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { name, price } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: name,
            },
            unit_amount: Math.round(price * 100),
            },
          },
          quantity: 1,
        },
      ],

      success_url: "https://artemios.vercel.app/?pago=exitoso",
      cancel_url: "https://artemios.vercel.app/?pago=cancelado",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "No se pudo crear la sesión de pago",
    });
  }
};
