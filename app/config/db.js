const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE
});

try {
    sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso!');
} catch (error) {
    console.erro('Erro: Erro ao conectar com o banco de dados: ', error);
}

module.exports = sequelize;