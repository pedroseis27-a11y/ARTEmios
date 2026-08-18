const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: "El carrito está vacío"
      });
    }

    const lineItems = items.map(function(item) {
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name
          },
          unit_amount: Math.round(Number(item.price) * 100)
        },
        quantity: 1
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: "https://artemios.vercel.app/?pago=exitoso",
      cancel_url: "https://artemios.vercel.app/?pago=cancelado"
    });

    res.status(200).json({
      url: session.url
    });

  } catch (error) {
    console.error("STRIPE ERROR:", error);

    res.status(500).json({
      error: error.message || "No se pudo crear la sesión de pago"
    });
  }
};
