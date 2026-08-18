module.exports = async (req, res) => {
  try {
    const response = await fetch("https://api.stripe.com/v1");

    res.status(200).json({
      ok: true,
      status: response.status
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
};
