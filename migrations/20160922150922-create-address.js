'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      provinsi: {
        type: Sequelize.TEXT
      },
      kabupaten: {
        type: Sequelize.TEXT
      },
      kecamatan: {
        type: Sequelize.TEXT
      },
      desa: {
        type: Sequelize.TEXT
      },
      kelurahan: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('addresses');
  }
};