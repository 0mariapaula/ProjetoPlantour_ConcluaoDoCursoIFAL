
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');

exports.createAtracao = async (req, res) => {
    try {
        const atracao = await Atracao.create(req.body);
        res.status(201).json(atracao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAtracoes = async (req, res) => {
    try {
        const atracoes = await Atracao.findAll();
        res.status(200).json(atracoes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAtracaoById = async (req, res) => {
    try {
        const atracao = await Atracao.findByPk(req.params.id);
        if (atracao) {
            res.status(200).json(atracao);
        } else {
            res.status(404).json({ error: 'Atração não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAtracao = async (req, res) => {
    try {
        const atracao = await Atracao.findByPk(req.params.id);
        if (atracao) {
            await atracao.update(req.body);
            res.status(200).json(atracao);
        } else {
            res.status(404).json({ error: 'Atração não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAtracao = async (req, res) => {
    try {
        const atracao = await Atracao.findByPk(req.params.id);
        if (atracao) {
            await atracao.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Atração não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
