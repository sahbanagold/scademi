'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions_levels = sequelize.define('questions_levels', {
    level: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questions_levels.hasMany(models.questions,{onDelete : 'SET NULL'})
      }
    }
  });
  return questions_levels;
};
