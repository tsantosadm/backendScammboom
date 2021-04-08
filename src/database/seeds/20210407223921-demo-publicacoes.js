'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('publicacoes', [
      {
        id:1,
        foto_do_item: "url_google",
        numero_de_celular:'984020510',
        disponivel: true,
        descricao: "bicicleta nova ",
        titulo: 'bicicleta',
        troca_por: 'computador',
        categoria_id:1 ,
        usuario_id:1 ,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:2,
        foto_do_item: "url_google",
        numero_de_celular:'984020510',
        disponivel: true,
        descricao: "Livros de Harry Potter seminovos",
        titulo: 'Coletânea Harry Potter',
        troca_por: 'Livros de informática',
        categoria_id:1 ,
        usuario_id:2 ,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:3,
        foto_do_item: "url_google",
        numero_de_celular:'68999557687',
        disponivel: true,
        descricao: "Par de luvas de futebol profissionais",
        titulo: 'Luvas de futebol',
        troca_por: 'Blusa do Flamengo',
        categoria_id:1 ,
        usuario_id:3 ,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:4,
        foto_do_item: "url_google",
        numero_de_celular:'68999557687',
        disponivel: true,
        descricao: "Manutenção de microcomputadores e celulares",
        titulo: 'Manutenção de computadores',
        troca_por: 'Aulas de violão',
        categoria_id:2 ,
        usuario_id:1 ,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('publicacoes');
  }
};

