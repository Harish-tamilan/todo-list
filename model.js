const Sequelize = require('sequelize');

const sequelize = require('./database');

const Model = sequelize.define('list',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    timeLimit:Sequelize.STRING
})

module.exports = Model;