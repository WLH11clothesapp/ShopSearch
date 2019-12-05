const bcrypt = require('bcryptjs');
module.exports = {
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    console.log('getUser backend hit')
    
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } 
  },
  register: async (req, res) => {
    const db = req.app.get('db');
    const { email, password, name, igHandle } = req.body;
    let foundUser = await db.check_email(email);
    if (foundUser[0]) {
      res.status(409).send('Email already exists');
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
  
      let newUser = await db.register({
        email,
        password: hash,
        name,
        ig_handle: igHandle
      });
      req.session.user = { ...newUser };
      res.status(200).send(newUser[0]);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get('db');
    let foundUser = await db.check_email(email);
    if (!foundUser[0]) {
      res.status(401).send('Email is not Registered');
    } else {
      const authenticated = bcrypt.compareSync(password, foundUser[0].password);
      if (authenticated) {
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
      } else {
        res.status(401).send('Incorrect Password');
      }
    }
  }
};
