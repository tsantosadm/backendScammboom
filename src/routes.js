import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ControllerUsuario from './app/controllers/ControllerUsuario';
import ControllerSessao from './app/controllers/ControllerSessao';
import ControllerArquivo from './app/controllers/ControllerArquivo';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/usuarios', ControllerUsuario.store);
routes.post('/sessoes', ControllerSessao.store);

//Middleware global que executa depois das duas primeiras rotas
routes.use(authMiddleware);

routes.put('/usuarios', ControllerUsuario.update);

routes.post('/arquivos', upload.single('arquivo'), ControllerArquivo.store);

export default routes;
