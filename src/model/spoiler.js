const Sequalize = require('sequelize');
const sequalize = require('../database/database');

const Spoiler = sequalize.define("spoiler",{
    id:{
      allowNUll : false,
      autoIncrement :true,
      primaryKey : true,
      type: Sequalize.INTEGER
    },
    titulo:{
      allowNUll: false,
      type : Sequalize.STRING(255),
      validate : {len:[2,255]}
    },

    espoliador:{
      allowNUll: false,
      type : Sequalize.STRING(40),
      validate : {len:[2,40]}
    },

    descricao:{
      allowNUll: false,
      type : Sequalize.STRING(255),
      validate : {len:[2,255]}
    }

});

module.exports = Spoiler;

