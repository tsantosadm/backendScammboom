import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ControllerUsuario from './app/controllers/ControllerUsuario';
import ControllerSessao from './app/controllers/ControllerSessao';
import ControllerArquivo from './app/controllers/ControllerArquivo';
import ControllerCategorias from './app/controllers/ControllerCategorias';
import ControllerPublicacoes from './app/controllers/ControllerPublicacoes'; 
import ControllerCurriculo from './app/controllers/ControllerCurriculo';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/usuarios', ControllerUsuario.store);
routes.post('/sessoes', ControllerSessao.store);
routes.post('/categorias', ControllerCategorias.store);
routes.post('/publicacoes', ControllerPublicacoes.store);
routes.get('/publicacoes', ControllerPublicacoes.getAll);
routes.post('/curriculo', ControllerCurriculo.store);

//Middleware global que executa depois das duas primeiras rotas
routes.use(authMiddleware);

routes.put('/usuarios', ControllerUsuario.update);

routes.post('/arquivos', upload.single('arquivo'), ControllerArquivo.store);

export default routes;
