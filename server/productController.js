module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db");
    const products = await db.get_products().catch(err => console.log(err));
    res.status(200).send(products);
  }
};
