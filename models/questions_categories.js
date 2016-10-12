'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions_categories = sequelize.define('questions_categories', {
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questions_categories.hasMany(models.questions,{onDelete : 'SET NULL'})
      }
    }
  });
  return questions_categories;
};
