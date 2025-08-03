const route = require('express').Router();
const appController = require("../controllers/app.controller")

route.get('/', appController.home);
route.get('/404', appController.notFound);
route.get('/blank', appController.blank);
route.get('/login', appController.login);
route.get('/register', appController.register);
route.get('/forgot-password', appController.forgotPassword);
route.get('/buttons', appController.buttons);
route.get('/cards', appController.cards);
route.get('/utilities-color', appController.utilitiesColor);
route.get('/utilities-border', appController.utilitiesBorder);
route.get('/utilities-animation', appController.utilitiesAnimation);
route.get('/utilities-other', appController.utilitiesOther);
route.get('/charts', appController.charts);
route.get('/tables', appController.tables);
    

module.exports = route;