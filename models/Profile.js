const { Model, DataTypes } = require('sequelize');
const {db} = require('../db/connection');

class Profile extends Model {}
Profile.init({
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.DATEONLY,
}, { db, modelName: 'profile' });

module.exports = Profile;


// const {db} = require('../db/connection.js')
// const {Datatypes} = require("sequelize")

// const Profile = db.define("profile", {
//     bio: Datatypes.STRING,
//     profilePicture: Datatypes.STRING,
//     birthday: Datatypes.STRING
// })


// module.exports = Profile;