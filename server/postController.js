

module.exports = {
    getPost: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db');
        let post = await db.get_post(id)
        res.status(200).send(post[0])
    }
}