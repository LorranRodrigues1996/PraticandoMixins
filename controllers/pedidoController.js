
import Notificavel from "../services/mixin.js";

class Pedido {
    constructor(numero, valor) {
        this.numero = numero;
        this.valor = valor;
    }
}

Object.assign(Pedido.prototype, Notificavel);

export default Pedido;
