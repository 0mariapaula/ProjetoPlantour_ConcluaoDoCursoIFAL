// backend/controllers/userController.js
const bcrypt = require('bcrypt');
const db = require('./config/database');

// Função para registrar usuário comum
exports.registerUser = async (req, res) => {
    const { nome_completo, email, telefone, cpf, senha } = req.body;
    console.log('Dados recebidos para registrar usuário:', req.body);
    try {
        const hash = await bcrypt.hash(senha, 10);
        console.log('Hash da senha gerado:', hash);
        await db.promise().query(
            'INSERT INTO usuarios_comuns (nome_completo, email, telefone, cpf, senha) VALUES (?, ?, ?, ?, ?)',
            [nome_completo, email, telefone, cpf, hash]
        );
        res.status(201).json({ message: 'Usuário comum registrado com sucesso' });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
};

// Função para registrar usuário empresa
exports.registerCompany = async (req, res) => {
    const { cnpj, email, telefone, endereco, nome_empresa, senha } = req.body; // Usando nome_empresa
    console.log('Dados recebidos para registrar empresa:', req.body);
    try {
        const hash = await bcrypt.hash(senha, 10);
        console.log('Hash da senha gerado:', hash);
        await db.promise().query(
            'INSERT INTO usuarios_empresas (cnpj, email, telefone, endereco, nome_empresa, senha) VALUES (?, ?, ?, ?, ?, ?)', // Usando nome_empresa
            [cnpj, email, telefone, endereco, nome_empresa, hash]
        );
        res.status(201).json({ message: 'Empresa registrada com sucesso' });
    } catch (error) {
        console.error('Erro ao registrar empresa:', error);
        res.status(500).json({ error: 'Erro ao cadastrar empresa' });
    }
};
