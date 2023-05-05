const { Comment, Like, Post, Profile, User } = require("./models/index");
const {db} = require('./db/connection.js')

// Define your associations here

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Post, {through: Like})
Post.belongsToMany(User, {through: Like})

db.sync()

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}