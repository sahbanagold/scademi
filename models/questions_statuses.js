'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions_status = sequelize.define('questions_statuses', {
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questions_statuses.hasMany(models.questions,{onDelete : 'SET NULL'})
      }
    }
  });
  return questions_status;
};
