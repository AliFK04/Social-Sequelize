const { Model, DataTypes } = require('sequelize');
const {db} = require('../db/connection');

class Post extends Model {}
Post.init({
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.DATE,
}, { db, modelName: 'post' });

module.exports = Post;


// const {db} = require('../db/connection.js')
// const {Datatypes} = require("sequelize")

// const Post = db.define("post", {
//     title: Datatypes.STRING,
//     body: Datatypes.STRING,
//     createdAt: Datatypes.STRING
// })

// module.exports = Post;