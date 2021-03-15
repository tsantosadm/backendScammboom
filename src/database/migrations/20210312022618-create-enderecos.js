'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rua: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      numero_da_casa: {
        type: Sequelize.STRING(5),
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING(8),
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
     await queryInterface.dropTable('enderecos');
  }
};
