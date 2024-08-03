const registerCompany = async (req, res) => {
    const { cnpj, email, telefone, endereco, nome, senha } = req.body;
    try {
        const hash = await bcrypt.hash(senha, 10);
        companyModel.createCompany({
            cnpj,
            email,
            telefone,
            endereco,
            nome, // Atualizado para 'nome'
            senha: hash
        }, (err, results) => {
            if (err) {
                res.status(500).json({ message: 'Erro ao cadastrar empresa', error: err });
            } else {
                res.status(201).json({ message: 'Empresa cadastrada com sucesso!' });
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar empresa' });
    }
};
