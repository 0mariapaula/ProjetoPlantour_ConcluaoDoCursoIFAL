const express = require('express');
const router = express.Router();
const atracaoController = require('../controllers/atracaoController');

router.post('/', atracaoController.createAtracao);
router.get('/', atracaoController.getAtracoes);
router.get('/:id', atracaoController.getAtracaoById);
router.put('/:id', atracaoController.updateAtracao);
router.delete('/:id', atracaoController.deleteAtracao);

module.exports = router;
