module.exports = async (req, res) => {
  try {
    const response = await fetch("https://api.stripe.com/v1/account", {
      headers: {
        "Authorization": "Bearer " + process.env.STRIPE_SECRET_KEY
      }
    });

    const data = await response.json();

    res.status(response.status).json({
      ok: response.ok,
      status: response.status,
      error: data.error ? data.error.message : null,
      country: data.country || null
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
};
