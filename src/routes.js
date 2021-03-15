import { Router } from 'express';
import ControllerUsuario from './app/controllers/ControllerUsuario';
const routes = new Router();

routes.post('/usuarios', ControllerUsuario.store);

export default routes;
