'use strict';
module.exports = function(sequelize, DataTypes) {
  var scores = sequelize.define('scores', {
    score: DataTypes.INTEGER,
    verbal_answer: DataTypes.JSON,
    verbal_numeric: DataTypes.JSON,
    verbal_intelligence: DataTypes.JSON,
    takenAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        scores.belongsTO(models.questions_packets,{onDelete : 'SET NULL'})
        scores.belongsTO(models.users,{onDelete : 'SET NULL'})
      }
    }
  });
  return scores;
};
