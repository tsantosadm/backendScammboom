'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('publicacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_e_hora_de_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      foto_do_item: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      numero_de_celular: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      disponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      descricao: {
        type: Sequelize.TEXT('tiny'),
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
     await queryInterface.dropTable('publicacoes');
  }
};
