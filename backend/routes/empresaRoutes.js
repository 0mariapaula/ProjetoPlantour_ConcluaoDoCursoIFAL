const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.post('/empresas', empresaController.createEmpresa);
router.get('/empresas', empresaController.getEmpresas);
router.get('/empresas/:id', empresaController.getEmpresaById);
router.put('/empresas/:id', empresaController.updateEmpresa);
router.delete('/empresas/:id', empresaController.deleteEmpresa);

module.exports = router;
