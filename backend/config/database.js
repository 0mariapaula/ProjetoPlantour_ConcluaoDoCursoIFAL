// backend/config/database.js
const mysql = require('mysql2/promise'); // Importe o módulo mysql2/promise

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',        // Substitua pelo seu usuário
  user: 'root',             // Substitua pela sua senha
  password: '33241858',     // Substitua pelo nome do seu banco de dados
  database: 'test'          // Nome do banco de dados na imagem é "test"
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;
