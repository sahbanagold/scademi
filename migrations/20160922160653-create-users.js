'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        validate:{
          len:[3,35]
        }
      },
      birthday: {
        type: Sequelize.DATEONLY,
        validate:{
          isDate: true
        }
      },
      phone: {
        type: Sequelize.TEXT,
        validate:{
          is: /^[0-9]+$/i
        }
      },
      email: {
        type: Sequelize.TEXT,
        validate:{
          isEmail:true
        }
      },
      address: {
        type: Sequelize.TEXT
      },
      username: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.STRING
      },
      user_roleId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'user_roles',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      addressId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'addresses',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
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
    return queryInterface.dropTable('users');
  }
};
