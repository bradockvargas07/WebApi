const Sequalize = require('sequelize');
const sequalize = require('../database/database');

const Usuario = sequalize.define("usuario",{
    id:{
        allowNUll : false,
        autoIncrement :true,
        primaryKey : true,
        type: Sequalize.INTEGER
    },
    nome:{
        allowNUll: false,
        type : Sequalize.STRING(255),
        validate : {len:[2,255]}
    },
    email:{
        allowNUll: false,
        type : Sequalize.STRING(255),
        validate : {len:[2,255]}
    },
    hash:{
        allowNUll: false,
        type : Sequalize.STRING(255),
        validate : {len:[2,255]}
    },
    salt:{
        allowNUll: false,
        type : Sequalize.STRING(255),
        validate : {len:[2,255]}
    }

});

module.exports = Usuario;
