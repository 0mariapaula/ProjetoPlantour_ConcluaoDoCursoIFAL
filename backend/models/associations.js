// associations.js

const Usuario = require('./Usuario');
const Empresa = require('./Empresa');
const Atracao = require('./Atracao');
const Roteiro = require('./Roteiro');
const Passeio = require('./Passeio');
const Avaliacao = require('./Avaliacao');
const Favorito = require('./Favorito');
const Contrato_Passeio = require('./Contrato_Passeio');


// Definindo associações
Usuario.hasMany(Avaliacao, { foreignKey: 'cpf_usuario' });
Avaliacao.belongsTo(Usuario, { foreignKey: 'cpf_usuario' });

Usuario.hasMany(Favorito, { foreignKey: 'cpf_usuario' });
Favorito.belongsTo(Usuario, { foreignKey: 'cpf_usuario' });

Empresa.hasMany(Roteiro, { foreignKey: 'cnpj_empresa' });
Roteiro.belongsTo(Empresa, { foreignKey: 'cnpj_empresa' });

Empresa.hasMany(Passeio, { foreignKey: 'cnpj_empresa' });
Passeio.belongsTo(Empresa, { foreignKey: 'cnpj_empresa' });

Roteiro.belongsToMany(Atracao, { through: 'Roteiro_Cria_Atracao', foreignKey: 'id_roteiro' });
Atracao.belongsToMany(Roteiro, { through: 'Roteiro_Cria_Atracao', foreignKey: 'id_atracao' });

Empresa.belongsToMany(Roteiro, { through: 'Empresa_Cria_Roteiro', foreignKey: 'cnpj_empresa' });
Roteiro.belongsToMany(Empresa, { through: 'Empresa_Cria_Roteiro', foreignKey: 'id_roteiro' });

Empresa.belongsToMany(Passeio, { through: 'Empresa_Cria_Passeio', foreignKey: 'cnpj_empresa' });
Passeio.belongsToMany(Empresa, { through: 'Empresa_Cria_Passeio', foreignKey: 'id_passeio' });

Usuario.belongsToMany(Passeio, { through: 'Usuario_Cria_Passeio', foreignKey: 'cpf_usuario' });
Passeio.belongsToMany(Usuario, { through: 'Usuario_Cria_Passeio', foreignKey: 'id_passeio' });

Avaliacao.belongsTo(Atracao, { foreignKey: 'id_atracao' });
Atracao.hasMany(Avaliacao, { foreignKey: 'id_atracao' });

Favorito.belongsTo(Atracao, { foreignKey: 'id_atracao' });
Atracao.hasMany(Favorito, { foreignKey: 'id_atracao' });

Contrato_Passeio.belongsTo(Passeio, { foreignKey: 'id_passeio' });
Contrato_Passeio.belongsTo(Usuario, { foreignKey: 'cpf_usuario' });

module.exports = {
  Usuario,
  Empresa,
  Atracao,
  Roteiro,
  Passeio,
  Avaliacao,
  Favorito,
};
