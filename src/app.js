//import express from 'express';
//import cors from 'cors';
//import routes from './routes';
//import './database'; ------------------------------> PRECISA REIMPORTAR O BANCO DE DADOS DEPOIS!!!

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const http = require('http').Server(http);
const io = require('socket.io')(http);

app.use(cors());
console.log('Teste');

if (http) {
  console.log(`Existe um ${http}`);
} else {
  console.log(`Não existe HTTP nenhum!!!`);
}

if (io) {
  console.log(`Existe um ${io}`);
} else {
  console.log(`Não existe IO nenhum!!!`);
}

http.listen(3030);
// class App {
//  constructor() {
//    this.server = express();
//    this.middlewares();
//    this.routes();
//  }

//  middlewares() {
//    this.server.use(express.json());
//    this.server.use(cors());
//  }

//  routes() {
//    this.server.use(routes);
//  }
//}

// export default new App().server;
