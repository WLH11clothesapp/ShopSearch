

module.exports = {
    getPost: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db');
        let post = await db.get_post(id)
        res.status(200).send(post[0])
    },

    getProductPosts: async (req, res) => {
        const {prod_id} = req.params
        console.log('a',prod_id)
        const db = req.app.get("db");
        const posts = await db.get_mapped_posts(prod_id)
        console.log('posts', posts)
        res.status(200).send(posts)
      }, 
}