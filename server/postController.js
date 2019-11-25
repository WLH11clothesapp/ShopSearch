

module.exports = {
    getPost: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db');
        let post = await db.get_post(id)
        res.status(200).send(post[0])
    },

    getProductPosts: async (req, res) => {
        const {prod_id} = req.params
        const db = req.app.get("db");
        const posts = await db.get_mapped_posts(prod_id)
        res.status(200).send(posts)
    }, 

    addPost: async (req, res) => {
        const { user_id, image, text } = req.body
        console.log(user_id, image, text)
        const db = req.app.get('db');
        let post_id = await db.add_post({post_id, user_id, image, text})
        console.log(post_id)
        res.status(200).send(post_id[0])
    },
    
    
}