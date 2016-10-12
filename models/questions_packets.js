'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions_packets = sequelize.define('questions_packets', {
    verbal: DataTypes.JSON,
    intelligence: DataTypes.JSON,
    numeric: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questions_packets.hasMany(models.scores,{onDelete : 'SET NULL'})
      }
    }
  });
  return questions_packets;
};
