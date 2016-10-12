'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_Roles = sequelize.define('user_roles', {
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasMany(models.users)
      }
    }
  });
  return user_Roles;
};
