import { Router } from 'express';
import ControllerUsuario from './app/controllers/ControllerUsuario';
import ControllerSessao from './app/controllers/ControllerSessao';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', ControllerUsuario.store);
routes.post('/sessoes', ControllerSessao.store);

//Middleware global que executa depois das duas primeiras rotas
routes.use(authMiddleware);

routes.put('/usuarios', ControllerUsuario.update);

export default routes;
