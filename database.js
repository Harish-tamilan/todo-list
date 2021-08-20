const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'harish8249',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;