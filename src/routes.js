import { Router } from 'express';

const routes = new Router();

routes.get('/', (_req, res) => res.json({ message: 'Oi, Joel' }));

export default routes;
