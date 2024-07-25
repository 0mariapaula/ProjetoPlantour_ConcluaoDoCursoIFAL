const express = require('express');
const router = express.Router();
const passeioController = require('../controllers/passeioController');

router.post('/', passeioController.createPasseio);
router.get('/', passeioController.getPasseios);
router.get('/:id', passeioController.getPasseioById);
router.put('/:id', passeioController.updatePasseio);
router.delete('/:id', passeioController.deletePasseio);

module.exports = router;
