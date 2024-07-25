const express = require('express');
const router = express.Router();
const favoritoController = require('../controllers/favoritoController');

router.post('/', favoritoController.createFavorito);
router.get('/', favoritoController.getFavoritos);
router.get('/:id', favoritoController.getFavoritoById);
router.put('/:id', favoritoController.updateFavorito);
router.delete('/:id', favoritoController.deleteFavorito);

module.exports = router;
