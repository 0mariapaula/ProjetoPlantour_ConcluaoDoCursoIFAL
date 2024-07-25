const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
}).catch((error) => {
  console.log('Error syncing database:', error);
});
