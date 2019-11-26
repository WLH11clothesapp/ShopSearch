

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
        // console.log('hit addPost')
        // res.status(200).send('from Post in controller')
        const { user_id, image, text } = req.body
        console.log(user_id, image, text)
        const db = req.app.get('db');
        let post_id = await db.add_post({user_id, image, text})
        console.log('pi', post_id[0])
        res.status(200).send(post_id[0])
    },
}