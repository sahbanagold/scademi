'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT
      },
      instruction: {
        type: Sequelize.STRING
      },
      option_a: {
        type: Sequelize.STRING
      },
      option_b: {
        type: Sequelize.STRING
      },
      option_c: {
        type: Sequelize.STRING
      },
      option_d: {
        type: Sequelize.STRING
      },
      option_e: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      question_lelvelId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'questions_levels',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      questions_statusId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'questions_statuses',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      questions_categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'questions_categories',
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
    return queryInterface.dropTable('questions');
  }
};
