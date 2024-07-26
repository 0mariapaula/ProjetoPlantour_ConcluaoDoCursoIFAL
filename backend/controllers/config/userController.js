// backend/controllers/userController.js
const userModel = require('../models/userModel');

const registerUser = (req, res) => {
  const user = req.body;
  userModel.createUser(user, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err });
    } else {
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }
  });
};

module.exports = {
  registerUser
};
