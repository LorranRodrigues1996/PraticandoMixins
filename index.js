
import Usuario from "./controllers/usuarioController.js";
import Pedido from "./controllers/pedidoController.js";
Usuario
const usuario = new Usuario(
    "Carlos",
    "carlos@exemplo.com"
);

const pedido = new Pedido(
    1001,
    250.90
);

console.log(usuario.nome);
console.log(usuario.enviarEmail("Bem-vindo!"));
console.log(usuario.enviarSMS("Seu cadastro foi realizado."));

console.log(pedido.numero);
console.log(pedido.enviarEmail("Seu pedido foi confirmado!"));
console.log(pedido.enviarSMS("Seu pedido está a caminho."));
