const bcrypt = require('bcryptjs')
module.exports = {
    register: async(req,res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {email, password, name, igHandle} = req.body
        let foundUser = await db.check_email(email)
        if(foundUser[0]) {
            res.status(409).send('email already exists') //todo make a cool alert.
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register({email, password: hash, name, ig_handle: igHandle})
        req.session.user = {...newUser}
        res.status(200).send(newUser[0])
        // res.sendStatus(200)
    }
}