'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('users','user_roleId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'user_Roles',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }).then(queryInterface.addColumn('users','addressId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'addresses',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })).then(queryInterface.addColumn('scores','userId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'users',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })).then(queryInterface.addColumn('questions','questions_categoryId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'questions_categories',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })).then(queryInterface.addColumn('questions','questions_levelId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'questions_levels',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })).then(queryInterface.addColumn('questions','questions_statusId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'questions_statuses',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }))
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
