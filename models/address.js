'use strict';
module.exports = function(sequelize, DataTypes) {
  var address = sequelize.define('address', {
    provinsi: DataTypes.TEXT,
    kabupaten: DataTypes.TEXT,
    kecamatan: DataTypes.TEXT,
    desa: DataTypes.TEXT,
    kelurahan: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        address.hasOne(models.users,{onDelete : 'SET NULL'})
      }
    }
  });
  return address;
};
