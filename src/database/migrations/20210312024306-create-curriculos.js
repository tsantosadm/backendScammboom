'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curriculos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        references: {model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onUpdate: 'SET NULL',
        allowNull: false,
      },
      formacao: {
        type: Sequelize.TEXT('tiny'),
        allowNull: true,
      },
      habilidade: {
        type: Sequelize.TEXT('tiny'),
        allowNull: true,
      },
      especializacao: {
        type: Sequelize.TEXT('tiny'),
        allowNull: true,
      },
      certificacoes: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('curriculos');
  }
};
