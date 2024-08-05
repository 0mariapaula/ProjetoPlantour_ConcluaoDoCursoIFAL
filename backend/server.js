const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Verifique se o caminho está correto

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

app.use('/api/usuarios_comuns', userRoutes);
app.use('/api/usuarios_empresas', companyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});
