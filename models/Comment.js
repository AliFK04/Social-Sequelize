const { Model, DataTypes } = require('sequelize');
const { db } = require('../db/connection');

class Comment extends Model {}
Comment.init({
  body: DataTypes.STRING,
  createdAt: DataTypes.DATE,
}, { db, modelName: 'comment' });


module.exports = Comment;