const { Model, DataTypes } = require('sequelize');
const {db} = require('../db/connection');

class Like extends Model {}
Like.init({
  reactionType: DataTypes.STRING,
  createdAt: DataTypes.DATE,
}, { db, modelName: 'like' });

module.exports = Like;


module.exports = Like;