module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get('db');
    const products = await db.get_products().catch(err => console.log(err));
    res.status(200).send(products);
  },

  getPostProducts: async (req, res) => {
    const { post_id } = req.params;
    const db = req.app.get('db');
    const products = await db.get_mapped_products(post_id);
    res.status(200).send(products);
  },

  getProduct: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    let product = await db.get_product(id);
    res.status(200).send(product[0]);
  },

  addProduct: async (req, res) => {
    const { title, brand, category, url, post_id, img_url } = req.body;
    const db = req.app.get('db');

    let product_id = await db.check_product_url(url);
    if (!product_id[0]) {
      product_id = await db.add_product({
        title,
        brand,
        category,
        url,
        img_url
      });
    } 
    product_id = product_id[0].product_id;
    await db.add_posts_product(post_id, product_id);
    res.sendStatus(200);
  },

  getBrandsAndCategories: async (req, res) => {
    const db = req.app.get('db');
    let brands = await db.get_brands();
    brands = brands.map(e => e.brand);
    let categories = await db.get_categories();
    categories = categories.map(e => e.category);
    res.status(200).send({ brands, categories });
  }
};
