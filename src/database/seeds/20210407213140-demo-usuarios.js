'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('usuarios', [
       {
        id: 1,
        nome: 'Denis',
        email: 'denis@gmail.com',
        senha_hash: '$2a$08$kngclIoOdODGW4B9u.EFFuXCIOtolNJ.JMwwkMXagV7.zwMYY9qjC',
        numero_de_celular:'68999334467',
        data_de_nascimento: '1998-01-21',
        avatar_id:null,
        created_at: new Date(),
        updated_at: new Date(),
       },
       {
        id:2,
        nome: 'Italo',
        email: 'italo@gmail.com',
        senha_hash: '$2a$08$wZQp20KHdUngIYmG17JQE.odWtkMXIfHiFGMxkyeKzA1TZ12Mv71G',
        numero_de_celular:'68999334467',
        data_de_nascimento: '1998-01-21',
        avatar_id:null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:3,
        nome: 'Mateus',
        email: 'mateus@gmail.com',
        senha_hash: '$2a$08$YA7UnHWtgllpqqLRHJtAVORX/HaLahyhbbeWJZRrOSCcKggAUpKeq',
        numero_de_celular:'68999334467',
        data_de_nascimento: '1998-01-21',
        avatar_id:null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        nome: 'Mylena',
        email: 'mila@gmail.com',
        senha_hash: '$2a$08$5tNjHm.9pHQRxBi46.DGauztqp4/pkHmkRsfWY6sJR9/488YKPyBS',
        numero_de_celular:'68999334467',
        data_de_nascimento: '1998-01-21',
        avatar_id:null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios');
  }
};
