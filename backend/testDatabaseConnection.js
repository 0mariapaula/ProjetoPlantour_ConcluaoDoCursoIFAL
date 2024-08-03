const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'plantour',
    database: 'plantour'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MariaDB.');

    const testQuery = `INSERT INTO usuarios (nome, email, telefone, cpf, senha) VALUES ('Teste', 'teste@example.com', '123456789', '12345678901', 'senha123')`;

    connection.query(testQuery, (error, results) => {
        if (error) {
            console.error('Erro ao inserir dados de teste:', error);
        } else {
            console.log('Dados de teste inseridos com sucesso:', results);
        }
        connection.end();
    });
});
