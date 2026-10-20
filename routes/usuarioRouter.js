import express from 'express'
import Usuario from '../controllers/usuarioController.js';
const router = express.Router();
const usuario = new Usuario()
router.post("/", usuario.addUsuario)

export default router;