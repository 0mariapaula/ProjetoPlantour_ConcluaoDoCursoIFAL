const express = require('express');
const app = express();
const companyRoutes = require('./routes/companyRoutes'); // Certifique-se de que o caminho está correto

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/companies', companyRoutes); // Usando as rotas de empresas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
