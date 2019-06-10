const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AgendamentoController = require('./controllers/AgendamentoController');
const AtendimentoController = require('./controllers/AtendimentoController');
const DentistaController = require('./controllers/DentistaController');

//Rotas usuários

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

//Rotas Agendamento

routes.get('/agendamento', AgendamentoController.index);
routes.get('/agendamento/:id', AgendamentoController.show);
routes.post('/agendamento', AgendamentoController.store);

//Rotas Atendimento

routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentoController.show);
routes.post('/atendimentos', AtendimentoController.store);

//Rotas Dentistas

routes.get('/dentistas', DentistaController.index);
routes.get('/dentistas/:id', DentistaController.show);
routes.post('/dentistas', DentistaController.store);
routes.put('/dentistas/:id', DentistaController.update);
routes.delete('/dentistas/:id', DentistaController.destroy);

module.exports = routes;