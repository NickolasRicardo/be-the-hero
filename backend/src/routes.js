const express =  require('express');
const routes = express.Router();

// Controladores
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//rotas de sessão
routes.post('/sessions', SessionController.create);

//rota das ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


//rota dos casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//rota de profile
routes.get('/profile', ProfileController.index);

module.exports = routes;