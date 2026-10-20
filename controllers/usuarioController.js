
import Notificavel from "../services/mixin.js";

class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

Object.assign(Usuario.prototype, Notificavel);

export default Usuario;
