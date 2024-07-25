

const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');


exports.createEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.create(req.body);
        res.status(201).json(empresa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.status(200).json(empresas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getEmpresaById = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            res.status(200).json(empresa);
        } else {
            res.status(404).json({ error: 'Empresa not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            await empresa.update(req.body);
            res.status(200).json(empresa);
        } else {
            res.status(404).json({ error: 'Empresa not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            await empresa.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Empresa not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
