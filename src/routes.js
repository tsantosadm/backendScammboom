const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const ControllerUsuario = require('./app/controllers/ControllerUsuario');
const ControllerSessao = require('./app/controllers/ControllerSessao');
const ControllerArquivo = require('./app/controllers/ControllerArquivo');
const ControllerCategorias = require('./app/controllers/ControllerCategorias');
const ControllerPublicacoes = require('./app/controllers/ControllerPublicacoes');
const ControllerCurriculo = require('./app/controllers/ControllerCurriculo');
const ControllerFavoritos = require('./app/controllers/ControllerFavoritos');

const authMiddleware = require('./app/middlewares/auth');

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

module.exports = routes;
//export default routes;
