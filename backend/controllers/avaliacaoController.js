

const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');

exports.createAvaliacao = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.create(req.body);
        res.status(201).json(avaliacao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAvaliacoes = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.findAll();
        res.status(200).json(avaliacoes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAvaliacaoById = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (avaliacao) {
            res.status(200).json(avaliacao);
        } else {
            res.status(404).json({ error: 'Avaliação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAvaliacao = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (avaliacao) {
            await avaliacao.update(req.body);
            res.status(200).json(avaliacao);
        } else {
            res.status(404).json({ error: 'Avaliação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAvaliacao = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (avaliacao) {
            await avaliacao.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Avaliação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
