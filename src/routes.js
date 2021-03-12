import { Router } from 'express';
import Usuarios from './app/models/Usuarios';

const routes = new Router();

//Teste criando um usuário
routes.get('/', async (_req, res) => {
  const usuario = await Usuarios.create({
    nome: 'Mylena',
    email: 'mylena@ninja.com',
    senha_hash: 'dffdg345rghr56ftgfdg',
    numero_de_celular: '68999335566',
    data_de_nascimento: '1997-03-21',
    foto: '',
  });
  return res.json(usuario);
});

export default routes;
