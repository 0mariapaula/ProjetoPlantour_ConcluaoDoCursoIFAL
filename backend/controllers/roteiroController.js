
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');


exports.createRoteiro = async (req, res) => {
    try {
        const roteiro = await Roteiro.create(req.body);
        res.status(201).json(roteiro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRoteiros = async (req, res) => {
    try {
        const roteiros = await Roteiro.findAll();
        res.status(200).json(roteiros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRoteiroById = async (req, res) => {
    try {
        const roteiro = await Roteiro.findByPk(req.params.id);
        if (roteiro) {
            res.status(200).json(roteiro);
        } else {
            res.status(404).json({ error: 'Roteiro não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateRoteiro = async (req, res) => {
    try {
        const roteiro = await Roteiro.findByPk(req.params.id);
        if (roteiro) {
            await roteiro.update(req.body);
            res.status(200).json(roteiro);
        } else {
            res.status(404).json({ error: 'Roteiro não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteRoteiro = async (req, res) => {
    try {
        const roteiro = await Roteiro.findByPk(req.params.id);
        if (roteiro) {
            await roteiro.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Roteiro não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
