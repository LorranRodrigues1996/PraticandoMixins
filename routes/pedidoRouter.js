import express from 'express'
import Pedidos from '../controllers/pedidoController.js';
const router = express.Router();
const pedido = new Pedidos()
router.post("/", pedido.addPedido)

export default router;