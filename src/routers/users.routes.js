const { Router } = require('express');
const usersControllers = require('../controllers/usersController');

const usersRouter = Router();

// /usuarios/
// /usuarios/:idUsuario
usersRouter.get('/', usersControllers.index);
usersRouter.get('/:idUsuario', usersControllers.show);

module.exports = usersRouter;