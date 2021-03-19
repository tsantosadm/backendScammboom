'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.removeColumn(
      'usuarios',
      'foto',
    )
  },

  down: async (queryInterface) => {
    return queryInterface.addColumn('usuarios', 'foto');
  }
};
