const express = require('express');
const router = express.Router();
const roteiroController = require('../controllers/roteiroController');

router.post('/', roteiroController.createRoteiro);
router.get('/', roteiroController.getRoteiros);
router.get('/:id', roteiroController.getRoteiroById);
router.put('/:id', roteiroController.updateRoteiro);
router.delete('/:id', roteiroController.deleteRoteiro);

module.exports = router;
