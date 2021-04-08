'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('curriculos', [
      {
        id:1,
        usuario_id:1,
        formacao:'sistemas de informaçao' ,
        habilidade:'criação de sistemas' ,
        especializacao:'gerencia de TI',
        certificacoes:'microsoft.png ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        usuario_id:2,
        formacao:'sistemas de informaçao' ,
        habilidade:'criação de sistemas' ,
        especializacao:'gerencia de TI',
        certificacoes:'microsoft.png ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        usuario_id:3,
        formacao:'sistemas de informaçao' ,
        habilidade:'criação de sistemas' ,
        especializacao:'gerencia de TI',
        certificacoes:'microsoft.png ',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('curriculos');
  }
};
