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
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT('tiny'),
        allowNull: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {model: 'categorias', key: 'id' },
        onUpdate: 'CASCADE',
        onUpdate: 'SET NULL',
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onUpdate: 'SET NULL',
        allowNull: false,
      },
      troca_por: {
        type: Sequelize.STRING,
        allowNull: false,
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
