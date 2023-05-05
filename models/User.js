const {db} = require('../db/connection.js');
const {Datatypes, Model} = require("sequelize")

class User extends Model {}
User.init({
     username: Datatypes.STRING,
     email: Datatypes.STRING
}, {db, modelName: 'user' })

// const User = db.define("user", {
//     username: Datatypes.STRING,
//     password: Datatypes.STRING
// });

module.exports = User;