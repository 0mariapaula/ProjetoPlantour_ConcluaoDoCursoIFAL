
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');


exports.createPasseio = async (req, res) => {
    try {
        const passeio = await Passeio.create(req.body);
        res.status(201).json(passeio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPasseios = async (req, res) => {
    try {
        const passeios = await Passeio.findAll();
        res.status(200).json(passeios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPasseioById = async (req, res) => {
    try {
        const passeio = await Passeio.findByPk(req.params.id);
        if (passeio) {
            res.status(200).json(passeio);
        } else {
            res.status(404).json({ error: 'Passeio não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePasseio = async (req, res) => {
    try {
        const passeio = await Passeio.findByPk(req.params.id);
        if (passeio) {
            await passeio.update(req.body);
            res.status(200).json(passeio);
        } else {
            res.status(404).json({ error: 'Passeio não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePasseio = async (req, res) => {
    try {
        const passeio = await Passeio.findByPk(req.params.id);
        if (passeio) {
            await passeio.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Passeio não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
