'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuarios',
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        references: {model: 'arquivos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      }
    )
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('usuarios', 'avatar_id');
  }
};
