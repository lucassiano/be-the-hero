const express = require('express');

const ongComtroller = require('./controllers/OngComtroller');
const incidentsComtroller = require('./controllers/incidentsComtroller');
const profileComtroller = require('./controllers/profileComtroller');
const sessionComtroller = require('./controllers/sessionComtroller');

const routes = express.Router();

routes.get('/ongs', ongComtroller.index); 
routes.post('/ongs', ongComtroller.create);

routes.get('/profile', profileComtroller.index);
routes.post('/sessions', sessionComtroller.create);

routes.get('/incidents', incidentsComtroller.index);
routes.post('/incidents', incidentsComtroller.create);
routes.delete('/incidents/:id', incidentsComtroller.delete)
    
module.exports = routes;