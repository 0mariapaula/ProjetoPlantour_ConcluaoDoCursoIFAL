
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito } = require('../models/associations');

// Criar um favorito
exports.createFavorito = async (req, res) => {
    try {
        const favorito = await Favorito.create(req.body);
        res.status(201).json(favorito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter todos os favoritos
exports.getFavoritos = async (req, res) => {
    try {
        const favoritos = await Favorito.findAll();
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter um favorito por ID
exports.getFavoritoById = async (req, res) => {
    try {
        const favorito = await Favorito.findByPk(req.params.id);
        if (favorito) {
            res.status(200).json(favorito);
        } else {
            res.status(404).json({ error: 'Favorito não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar um favorito
exports.updateFavorito = async (req, res) => {
    try {
        const favorito = await Favorito.findByPk(req.params.id);
        if (favorito) {
            await favorito.update(req.body);
            res.status(200).json(favorito);
        } else {
            res.status(404).json({ error: 'Favorito não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar um favorito
exports.deleteFavorito = async (req, res) => {
    try {
        const favorito = await Favorito.findByPk(req.params.id);
        if (favorito) {
            await favorito.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Favorito não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
