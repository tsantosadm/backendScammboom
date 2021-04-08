import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ControllerUsuario from './app/controllers/ControllerUsuario';
import ControllerSessao from './app/controllers/ControllerSessao';
import ControllerArquivo from './app/controllers/ControllerArquivo';
import ControllerCategorias from './app/controllers/ControllerCategorias';
import ControllerPublicacoes from './app/controllers/ControllerPublicacoes'; 
import ControllerCurriculo from './app/controllers/ControllerCurriculo';
import ControllerFavoritos from './app/controllers/ControllerFavoritos';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/usuarios', ControllerUsuario.store);
routes.post('/sessoes', ControllerSessao.store);
routes.post('/categorias', ControllerCategorias.store);

//Middleware global que executa depois das rotas anteriores
routes.use(authMiddleware);

routes.put('/usuarios', ControllerUsuario.update);

routes.post('/publicacoes', ControllerPublicacoes.store);
routes.get('/publicacoes', ControllerPublicacoes.index);
routes.get('/publicacoes/usuario', ControllerPublicacoes.indexUsuario);
routes.post('/publicacoes/favorito', ControllerFavoritos.store);
routes.get('/publicacoes/favoritos', ControllerFavoritos.indexUsuario);
routes.get('/publicacoes/categoria/:id', ControllerPublicacoes.indexCategoria);

routes.post('/curriculo', ControllerCurriculo.store);
routes.get('/curriculo/usuario', ControllerCurriculo.indexUsuario);

routes.post('/arquivos', upload.single('arquivo'), ControllerArquivo.store);

export default routes;
