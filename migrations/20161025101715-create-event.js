'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meetup_id: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      link: {
        allowNull: false,
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
    return queryInterface.dropTable('Events');
  }
};
