'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.TEXT,
    birthday: DataTypes.DATEONLY,
    phone: DataTypes.TEXT,
    email: DataTypes.TEXT,
    address: DataTypes.TEXT,
    username: DataTypes.TEXT,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasOne(models.addresses)
        users.hasMany(models.scores)
        users.belongsTo(models.user_roles)
      }
    }
  });
  return users;
};
