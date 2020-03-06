import { Router } from 'express';

import UserController from './app/controllers/userController';
import PizzaController from './app/controllers/pizzaController';
import BebidaController from './app/controllers/bebidaController';
import PedidoController from './app/controllers/pedidoController';
import IngredienteController from './app/controllers/ingredienteController';
import SessionController from './app/controllers/sessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/pizzas', PizzaController.store);

routes.post('/bebidas', BebidaController.store);

routes.post('/pedidos', PedidoController.store);
routes.post('/ingredientes', IngredienteController.store);
routes.post('/sessions', SessionController.store );

routes.use(authMiddleware);

routes.put('/users', UserController.update);


export default routes;