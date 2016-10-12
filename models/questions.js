'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define('questions', {
    question: DataTypes.TEXT,
    instruction: {
      type: DataTypes.STRING
    },
    option_a: {
      type: DataTypes.STRING
    },
    option_b: {
      type: DataTypes.STRING
    },
    option_c: {
      type: DataTypes.STRING
    },
    option_d: {
      type: DataTypes.STRING
    },
    option_e: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.STRING
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questions.belongsTO(models.questions_levels,{onDelete : 'SET NULL'})
        questions.belongsTO(models.questions_statuses,{onDelete : 'SET NULL'})
        questions.belongsTO(models.questions_categories,{onDelete : 'SET NULL'})
      }
    }
  });
  return questions;
};
