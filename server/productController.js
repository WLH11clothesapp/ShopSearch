module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db");
    const products = await db.get_products().catch(err => console.log(err));
    console.log(products);
    res.status(200).send(products);
  }, 

  getPostProducts: async (req, res) => {
    const {post_id} = req.params
    const db = req.app.get("db");
    const products = await db.get_mapped_products(post_id)
    res.status(200).send(products)
  }, 

  getProduct: async (req, res) => {
    const {id} = req.params
    const db = req.app.get('db');
    let product = await db.get_product(id)
    res.status(200).send(product[0])
  },

  addProduct: async (req, res) => {
    const {title, brand, category, url, post_id} = res.data
    console.log('res.data', res.data)
    const db = req.app.get('db');
    let product_id = await db.check_product_url(url)
    if(!product_id[0]){
      product_id = await db.addProduct({title, brand, category, url, post_id}) 
    }
    product_id = product_id[0]
    await db.add_product_link(posts_id, product_id);
    res.sendStatus(200)
  }
};
